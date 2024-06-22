//clases de las rutas
const express = require('express')
const cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT

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
        this.app.get('/api', (req, res) => {
            //res.send('Hello World')
            res.json({
                msg: 'get API'
            })
          })
        this.app.post('/api', (req, res) => {
            //res.send('Hello World')
            res.status(201).json({
                msg: 'post API'
            })
          })
        this.app.put('/api', (req, res) => {
            //res.send('Hello World')
            res.status(400).json({
                msg: 'Put API'
            })
          })
        this.app.delete('/api', (req, res) => {
            //res.send('Hello World')
            res.json({
                msg: 'delete API'
            })
          })
    }
    listen(){
        this.app.listen( process.env.PORT , () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}
module.exports = Server;