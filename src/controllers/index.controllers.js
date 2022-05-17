// Funcionalidad o funciócdn cuando un cliente se conecta a la ruta del servidos

// creamos un objeto vacio para meterle datos, funciones, valores, etc
const controller= {};
// se exporta desde el modulo connection.js
const connection = require("../dbConnection/connection")
//Se exporta desde modelo libreria.js
const LibreriaModelo = require ("../models/libreria.js")
controller.index = async(req,res)=> {
    // Un async va siempre con await y dentro de un try catch
    try{
    const title = "Index desde el servidor con Pug"
    // ejecutamos la función connection a travez de await
    await connection();
    const articuloslibreria= await LibreriaModelo.find()
    console.log(articuloslibreria);
    // res.send("Conexión exitosa"); ESTO SERVIA PARA ENVIAR UN MENSAJE A LA WEB
    // en la app.js le decimos donde debe buscar este index y pug lo interpreta 
    res.render("index",{title:title}); //puede ser tambien title solo porque el nombre es igual a la etiqueta. Ahora colocamos la variable en pug
    console.log("Conectados");
    } catch(err){console.log(err)}
}
module.exports=controller;

// mongodb+srv://msdiego:<password>@cluster0.30bda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority