const http = require("http");
const Server = require('./backend/models/server.model');
const serverConfig = new Server();
const port = serverConfig.getPort();

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
serverConfig.listen(port);
console.log("Escuchando en el puerto " + port + "...");