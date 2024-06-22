//clases de las rutas
const express = require('express')
const cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //middlewares : Funciones que se ejecutaran al levantar el servidor
        this.middlewares();

        //rutas de mi app
        this.routes();
    }

    middlewares(){
        //Cors
        this.app.use( cors());

        //directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
        //midleware
        this.app.use(this.usuariosPath,require('../routes/user.routes'))
    }
    listen(){
        this.app.listen( process.env.PORT , () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}
module.exports = Server;