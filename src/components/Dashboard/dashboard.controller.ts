import { useSocket } from "@/hooks/useSocket";
import { useEffect, useRef, useState } from "react";
import { CurrencyResponse, CurrencyType } from "@/components/Dashboard/types";
import socketService from "@/services/SocketService/SocketService";

export const useDashboard = () => {
  const { isConnected } = useSocket();
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
  const [time, setTime] = useState<string>();
  const [requestTime, setRequestTime] = useState<string>();


  const startDataHandle = () => {
    socketService.socket?.emit('server-currency');
  }

  const stopDataHandle = () => {
    socketService.socket?.close();
  }

  const getCurrencies = (response: CurrencyResponse): CurrencyType[] => {
    if (response?.bpi) {
      // not work with Object.keys(response.bpi) => response.bpi[key]
      const USD: CurrencyType =  {
        code: response.bpi.USD.code,
        rate: response.bpi.USD.rate,
        rate_float: response.bpi.USD.rate_float,
      }

      const GBP: CurrencyType =  {
        code: response.bpi.GBP.code,
        rate: response.bpi.GBP.rate,
        rate_float: response.bpi.GBP.rate_float,
      }

      const EUR: CurrencyType =  {
        code: response.bpi.EUR.code,
        rate: response.bpi.EUR.rate,
        rate_float: response.bpi.EUR.rate_float,
      }

      return [USD, EUR, GBP];
    }
    return [];
  }

  const getTime = (response: CurrencyResponse): string => {
    return response?.time?.updated || '';
  }

  // controversial decision
  const prevCountRef = useRef(currencies[0]);
  const prevCount2Ref = useRef(currencies[1]);
  const prevCount3Ref = useRef(currencies[2]);

  const previewCurrencies = [prevCountRef, prevCount2Ref, prevCount3Ref];

  useEffect( () => {
    socketService.socket?.on('client-currency', e => {
      const data: CurrencyResponse = e.data;
      const currenciesData = getCurrencies(data);
      const time = getTime(data);

      setCurrencies(currenciesData);
      setTime(time);
      setRequestTime(new Date().toLocaleString());
    });

    return () => {
      stopDataHandle();
    }
  }, [])

  useEffect(() => {
    previewCurrencies.forEach((prev, i) => {
      prev.current = currencies[i];
    })
  }, [currencies])

  const state = {
    isConnected,
    currencies,
    time,
    requestTime,
    previewCurrencies,
  }

  const handle = {
    startDataHandle,
    stopDataHandle,
  }

  return {
    state,
    handle,
  }
}
