//install npm i jsonwebtoken --save
var jwt = require('jsonwebtoken');

module.exports = {
    encode : async (user) =>{
        const token = jwt.sign({

            _id : user._id,
            nombre: user.nombre,
            correo: user.correo,
            rol: user.rol
        }, 'frasesecretaparapets4all', {expiresIn : 86400});
        return token;
    }
}