


// controlador para actualizar un usuario

const User = require("../models/user.model");

//                            peticion  /  respuesta
const actualizarUsuario = async (request, response) => {
  // request.body = { name, email }
  // request.params = { id }

  const { name, email } = request.body;
  const { id } = request.params;

  if (id.length !== 24) {
    return response.status(400).json({
      message: "El id suministrado no es válido",
      status: 400,
      error: true,
    });
  }

  if (!name || !email) {
    return response.status(400).json({
      message:
        "El nombre y el email son obligatorios para actualizar el usuario",
      status: 400,
      error: true,
    });
  }

  const cambiosParaActualizar = {
    name: name,
    email: email,
  };

  try {
    // buscar el usuario (registro) en la base de datos
    const usuarioActualizado = await User.findByIdAndUpdate(id, cambiosParaActualizar);

    response.status(200).json({
      message: "Usuario actualizado con éxito",
      status: 200,
      error: false,
      data: {
        id: usuarioActualizado._id,
        name: usuarioActualizado.name,
        email: usuarioActualizado.email,
      }
    });
  } catch (error) {
    response.status(500).json({
      message: "Error en el servidor al intentar actualizar el usuario",
      status: 500,
      error: true,
    });
    console.log(error);
  }
};

module.exports = actualizarUsuario;