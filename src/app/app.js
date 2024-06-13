

//definimos la estructura básica express

const express = require(`express`); 

const morgan = require(`morgan`); 

const cors = require(`cors`)

const router = require("../routes/users.routes")



const app = express();


//definimos los middlewares propios que utiliza express 

app.use(morgan(`dev`)); //ver las peticiones que se hacen al servidor, dede dependencia morgan

app.use(express.json()); //para que express entienda los datos en formato json 

app.use(express.urlencoded({extended: false})); //para que express entienda los datos que vienen en formato undencoded 

app.use(cors ()); //para que el servidor pueda recibir peticiones de otros servidores 

//definimos rutas de la aplicación 
app.use("/api/users", router); 

module.exports = app; 