


const express = require(`express`); 


const router = express.Router(); 



//ruta para crear un usuario ---> .POST

router.post ("/crear-usuario", (req, res) => {
    res.send("Lógica para crear un nuevo usuario"); //función que gestiona la creación de un usuario --- controlador 
}); 


//ruta para login de usuario  ---> POST 

router.post("/login", (req, res) => {
    res.send("Lógica login"); 
}); 

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

