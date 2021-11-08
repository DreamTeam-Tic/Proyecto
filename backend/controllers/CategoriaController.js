const models = require("../models");

module.exports = {
  add: async (req, res, next) => {
    try {
      let chequear = await models.Categoria.findOne({
        nombre: req.body.nombre,
      });
      if (!chequear) {
        const registro = await models.Categoria.create(req.body);
        res.status(200).json(registro);
      } else {
        res.status(400).send({
          message: "Ya esta creado una categoria con este nombre",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error interno",
      });
      next(error);
    }
  },

  list: async (req, res, next) => {
    try {
      const registro = await models.Categoria.find(
        { $or: [{ nombre: new RegExp(req.query.valor, "i") }] },
        { createdAt: 0, __v: 0 }
      ).sort({ createdAt: -1 });
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error interno",
      });
      next(error);
    }
  },

  query: async (req, res, next) => {
    try {
      const registro = await models.Categoria.findOne({
        nombre: req.query.nombre,
      });
      if (registro) {
        res.status(200).json(registro);
      } else {
        res.status(404).send({
          message: "no encontrado",
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error interno",
      });
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      let chequear = await models.Categoria.findOne({
        nombre: req.body.nombre,
      });
      if (chequear) {
        const reg = await models.Categoria.findByIdAndUpdate(
          { _id: req.body._id },
          {
            descripcion: req.body.descripcion,
          }
        );
        res.status(200).json(reg);
      } else {

          const reg = await models.Categoria.findByIdAndUpdate(
            { _id: req.body._id },
            { nombre: req.body.nombre, descripcion: req.body.descripcion }
          );
          res.status(200).json(reg);
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error interno",
      });
      next(error);
    }
  },

  enable: async (req, res, next) => {
    try {
      const reg = await models.Categoria.findByIdAndUpdate(
        { _id: req.body._id },
        { estado: 1 }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error interno",
      });
      next(error);
    }
  },
  disable: async (req, res, next) => {
    try {
      const reg = await models.Categoria.findByIdAndUpdate(
        { _id: req.body._id },
        { estado: 0 }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error interno",
      });
      next(error);
    }
  },

  remove: async (req, res, next) => {

    try {

        const reg = await models.Categoria.findByIdAndDelete({_id: req.body._id})
        res.status(200).json(reg)
        
        
    } catch (error) {

        res.status(500).send({
            message: "Ocurrio un error interno",
          });
        
          next(error);
    }
  }
};
