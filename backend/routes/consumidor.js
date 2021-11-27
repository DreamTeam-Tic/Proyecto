const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos

const consumidorController = require('../controllers/ConsumidorController'); //controlador de metodos


router.post('/add', consumidorController.add); // añadir Consumidor

router.get('/list', consumidorController.list); // listar usuarios

router.get('/query', consumidorController.query); // buscar por correo querys atravez de params

module.exports = router