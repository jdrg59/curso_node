const express = require('express')
const app = express()

//Servir contendio estatico
app.use( express.static('public'))


app.get('/hola-mundo', function (req, res) {
    res.send('hola mundo en su respectiva ruta')
})
app.get('*', function (req, res) {
    // res.send('404 | page not found')
    //res.sendFile(__dirname + '/public/404.html') //para mostrar un error al que desea acceder
    res.sendFile(__dirname + '/public/404.html')
})

console.log('run port');
app.listen(8080)