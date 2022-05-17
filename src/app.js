// App aplicación principal
// Usando EXPRESS (Ifraestrucuta web rapida)
const express = require("express");
const { dirname } = require("path");
const app = express();

// Normaliza las rutas de windows, mac y linux
const path = require("path");
// Motor de plantillas "pug" y ubicación de la carpeta donde debe buscar el index.pug
app.set("view engine","pug");
app.set("views",path.join(__dirname, "vistas"))

// const routes = require("./src/routers/index.routers")
// app.use(routes); igual pero mas comprimido escrito debajo
app.use( require("./routers/index.routers"))
app.use(express.static(path.join(__dirname,"../public")))
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"../public/404.html"));
})
console.log(__dirname)

app.listen(3000, ()=>{
    console.log("servidor en esprea");
})
