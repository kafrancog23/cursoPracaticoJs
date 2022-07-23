var edad = 18;

if(edad === 18){
    console.log("Puedes votar, sera tu primera votación");
}else if(edad  > 18){
    console.log("Puedes votar, de nuevo.");
}else{
    console.log("Aun no puedes votar");
}
//operador ternario que genera el if y el else en una sola linea
condition ? true : false;//sintaxis

var num = 1;
var resultado = num === 1 ? "soy un 1" : "No soy un 1";

if(false === !true){
    console.log(false == true);
}else{
    console.log(true === !false);
}