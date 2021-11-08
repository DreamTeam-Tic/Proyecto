const express = require('express'); //se requiere expres para usar los metodos internos
const router = express.Router(); //se requiere router para usar los metodos internos


const servicioController = require('../controllers/ServiciosController');
// router.post('/add',servicioController.add)

// Multer configuration
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        // cb(null, "../uploads");
        cb(null, "../uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});


const upload = multer({ storage: storage });

router.post('/add', upload.single("ImagenPrincipal"),servicioController.add)

module.exports = router