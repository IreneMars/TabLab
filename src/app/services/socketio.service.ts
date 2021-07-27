// import { io } from 'socket.io-client';
// import { environment } from 'src/environments/environment';


// export class SocketioService {

//   socket;

//   constructor() {   }

//   setupSocketConnection() {
//     this.socket = io(environment.SOCKET_ENDPOINT);
//   }

//   emitMessage() {
//     this.socket.emit('my message', 'Hello there from Angular.');
//     this.socket.on('my broadcast', (data: string) => {
//       console.log(data);
//     });
//   }
// }
