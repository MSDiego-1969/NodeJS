const http = require("http");
const server=http.createServer((req,res) =>{
    console.log("navegaror conectado");
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    res.write("Conexión exitosa");
    res.end();

})
server.listen(3000,() =>{
    console.log("Servidor en espera de conexión");
})