


// controlador para hacer login de un usuario

const bcrypt = require("bcrypt");

const User = require("../models/user.model");

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "El email y la contraseña son obligatorios",
            status: 400,
            error: true
        })
    }

    // buscamos un registro en la base de datos que coincida con el email suministrado
    const usuarioExistente = await User.findOne({ email: email })

    if (!usuarioExistente) {
        return res.status(400).json({
            message: "Usuario con ese email no está registrado en nuestro sistema",
            status: 400,
            error: true,
        })
    }
    const passwordVerificada = bcrypt.compareSync(password, usuarioExistente.password) // genera true o false según la coincidencia de la contraseña 

    if (passwordVerificada == false) {
        return res.status(400).json({
            message: "Contraseña incorrecta",
            status: 400,
            error: true
        })
    }

    res.status(200).json({
        message: "Usuario logueado con éxito",
        status: 200,
        error: false,
        data: {
            id: usuarioExistente._id,
            name: usuarioExistente.name,
            email: usuarioExistente.email
        }
    })
};



module.exports = login