const mongoose = require('mongoose');
const {Schema} = mongoose;


const categoriaSchema = new Schema({

    categoria : {
        type: Schema.ObjectId, ref: 'categoria'

    },

    nombre : {
        type : String,
        required : true,
        maxLength : 50,
        unique : true,
    },

    descripcion : {
        type : String,
        maxLength : 250,
        // unique : true,
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


const Categoria = mongoose.model('categoria', categoriaSchema);

module.exports =  Categoria;
