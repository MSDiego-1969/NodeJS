// modulo experimental de funciones
const math ={};
console.log("Es un modulo llamado");

function add(x1,x2){
    return x1+x2;
}
function substract(x1,x2){
    return x1-x2;
}
function multiply(x1,x2){
    return x1*x2;
}
function divide (x1,x2){
    if (x2===0){
        return "Erro/0"
    }
    else{
        return x1/x2;
    }
}
math.suma=add;
math.resta=substract;
math.multiplic=multiply;
math.division=divide;
module.exports= math
// para que esta función pueda ser llamado desde otro modulo se debe exportar
// exports.suma = add;
// console.log(divide(2,0));



