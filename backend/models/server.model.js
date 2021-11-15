const express = require('express');
const cors = require('cors');
const path = require("path");
const { dbConnection } = require('../database/config');
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        //console.log(process.env.PORT);
        this.port = 3000;

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }

    getApp() {
        return this.app;
    }

    getPort() {
            return this.port;
        }
        // normalizePort(val) {
        //     var port = parseInt(val, 10);
        //     if (isNaN(port)) {
        //         // named pipe
        //         return val;
        //     }
        //     if (port >= 0) {
        //         // port number
        //         return port;
        //     }
        //     return false;
        // }
        //
    middlewares() {
        // CORS: para evitar errores del tipo crossed domain access
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.static('/app/dist/tablab'));
        //this.app.use(express.static('../dist/tablab'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use("/users", express.static(path.join("backend/uploads/users")));
        this.app.use("/datafiles", express.static(path.join("backend/uploads/datafiles")));

        this.app.use("/assets", express.static(path.join("backend/assets")));
        this.app.use("/files", express.static(path.join("backend/files")));

        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

            res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");

            next();
        });

    }

    routes() {
        this.app.use("/api/auth", require('../routes/auth'));
        this.app.use("/api/users", require('../routes/users'));
        this.app.use("/api/populate", require('../routes/populate'));
        this.app.use("/api/workspaces", require('../routes/workspaces'));
        this.app.use("/api/roles", require('../routes/roles'));
        this.app.use("/api/invitations", require('../routes/invitations'));
        this.app.use("/api/collections", require('../routes/collections'));
        this.app.use("/api/datafiles", require('../routes/datafiles'));
        this.app.use("/api/esquemas", require('../routes/esquemas'));
        this.app.use("/api/configurations", require('../routes/configurations'));
        this.app.use("/api/tests", require('../routes/tests'));
        this.app.use("/api/reports", require('../routes/reports'));
        this.app.use("/api/uploads", require('../routes/uploads'));
        this.app.use("/api/activities", require('../routes/activities'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor (API Node) corriendo en puerto', process.env.PORT);
        });
    }

}

module.exports = Server;