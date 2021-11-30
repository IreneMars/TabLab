require('dotenv').config();
const Server = require('./backend/models/server.model');
const server = new Server();
server.listen();