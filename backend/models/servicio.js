const mongoose = require('mongoose');
const {Schema} = mongoose;

//Tablas de bd
const servicioSchema= new Schema({

    nombre: {
        type:String,
        required : true,
    },

    descripcion:{
        type: String,
        required : true,
        
    },

    imagenPrincipal: {
        type: String,
    },

    estado: {
        type : Number,
        default : 1,
    },
    
    createdAt:{
        type:Date,
        default: Date.now,
    },
});

//Convertir esquema a modelo 
const Servicio = mongoose.model('servicio', servicioSchema);

module.exports =  Servicio;