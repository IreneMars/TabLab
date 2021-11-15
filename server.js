const Server = require('./backend/models/server.model');
const server = new Server();
server.listen();
// const onError = error => {
//     if (error.syscall !== "listen") {
//         throw error;
//     }
//     const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//     switch (error.code) {
//         case "EACCES":
//             console.error(bind + " requires elevated privileges");
//             process.exit(1);
//             break;
//         case "EADDRINUSE":
//             console.error(bind + " is already in use");
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// };
// const server = http.createServer(serverConfig.getApp());
// module.exports = server;
// server.on("error", onError);