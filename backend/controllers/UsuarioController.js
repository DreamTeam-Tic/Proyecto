const models = require('../models');
const bcrypt = require('bcrypt');
const token = require('../services/token')
// const { restart } = require('nodemon');

module.exports = {

    

    list: async(req,res,next)=>{
        try {
            
            const registro = await models.Usuario.find({$or : [{'nombre': new RegExp(req.query.valor, 'i')}, {'correo': new RegExp(req.query.valor, 'i')}, {'rol': new RegExp(req.query.valor, 'i')}]}, {createdAt: 0, __v :0}).sort({'createdAt': -1})
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
            const registro = await models.Usuario.findOne({
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

    update: async(req, res, next) =>{

        try {

            let auxPassword = req.body.password;
            const auxRegistro = await models.Usuario.findOne({correo: req.body.correo});

            if (auxPassword !== auxRegistro.password){

                req.body.password = await bcrypt.hash(req.body.password, 10);

            }else{
                res.status(404).send({
                    message: 'no encontrado'
                })
      
            }

            const reg = await models.Usuario.updateOne({correo: req.body.correo},{rol : req.body.rol, password: req.body.password, nombre: req.body.nombre});
            res.status(200).json(reg);
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
        }


    },

    enable: async(req, res, next) =>{

        try {

            const reg = await models.Usuario.findByIdAndUpdate({_id: req.body._id},{estado: 1})
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

            const reg = await models.Usuario.findByIdAndUpdate({_id: req.body._id},{estado: 0})
            res.status(200).json(reg)
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
            
        }

    },
    
    add : async (req, res, next) => {
        
        try {
            
            let chequear = await models.Usuario.findOne({
                correo: req.body.correo
                
                
            });
            if (!chequear) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
                const registro = await models.Usuario.create(req.body);
                res.status(200).json(registro);
            } else {
                res.status(400).send({
                    message: "Usuario no Válido"
                })
            }
            
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error interno"
            });
            next(error);
        }
        
    },
    
    login : async (req, res, next) =>{

        try {
            let usuario = await models.Usuario.findOne({
                correo: req.body.correo,
                estado: 1
            });

            if(usuario){

                let comparar = await bcrypt.compare(req.body.password, usuario.password);
                if (comparar) {
                    
                    let tokenReturn = await token.encode(usuario);

                    res.status(200).json({usuario, tokenReturn});
                } else{

                    res.status(401).send({
                        message: "datos incorrectos"
                    });
                }

            }else{
                res.status(400).send({
                    message: "usuario no encontrado"
                });

            }
            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error"
            })
            next(error);
        }
    },


}