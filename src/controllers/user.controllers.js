


//controlador para crear ususario 

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




const usuarioCreado = await User.create({
    name: name,
    lastName: lastName, 
    email: email,
    password:password, 
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



//controlador para login

const login = (req, res) => {
    res.send("Lógica login"); 
};

//controlador para actualizar ususario 




//controlador para eliminar ususario 



//controlador para lista de ususario 



module.exports = { crearUsuario , login }