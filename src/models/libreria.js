//modulo Modelo de datos 
const mongoose= require("mongoose");
// const Schema = mongoose.Schema; esto es igual que a lo de abajo
const{Schema}= mongoose;
//es de buena costumbre escribir el modelo y esquema en camelcase(primeras masyusculas) y Schema es una funcion que nos devuelve la estructura de nuestra base de datos
const LibreriaSchema = new Schema({
    name: String
})
const LibreriaModel = mongoose.model("librery",LibreriaSchema);
// De aquí exportamos a indexcontroler para que haga la petición de los datos
module.exports=LibreriaModel


