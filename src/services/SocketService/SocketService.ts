import io, { Socket } from "socket.io-client";

class SocketService {
   socket: null | Socket = null;

   createConnection(apiBackend: string) {
    this.socket = io(apiBackend);
  }
}
const socketService = new SocketService();

export default socketService;
