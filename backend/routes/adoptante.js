const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos

const adoptanteController = require('../controllers/AdoptanteController'); //controlador de metodos


router.post('/add', adoptanteController.add); // añadir adoptante

router.get('/list', adoptanteController.list); // listar usuarios

router.get('/query', adoptanteController.query); // buscar por correo querys atravez de params

module.exports = router