const express = require('express')
const router = express.Router()
const { obtenerLugares } =  require('../controllers/lugares.controllers')


console.log('Archivo de rutas cargado')

router.get('/', obtenerLugares )

router.get('/', (req, res) => {
  console.log('GET /api/lugares solicitado')
  obtenerLugares(req, res)
})

module.exports = router