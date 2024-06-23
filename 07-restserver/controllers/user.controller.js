//esto es opcional, solo es para intellicence
const { response } = require('express');

const usuariosGet = (req, res = response ) => {
    res.json({
        msg: 'get API - Controlador'
    })
}

const usuariosPost = (req, res = response) => {
    //accedo a la  API la info que viene
    const body = req.body

    res.status(201).json({
        msg: 'post API',
        body

    })
  }

const usuariosPut = (req, res = response) => {
    res.status(400).json({
        msg: 'Put API'
    })
  }

 const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    })
  }


//como exportaremos muchos objetos
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}

