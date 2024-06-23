//esto es opcional, solo es para intellicence
const { response } = require('express');

const usuariosGet = (req, res = response ) => {
    res.json({
        msg: 'get API - Controlador'
    })
}

const usuariosPost = (req, res = response) => {
    res.status(201).json({
        msg: 'post API'
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

