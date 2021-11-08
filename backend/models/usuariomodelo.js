const mongoose = require('mongoose');
const {Schema} = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const usuarioSchema = new Schema({

    nombre : {
        type : String,
        required : true,
        maxLength : 50
    },
    password : {

        type : String,
        required : true,
        maxLength : 100
    },
    correo : {
        type : String,
        required : true,
        maxLength : 50,
        unique : true,
        trim : true,
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    rol: {
        type : String,
        required : true,
        maxLength : 50,
        enum : ['Administrador', 'Gestor'],

    },
    estado: {
        type : Number,
        default : 1,
    },
    createdAt: {
        type : Date,
        default : Date.now,
    },
})


const usuario = mongoose.model('usuario', usuarioSchema);

module.exports =  usuario;
