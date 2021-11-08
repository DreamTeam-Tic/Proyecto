const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos

const categoriaController = require('../controllers/CategoriaController'); //controlador de metodos


router.post('/add', categoriaController.add); // añadir categoria


router.post('/add', categoriaController.add); // añadir categorias 

router.get('/list', categoriaController.list); // listar categorias

router.get('/query', categoriaController.query); // buscar por categorias querys por params
router.delete('/remove', categoriaController.remove);
router.put('/update', categoriaController.update);
router.put('/enable', categoriaController.enable);
router.put('/disable', categoriaController.disable);

module.exports = router