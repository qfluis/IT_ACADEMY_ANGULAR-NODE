const { response, request } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req = request, res = response) => {

    const { email, pass } = req.body;
    const { API_LOGIN_EMAIL, API_LOGIN_PASS } = process.env;
 
    if (email !== API_LOGIN_EMAIL || pass !== API_LOGIN_PASS ) {
        res.status(401).json({
            msg: "email y/o contraseña incorrectos"
        });
        return;
    }

    // Generar JWT
    const token = await generarJWT( email );

    res.status(200).json({
        msg: "login correcto 👍",
        token
    });    
}

const renewToken = async (req,res) => {
    const { email } = req.body;
    const token = await generarJWT( email );

    res.status(200).json({
        msg: "Token renovado 👍",
        token
    });  

}

const authNotFound = (req, res) => {
    res.status(404).json({
        msg: req.path + " - Endpoint no válido"
    });
}

module.exports = { login, authNotFound, renewToken }