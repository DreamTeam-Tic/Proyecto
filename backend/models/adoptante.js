const mongoose = require('mongoose');
const {Schema} = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const adoptanteSchema = new Schema({

    adoptante : {
        type: Schema.ObjectId, ref: 'adoptante'

    },

    nombre : {
        type : String,
        required : true,
        maxLength : 50,
        unique : true,
    },



    numero: {
        type : Number,
        default : 0,
        required : true,
        maxlength: 20,
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


    
    createdAt: {
        type : Date,
        default : Date.now,
    },
})


const Adoptante = mongoose.model('adoptante', adoptanteSchema);

module.exports =  Adoptante;
