//desustructuramos para usar una propiedad de express
const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/user.controller');

const router = Router();//llamamos funcion

router.get('/', usuariosGet )

router.post('/', usuariosPost)
router.put('/', usuariosPut)
router.delete('/', usuariosDelete)

module.exports = router; 