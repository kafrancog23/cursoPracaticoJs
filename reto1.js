var op1 = "piedra";
var op2 = "papel;"
var op3 = "tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario gano con" + " " + op1);
        }else if(user === op2 && cpu === op1){
            console.log("el usuario gano con" + " " + op2);
        }else if(user === op3 && cpu === op2){
            console.log("el usuario gano con" + " " + op3);
        }else if (user === cpu){
            console.log("EMPATE!");
        } else{
            console.log("la CPU gano esta partida")
        }
    }

};
resultado(op1,op3)