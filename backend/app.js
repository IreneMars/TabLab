// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const path = require("path");
// const cors = require('cors');
// const userRoutes = require('./routes/user');
// const workspacesRoutes = require('./routes/workspaces');
// const rolesRoutes = require('./routes/roles');
// const invitationsRoutes = require('./routes/invitations');
// const collectionsRoutes = require('./routes/collections');
// const datafilesRoutes = require('./routes/datafiles');
// const esquemasRoutes = require('./routes/esquemas');
// const configurationsRoutes = require('./routes/configurations');
// const errorsRoutes = require('./routes/reports');
// const testsRoutes = require('./routes/tests');
// const populateRoutes = require('./routes/populate');
// const app = express();
//
// mongoose.connect("mongodb+srv://irene:" + process.env.MONGO_ATLAS_PW + "@cluster0.cptpi.mongodb.net/node-angular?retryWrites=true&w=majority")
//     .then(() => {
//         console.log('Connected to database!');
//     })
//     .catch(() => {
//         console.log('Connection failed!');
//     });
//cors
//app.use(cors()); // para evitar errores del tipo crossed domain access
//Lectura y parseo del body de las llamadas a la API
//app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/images", express.static(path.join("backend/images")));
// app.use("/files", express.static(path.join("backend/files")));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     next();
// });

// app.use("/api/user", userRoutes);
// app.use("/api/populate", populateRoutes);
// app.use("/api/workspaces", workspacesRoutes);
// app.use("/api/roles", rolesRoutes);
// app.use("/api/invitations", invitationsRoutes);
// app.use("/api/collections", collectionsRoutes);
// app.use("/api/datafiles", datafilesRoutes);
// app.use("/api/esquemas", esquemasRoutes);
// app.use("/api/configurations", configurationsRoutes);
// app.use("/api/tests", testsRoutes);
// app.use("/api/reports", reportsRoutes);
// module.exports = app;
require('dotenv').config();
const http = require("http");
const debug = require("debug")("node-angular");


const Server = require('./models/server');
const serverConfig = new Server();
//change
const port = serverConfig.getPort();

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

const server = http.createServer(serverConfig.getApp());
module.exports = server;

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
console.log("Escuchando en el puerto " + port + "...");