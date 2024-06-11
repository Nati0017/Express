

const mongoose = require (`mongoose`)

const dataConection = async () => {

    try { 
        //intenta hacer algo 

        //esta conexión a la base de datos es asimcrona ----> se ejecuta en paralelo 
         await mongoose.connect("mongodb://localhost:27017/BackEnd-users")
        console.log("Database connected")



    } catch (error) {
        //sino captura el error 
        console.log(error)
    }

}


module.exports= dataConection