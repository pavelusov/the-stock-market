import io, { Socket } from "socket.io-client";
import appConfig from "@/config/app-config";

class SocketService {
   socket: null | Socket = null;

   createConnection() {
    this.socket = io(appConfig.API_BACKEND);

    this.socket.on('connect', () => {
      console.log('connect')
    })

     this.socket.on('disconnect', () => {
       console.log('disconnect')
     })
  }
}
const socketService = new SocketService();

export default socketService;
