const express = require('express');
const router = express.Router();

const usuarioRouter = require('./usuario');
const adoptanteRouter = require('./adoptante');
const categoriaRouter = require('./categoria');
const mascotaRouter = require('./mascota');
const servicioRouter = require('./servicio')

router.use('/usuario', usuarioRouter);
router.use('/adoptante', adoptanteRouter);
router.use('/categoria', categoriaRouter);
router.use('/mascota', mascotaRouter);
router.use('/servicio', servicioRouter)





module.exports = router;