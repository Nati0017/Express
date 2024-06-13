


// controlador para eliminar un usuario

const User = require("../models/user.model");

const borrarUsuario = async (req, res) => {

    const { id } = req.params;

try {
    await User.deleteOne({_id: id })
    res.status(200).json({
    message: "Usuario eliminado con éxito",
    status: 200,
    error: false,
  })

} catch( error) {
    res.status(500).json({

        message: "Error en el servidor al intentar eliminar el usuario",
        status: 500,
        error: true
})
}

}
module.exports = borrarUsuario;