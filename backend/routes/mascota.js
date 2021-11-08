const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos

const mascotaController = require('../controllers/mascotaController'); //controlador de metodos

router.post('/add', mascotaController.add); // añadir usuario 

router.get('/list', mascotaController.list); // listar usuarios

router.get('/query', mascotaController.query); // buscar por correo querys atravez de params

router.delete('remove', mascotaController.remove);
router.put('/update', mascotaController.update);
router.put('/enable', mascotaController.enable);
router.put('/disable', mascotaController.disable);

module.exports = router