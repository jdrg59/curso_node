//desustructuramos para usar una propiedad de express
const { Router } = require('express');

const router = Router();//llamamos funcion

router.get('/', (req, res) => {
    //res.send('Hello World')
    res.json({
        msg: 'get API'
    })
  })
router.post('/', (req, res) => {
    //res.send('Hello World')
    res.status(201).json({
        msg: 'post API'
    })
  })
router.put('/', (req, res) => {
    //res.send('Hello World')
    res.status(400).json({
        msg: 'Put API'
    })
  })
router.delete('/', (req, res) => {
    //res.send('Hello World')
    res.json({
        msg: 'delete API'
    })
  })

module.exports = router; 