//USO DE LIBRERIAS
const express = require ('express')
const router = require ('./router/rutas')
const app = express()

//DECLARACION DE VARIABLES
const url = "localhost"
const port = 3000

//UTILIZANDO RUTAS
app.set('view engine', 'ejs')
app.use(router)

//EJECUTANDO DE SERVIDOR
app.listen(3000, () => 
    console.log ('Servidor corriendo en http://${server}:${port}'))