// crear una constante con el archivo js requerido y utilizarlo como un objeto de clase
// TODO ESTE CODIGO DE EJEMPLOS SE VE EN CONSOLA CMD e incluir la ruta
const matem = require("./uno.js");
console.log(matem.suma(2,3));

// De la página de node.js se extraen los nombres y utilidades de cada modulo instalado con node
//  https://nodejs.org/en/docs/
const os = require("os");
const fs = require("fs");
// ********************************************
console.log(os.platform());
console.log(os.release());
// ********************************************
fs.writeFile("./texto.txt", "prier línea", 
function(err){
    if(err){console.log(err)}
    console.log("Archivo creado");
});
fs.readFile("./texto.txt", function(err,data){
    if(err){console.log(err);}
    else{console.log(data.toString());} // toString es para convertir los datos a cadena
})

// ********************************************
const HTTP = require("http");
// HTTP.createServer(function(req,res){
//     res.write("<h1> Hola servidor</h1>");
//     res.end();
// }).listen(3000);// este puerto es local y se escucha con "localhost:3000" en el navegador
// Para ver cambios de codigo en el servidor se debe reiniciar el servidor 

function handleRequest(req, res) {
    res.writeHead(200);
    res.write("<h1> Hola servidor</h1>");    
    res.end("Fin de respuestas\n");
  }
  
  const servidor= HTTP.createServer(handleRequest);
  servidor.listen(8000,function(){console.log("<h2>¡Eeeestoyy viiiivooooo!</h2>");});

console.log("ultima línea de mi codigo");