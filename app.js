// App aplicación principal
// Usando EXPRESS (Ifraestrucuta web rapida)
const express = require("express");
const { dirname } = require("path");
const app = express();
// Normaliza las rutas de windows, mac y linux
const path = require("path");
// const routes = require("./src/routers/index.routers")
// app.use(routes); igual pero mas comprimido escrito debajo
app.use( require("./src/routers/index.routers"))

// STATIC FILES
app.use(express.static("./src/public/"))
app.use((req,res)=>{
    res.sendFile("./Mi trabajo/HTML CSS JS/Node-JS/src/public/index.html")
})
console.log(__dirname)

app.listen(3000, ()=>{
    console.log("servidor en esprea");
})
