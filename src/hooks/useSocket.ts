import { useEffect } from 'react';

import socketService from "@/services/SocketService/SocketService";

export const useSocket = () => {
  useEffect(() => {
    socketService.createConnection();
  }, []);
};
