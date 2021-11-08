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
      }
    
    
  

};
