

//definimos la estructura básica express

const express = require(`express`); 
const morgan = require(`morgan`); 
const router = require("../router/users.routes")



const app = express();


//definimos los middlewares propios que utiliza express 

app.use(morgan(`dev`)); //ver las peticiones que se hacen al servidor, dede dependencia morgan

app.use(express.json()); //para que express entienda los datos en formato json 

app.use(express.urlencoded({extended: false})); //para que express entienda los datos que vienen en formato undencoded 


//definimos rutas de la aplicación 
app.use("/api/users", router); 

module.exports = app; 