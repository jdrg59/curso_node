const Server = require('./models/server');

require('dotenv').config();//Variables de entorno

const server = new Server();

server.listen();