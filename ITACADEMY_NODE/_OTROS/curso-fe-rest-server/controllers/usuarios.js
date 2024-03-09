const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');


const usuariosGet = (req, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo: correo});
    if ( existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    }

    // encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD

    await usuario.save();

    res.json({
        msg: 'Usuario registrado correctamente',
        usuario
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}





module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}

