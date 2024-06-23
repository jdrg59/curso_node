//esto es opcional, solo es para intellicence
const { response } = require('express');

const usuariosGet = (req, res = response ) => {

    const {q, nombre, apikey } = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
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

    //obtener id de la URL
    const { id } = req.params;

    res.json({
        msg: 'Put API - usuariosPut',
        id
    });
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

