// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
// const path = require("path");
// const cors = require('cors');
// const postsRoutes = require('./routes/posts');
// const userRoutes = require('./routes/user');
// const workspacesRoutes = require('./routes/workspaces');
// const rolesRoutes = require('./routes/roles');
// const invitationsRoutes = require('./routes/invitations');
// const collectionsRoutes = require('./routes/collections');
// const datafilesRoutes = require('./routes/datafiles');
// const esquemasRoutes = require('./routes/esquemas');
// const configurationsRoutes = require('./routes/configurations');
// const errorsRoutes = require('./routes/errors');
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

// app.use("/api/posts", postsRoutes);
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
// app.use("/api/errors", errorsRoutes);
// module.exports = app;
require('dotenv').config();
const Server = require('./models/server');
const server = new Server();
server.listen();
