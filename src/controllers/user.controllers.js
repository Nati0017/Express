


//controlador para crear ususario 
 
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const crearUsuario =  async (req,res) => {

    // va a realizar una consulta a la base de datos para crear un usuario ---> asincrona 

const {name, lastName, email, password } = req.body; 

if (!name && !lastName && !email && !password) {
    return res.status(400).json({
        mesagge: "Todos los campos son obligatorios",
        status: 400,
        error: true
    })
}




try {

const usuarioExistente = await User.findOne({email: email})

if (usuarioExistente) {
    return res.status(400).json ({
        mesagge: "El email ya existe",
        status: 400,
        error: true
    })
}


// contraseña y ña vamos a encriptar 
const salt = bcrypt.genSaltSync()   // salt es el poder de encriptación de la contraseña 
const passwordEncriptada = bcrypt.hashSync(password, salt) // recibe los parámetros recibidos por el usuario (password) y el poder de encriptado (salt)



const usuarioCreado = await User.create({
    name: name,
    lastName: lastName, 
    email: email,
    password:passwordEncriptada, 
    active: true
})

res.status (201).json ({
    mesagge: "Usuario creado con éxito",
    status: 201,
    error: false,
    data: {
        id: usuarioCreado._id,
        name: usuarioCreado.name,
        email: usuarioCreado.email
    }
})
    } catch (error) {
        res.status(500).json({
            mesagge: "Error en el servidor l intentar crear usuario",
            status: 500, 
            error: true
        })
        console.log(error)
    }

};


//controlador para actualizar ususario 




//controlador para eliminar ususario 



//controlador para lista de ususario 



module.exports = { crearUsuario }