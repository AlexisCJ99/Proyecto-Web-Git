//AGREGAMOS  LIBRERIAS 
const express = require("express");
const router = require('./router/router');


//CREAMOS UNA INSTANCIA DE LA APLICAION
const app = express();

//MIDDLEWARE
// app.use(express.json());
app.set('view engine', 'ejs')

//UTILIZANDO RUTAS
app.use(router);

//CONFIGURACION DEL PUERTO DE ENTRADA
app.set('port', 9000)

//Ejecucion del servidor web
app.listen(app.get('port'),() => {
    console.log("Servidor corriendo en http://localhost:" + app.get('port'));
})