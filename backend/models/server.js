const express = require('express');
const cors = require('cors');
const path = require("path");

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT; //|| "3000");

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

    middlewares() {
        // CORS: para evitar errores del tipo crossed domain access
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, 'dist/mean-course')));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use("/images", express.static(path.join("backend/images")));
        this.app.use("/files", express.static(path.join("backend/files")));

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
        // this.authPath = '/api/auth';
        this.app.use("/api/users", require('../routes/users'));
        this.app.use("/api/users", require('../routes/users'));
        this.app.use("/api/posts", require('../routes/posts'));
        this.app.use("/api/populate", require('../routes/populate'));
        this.app.use("/api/workspaces", require('../routes/workspaces'));
        this.app.use("/api/roles", require('../routes/roles'));
        this.app.use("/api/invitations", require('../routes/invitations'));
        this.app.use("/api/collections", require('../routes/collections'));
        this.app.use("/api/datafiles", require('../routes/datafiles'));
        this.app.use("/api/esquemas", require('../routes/esquemas'));
        this.app.use("/api/configurations", require('../routes/configurations'));
        this.app.use("/api/tests", require('../routes/tests'));
        this.app.use("/api/errors", require('../routes/errors'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor (API Node) corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;
