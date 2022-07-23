var op1 = "piedra";
var op2 = "papel;"
var op3 = "tijera";

function score (user, cpu){
    switch(true){
        case (user === op1 && cpu === op3):
            console.log("el usuario gano con" + " " + op1);
            break;

        case (user === op2 && cpu === op1):
            console.log("el usuario gano con" + " " + op2);
            break;
        case (user === op3 && cpu === op2):
            console.log("el usuario gano con" + " " + op3);
            break;
        case (user === cpu):
            console.log("EMPATE!");
            break;
        default:
            console.log("la CPU gano esta partida");
            break;
    }
}    

score(op1,op3)