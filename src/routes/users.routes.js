


const express = require(`express`); 
const { crearUsuario } = require("../controllers/user.controllers");
const login = require("../controllers/user.login.controller");


const router = express.Router(); 



//ruta para crear un usuario ---> .POST

router.post ("/crear-usuario", crearUsuario)


//ruta para login de usuario  ---> POST 

router.post("/login", login) 

//ruta actualizar usuario ---> PUT 

router.put("/actualizar-usuario/:id", (req, res) => {
    res.send("Lógica actualización");
}); 

//ruta eliminar ---> DELETE 

router.delete("/eliminar-usuario/:id", (req, res) => {
    res.send ("Lógica eliminar");
}); 


// ruta obtener lista usuarios ---> GET 

router.get("/lista-usuarios/:id", (req,res) => {
    res.send("Lógica obtener lista");
}); 


module.exports = router; //exportamos el router para usarlo en otros archivos 

