const mongoose = require('mongoose');
const {Schema} = mongoose;



const mascotaSchema = new Schema({

    mascota : {
        type: Schema.ObjectId, ref: 'mascota'

    },

    nombre : {
        type : String,
        required : true,
        maxLength : 50,
        
    },

    raza : {
        type : String,
        required : true,
        maxLength : 50,
        
    },

    tamaño:{
        type : String,
        required : true,
        maxLength : 50,
        enum : ['Pequeño', 'Mediano', 'Grande'],

    },
    imagenMascota: {
        type:String
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


const Mascota = mongoose.model('mascota', mascotaSchema);

module.exports =  Mascota;
