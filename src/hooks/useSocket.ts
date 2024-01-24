import { useEffect, useState } from 'react';

import socketService from '@/services/SocketService/SocketService';

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // TODO api backend form environment, don't work. Why?
    socketService.createConnection('https://easy-pink-firefly-hat.cyclic.app');
    socketService.socket?.on('connect', () => {
      console.log('connect')
      setIsConnected(true);
    })
    socketService.socket?.on('disconnect', () => {
      console.log('disconnect')
      setIsConnected(false);
    })
  }, []);

  return { isConnected };
};
