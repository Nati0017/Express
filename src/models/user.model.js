

//mongoose como dependencia 

const mongoose = require (`mongoose`)


//crear esquema 

const userSchema = mongoose.Schema({

    name: String,
    lastName: String, 
    email: String,
    password: String, 
    active: Boolean
})


//crear modelo

const User = mongoose.model("User", userSchema) //Modelo **User** hace match con collection users en base de datos 


module.exports = User