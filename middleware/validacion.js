const Usuarios  = require('../models/model');
const { res } = require('express')

const validacionEmail = async(correo) => {
    const validarEmail = await Usuarios.findOne({correo});
    if (validarEmail){
        return res.status(400).json({
            msg: 'el correo ya esta registrado'
        })
    }
}

module.exports = {
    validacionEmail
}