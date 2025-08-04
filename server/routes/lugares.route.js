const express = require('express')
const router = express.Router()
const { obtenerLugares, lugarPorId, crearLugar, actualizarLugar, eliminarLugar, obtenerCategorias } =  require('../controllers/lugares.controllers')


console.log('Archivo de rutas cargado')


router.get('/', obtenerLugares)

router.get('/categorias', obtenerCategorias )

router.get('/:id', lugarPorId)


router.post('/', crearLugar )

router.put('/:id', actualizarLugar)

router.delete('/:id', eliminarLugar)







module.exports = router