require('dotenv').config();
// const debug = require("debug")("node-angular");
const Server = require('./backend/models/server.model');
const server = new Server();
// const port = server.getPort();
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
// const onListening = () => {
//     // const addr = server.address();
//     const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//     debug("Listening on " + bind);
// };

// server.on("error", onError);
// server.on("listening", onListening);
server.listen();