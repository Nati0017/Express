

const User = require("../models/user.model");

// controlador para obtener lista de usuarios


const getAllUsers = async (req, res) => {

    const listaUsuarios = await User.find({})

    res.status(200).json({
        message: "Lista de usuarios",
        status: 200,
        error: false,
        data: listaUsuarios
    })
}

module.exports = getAllUsers;