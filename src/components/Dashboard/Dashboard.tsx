'use client';

import cn from 'classnames';

import { useDashboard } from '@/components/Dashboard/dashboard.controller';
import { Currency } from './Currency/Currency';
import s from './dashboard.module.scss';

export const Dashboard = () => {
  const { state, handle } = useDashboard();
  const { time, requestTime, previewCurrencies, currencies, isConnected } = state;
  const { startDataHandle, stopDataHandle } = handle;

  return (
    <div className={s.root}>
      <h2>Bitcoin currency</h2>
      <div className={s.buttons}>
        <button
          disabled={!isConnected}
          className={cn(s.startButton, s.button)}
          onClick={startDataHandle}>Start loading data</button>
        <button
          className={cn(s.stopButton, s.button)}
          onClick={stopDataHandle}>Stop loading data</button>
      </div>
      {time && (
        <div className={s.time}>
          <div>Request Time: {requestTime}</div>
          <div>Time: {time}</div>
        </div>
      )}
      <div className={s.currencies}>
        {previewCurrencies &&
          currencies.map((currency, i) =>
            <Currency
              key={currency.code}
              currency={currency}
              previewCurrency={previewCurrencies[i].current}
            />)
        }
      </div>
    </div>
  );
}
