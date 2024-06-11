

const mongoose = require (`mongoose`)

const dataConection = async () => {

    try { 
        //intenta hacer algo 

        //esta conexión a la base de datos es asimcrona ----> se ejecuta en paralelo 
         await mongoose.connect("mongodb://localhost:27017/BackEnd-users")
        console.log("Database connected")



    } catch (error) {
        //sino captura el error 
        res.status(400).json ({
        mesagge: "No se pudo crear",
        status: 400,
        
        })
    }

}


module.exports= dataConection