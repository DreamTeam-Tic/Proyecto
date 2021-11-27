const models = require("../models");

//Peticiones: 1.Agregar registro sin imagen

//pendiente imagen!!

module.exports = {

    add: async (req, res) => {

        const body = req.body;
        
        try {
          if (req.file != undefined) {
            body.imagenPrincipal = "/" + req.file.filename;
            console.log(body.imagenPrincipal)
            // res.status(200).json(body.imagenPrincipal)
          }
          const registro = await models.Servicio.create(body);
          res.status(200).json(registro);
          
        } catch (error) {
          
          return res.status(500).json({
            mensaje: "Ocurrio algo inesperado",
            error,
          });
        }
      },
  
      list: async (req,res,next) => {
        try {

            const registro = await models.Servicio.find({$or : [{'nombre': new RegExp(req.query.valor,'i')},{'descripcion': new RegExp(req.query.valor,'i')},{'imagenPrincipal': new RegExp(req.query.valor,'i')}]},{createdAt: 0, __v :0}).sort({'createdAt': -1})
            // const registro = await models.Servicio.find({$or : [{'nombre': new RegExp(req.query.valor,'i')},{'descripcion': new RegExp(req.query.valor,'i')}]},{createdAt: 0, __v :0}).sort({'createdAt': -1})
            res.status(200).json(registro);

        } catch (error){
            res.status(500).send({
              message: "Ocurrio un error" 
             });
             next(error);
        }

      },
      
      listId: async(req, res)=>{

        const id = req.params.id
        const registro = await models.Servicio.findById({_id: id})
        res.status(200).json(registro)
    
    
      },

      query: async(req, res, next)=>{

        try{
          const registro = await models.Servicio.findOne({
            nombre: req.query.nombre
          })
          if(registro){
            res.status(200).json(registro);
          }else {
            res.status(404).send({
              message: 'no encontrado'
            })
          }
        }catch (error) {
          res.status(500).send({
            message:"Ocurrio un error interno"
          });
          next (error);
        }

      },
    
    // update: async(req, res, next)=>{
      
    //   try{
    //     let chequear = await models.Servicio.findOne({
    //       nombre: req.body.nombre,
    //     });

    //     if(chequear){
    //       const reg = await models.Servicio.findByIdAndUpdate(
    //         { _id: req.body._id},
    //         { 
    //           descripcion: req.body.descripcion,
    //           imagenPrincipal: req.body.imagenPrincipal,
    //         }
    //       );
    //       res.status(200).json(reg);
    //     }else{

    //       const reg = await models.Servicio.findByIdAndUpdate(
    //         {_id: req.body._id},
    //         { nombre: req.body.nombre,
    //           descripcion: req.body.descripcion,
    //           imagenPrincipal: req.body.imagenPrincipal,}
    //       );
    //       res.status(200).json(reg);
    //     }
    //   }catch (error){
    //     res.status(500).send({
    //       message: "Ocurrio un error interno"
    //     });
    //     next(error);
    //   }
    // },

      update: async(req, res)=>{

        const id = req.params.id

        const reg = await models.Servicio.findByIdAndUpdate({_id: id}, req.body)

        console.log(reg)

        res.status(200).json({

            mensaje: "Se actualizo el servicio"
        })
        
      },

    enable: async(req, res, next)=>{
      
      try{
        
        const reg = await models.Servicio.findByIdAndUpdate({_id: req.body._id},{estado: 1})
        res.status(200).json(reg)

      } catch(err){
        res.status(500).send({
          message:"Ocurrio un error interno"
        });
        next(error);
      }

    },
    disable: async(req, res, next)=>{
      
      try{
        const reg = await models.Servicio.findByIdAndUpdate({_id: req.body._id},{estado:0})
        res.status(200).json(reg)
      
      }catch (error){
        res.status(500).send({
          message: "Ocurrio un error interno"
        });
        next(error);
      }
    },
    
    // remove: async (req, res, next) => {

    //   try{

    //     const reg = await models.Servicio.findByIdAndDelete({_id:req.body._id})
    //     res.status(200).json(reg)
      
    //   }catch(error){

    //     res.status(500).send({
    //       message:"Ocurrio un error interno",
    //     })
    //     next(error);
    //   }

    // },

    remove: async (req,res)=>{

      const id = req.params.id

      try{
      const reg = await models.Servicio.findByIdAndRemove({_id:id})

      res.json({

          mensaje: 'Servicio Eliminado'
      })
      }catch(err){

          return res.status(400).json({

              mensaje: "ocurrio un error eliminando",
              err
          })
      }
  }
  

};
