const { response } = require('express');
const Usuarios  = require('../models/model');
const { validationResult } = require('express-validator');
const { validacionEmail } = require('../middleware/validacion')

const getUsuarios = async(req, res = response) => {
    const usuarios = await Usuarios.find();
    res.json({
        usuarios
    });
};
const getUsuario = async(req, res = response) => {
    const _id = req.params['_id'];
    const usuario = await Usuarios.findById(_id);
    res.json({
        usuario
    });
};
const postUsuarios = async(req, res = response) => {
    const {nombre, nombreUsuario, contraseña, correo} = req.body;
    const Usuario = new Usuarios({nombre, nombreUsuario, contraseña, correo});

    const validarErorres = validationResult(req);
    if( !validarErorres.isEmpty() ){
        return res.status(400).json(validarErorres)
    }
    
    // const validarEmail = await Usuarios.findOne({correo});
    // if (validarEmail){
    //     return res.status(400).json({
    //         msg: 'el correo ya esta registrado'
    //     });
    // };


    validacionEmail(correo);
    
    const validarNombreUsuario = await Usuarios.findOne({nombreUsuario});
    if (validarNombreUsuario){
        return res.status(400).json({
            msg: 'el nombre de usuario ya esta registrado'
        });
    };
    const validarContraseña = await Usuarios.findOne({contraseña});
    if (validarContraseña){
        return res.status(400).json({
            msg: 'el contraseña ya esta registrado'
        });
    };

    await Usuario.save();
    res.json({
        msg: `the user ${nombreUsuario} has been created!`
    });
}

const putUsuarios = async(req, res = response) => {
    const {nombre, nombreUsuario, contraseña, correo} = req.body;
    const _id = req.params['_id'];
    const usuarioActualizado = await Usuarios.findByIdAndUpdate(_id, {nombre, nombreUsuario, contraseña, correo});
    res.json({
        msg: `the user ${nombreUsuario} has been updated!`
    });
};

const deleteUsuarios = async(req, res = response) => {
    const _id = req.params['_id']
    const usuarioEliminado = await Usuarios.findByIdAndDelete(_id)
    res.json({
        msg: 'the account has been eliminated!'
    });
};


module.exports = {
    getUsuarios,
    getUsuario,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}