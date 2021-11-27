const mongoose = require('mongoose');
const {Schema} = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const consumidorSchema = new Schema({

    adoptante : {
        type: Schema.ObjectId, ref: 'consumidor'

    },

    nombre : {
        type : String,
        required : true,
        maxLength : 50,
    },

    apellido : {
        type : String,
        required : true,
        maxLength : 50,

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

    direccion : {
        type : String,
        maxLength : 50,
    },

    numero: {
        type : Number,
        default : 0,
        required : true,
        maxlength: 20,
    },

    ciudad: {
        type : String,
        required : true,
        maxLength : 50,    
    },
    observacion: {
        type : String,
        required : true,
        maxLength : 500,   
    },
   
    createdAt: {
        type : Date,
        default : Date.now,
    },
})


const Consumidor = mongoose.model('consumidor', consumidorSchema);

module.exports =  Consumidor;
