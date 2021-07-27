const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    // const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
// const io = require('./socket.js').init(server);

// io.on('connection', (socket) => {
//     console.log(`A user connected with socket ${socket.id}`);
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
//     socket.on('my message', (msg) => {
//         console.log(msg);
//         io.emit('my broadcast', `server: ${msg}`);
//     });
// });

module.exports = server;
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
