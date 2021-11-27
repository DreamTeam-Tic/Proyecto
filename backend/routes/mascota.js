const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos

const mascotaController = require('../controllers/mascotaController'); //controlador de metodos

// Multer configuration
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        // cb(null, "../uploads");
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname +"_" + Date.now()+ "_" + file.originalname);
    }
});

const model = require("../models")

const upload = multer({storage: storage});

router.post('/add',upload.single("imagenMascota"), mascotaController.add); // añadir usuario 

router.get('/list', mascotaController.list); // listar usuarios
router.get('/list/:id', mascotaController.listId); // listar usuarios

router.get('/query', mascotaController.query); // buscar por correo querys atravez de params

router.delete('/remove/:id', mascotaController.remove);
router.put('/update/:id', mascotaController.update);
router.put('/enable', mascotaController.enable);
router.put('/disable', mascotaController.disable);

module.exports = router