const models = require('../models');


module.exports = {

    add : async (req, res, next) => {
        
        try {

            let chequear = await models.Consumidor.findOne({
                correo: req.body.correo


            });
            if (!chequear) {
                const registro = await models.Consumidor.create(req.body);
                res.status(200).json(registro);
            } else {
                res.status(400).send({
                    message: "Ya se envio la informacion al servidor."
                })
            }
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
        }

    },

    list: async(req,res,next)=>{
        try {
            
             const registro = await models.Consumidor.find({$or : [{'nombre': new RegExp(req.query.valor, 'i')}, {'correo': new RegExp(req.query.valor, 'i')}]}, {createdAt: 0, __v :0, password: 0}).sort({'createdAt': -1})
            //const registro = await models.Consumidor.find({$or : [{'nombre': new RegExp(req.query.valor, 'i')},{'apellido': new RegExp(req.query.valor, 'i')}, {'correo': new RegExp(req.query.valor, 'i')},{'numero': new RegExp(req.query.valor, 'i')}]}, {createdAt: 0, __v :0, password: 0}).sort({'createdAt': -1})
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
            const registro = await models.Consumidor.findOne({
                correo: req.query.correo
                
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
}