
const models = require('../models');

module.exports = {

    list: async(req,res,next)=>{
        try {
            
            const registro = await models.Mascota.find({$or : [{'nombre': new RegExp(req.query.valor, 'i')}, {'raza': new RegExp(req.query.valor, 'i')}, {'tamaño': new RegExp(req.query.valor, 'i')}]}, {createdAt: 0, __v :0}).sort({'createdAt': -1})
            res.status(200).json(registro);

        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
        }
    },

    query: async(req, res, next)=>{

        try {
            const registro = await models.Mascota.findOne({
                nombre: req.query.nombre
            })
            if (registro){
                res.status(200).json(registro);
            }else{
                res.status(404).send({
                    message: 'no encontrado'
                })
            }
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
        }

    },

    update: async(req, res, next) =>{

        try {
            let chequear = await models.Mascota.findOne({
                nombre: req.body.nombre,
              });
            
            
              if(chequear){
                const reg = await models.Mascota.findByIdAndUpdate(
                    { _id: req.body._id },
                    {
                    //   nombre: req.body.nombre,
                      raza: req.body.raza,
                      tamaño: req.body.tamaño,
                    }
                  );
                  res.status(200).json(reg);
              }else{

                const reg = await models.Mascota.findByIdAndUpdate(
                    { _id: req.body._id },
                    { nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    raza: req.body.raza,
                    tamaño: req.body.tamaño, }
                  );
                  res.status(200).json(reg);

              }
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
        }


    },

    enable: async(req, res, next) =>{

        try {

            const reg = await models.Mascota.findByIdAndUpdate({_id: req.body._id},{estado: 1})
            res.status(200).json(reg)
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
            
        }

    },
    disable: async(req, res, next) =>{

        try {

            const reg = await models.Mascota.findByIdAndUpdate({_id: req.body._id},{estado: 0})
            res.status(200).json(reg)
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
            
        }

    },
    
    add : async (req, res) => {

        const body = req.body
        
        try {
            if(req.file != undefined){
                body.imagenMascota = "/" + req.file.filename;
                console.log(body.imagenMascota)
            }
            const registro = await models.Mascota.create(body);
            res.status(200).json(registro);

            } catch (error) {

                return res.status(500).json({
                    message:"Ocurrio algo inesperado",    
                    error,
                });
            }
        },

    remove: async (req, res, next) => {

        try {
    
            const reg = await models.Mascota.findByIdAndDelete({_id:req.body._id})
            res.status(200).json(reg)
            
            
        } catch (error) {
    
            res.status(500).send({
                message: "Ocurrio un error interno",
              });
            
              next(error);
        }
    }

};