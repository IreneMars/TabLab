const express = require('express');
const cors = require('cors');
const path = require("path");
const { dbConnection } = require('../database/config');
const aws = require('aws-sdk');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Configurar AWS
        this.configurarAWS();

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    configurarAWS() {
        aws.config.region = 'eu-west-1';
    }

    async conectarDB() {
        await dbConnection(process.env.MONGODB_CNN);
    }

    getApp() {
        return this.app;
    }

    getPort() {
        return this.port;
    }

    middlewares() {
        // CORS: para evitar errores del tipo crossed domain access
        this.app.use(cors());

        // Lectura y parseo del body 
        this.app.use(express.json());
        this.app.use(express.static('/app/dist/tablab'));
        this.app.use(express.urlencoded({ extended: false }));

        this.app.use("/users", express.static(path.join("backend/uploads/users")));
        this.app.use("/datafiles", express.static(path.join("backend/uploads/datafiles")));
        this.app.use("/esquemas", express.static(path.join("backend/uploads/esquemas")));
        this.app.use("/assets", express.static(path.join("backend/assets")));

        this.app.use((req, res, next) => {
            // Permitimos solo a nuestra aplicacion de angular hacer llamadas a nuestra api
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

            // Cabeceras que enviamos en cada respuesta
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

            // Métodos REST que vamos a permitir
            res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS");

            // Pasar al siguiente middleware
            next();
        });

    }

    routes() {
        this.app.use('/api/status/', function(req, res, next) {
            res.sendStatus(200);
        });
        this.app.use("/api/auth", require('../routes/auth'));
        this.app.use("/api/users", require('../routes/users'));
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
        this.app.use("/api/terminals", require('../routes/terminals'));
        this.app.use("/api/fricErrors", require('../routes/fricErrors'));
        this.app.use("/api/gconfiguration", require('../routes/globalConfiguration'));
        this.app.use("/api/suggestions", require('../routes/suggestions'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor (API Node) corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;