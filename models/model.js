const mongoose = require("mongoose");



const usuariosSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    nombreUsuario: {
        type: String,
        unique: true
    },
    contraseña: {
        type: String,
        unique: true
    },
    correo:{
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('usuario', usuariosSchema);