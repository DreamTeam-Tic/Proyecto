const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos

const usuarioController = require('../controllers/UsuarioController'); //controlador de metodos

router.post('/login', usuarioController.login); //login usuario

router.post('/add', usuarioController.add); // añadir usuario 

router.get('/list', usuarioController.list); // listar usuarios

router.get('/query', usuarioController.query); // buscar por correo querys atravez de params

router.put('/update', usuarioController.update);
router.put('/enable', usuarioController.enable);
router.put('/disable', usuarioController.disable);

module.exports = router