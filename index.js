


const app = require ( `./src/app/app`);
const dataConection = require("./src/database/conexion");


app.listen(3000, () => {
    console.log (`Server on port 3000`);
});


dataConection();