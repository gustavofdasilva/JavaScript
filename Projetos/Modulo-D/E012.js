//*Condição Aninhada
var horaAtual = new Date();
var hora = horaAtual.getHours();
console.log(`Agora são ${hora}:00`);
if(hora>=00 && hora<=12) {
    console.log("Bom dia!");
    //bomdia
} else if (hora>12 && hora <=18) {
    console.log("Boa tarde!");
    //boatarde
} else {
    console.log("Boa noite!");
}

//?

//*Condição múltiplas
var hoje = new Date();
var dia = hoje.getDay();
var diaAtual;

switch(dia) {
    case 0:
        diaAtual = "Domingo";
        break

    case 1:
        diaAtual = "Segunda";
        break
    
    case 2:
        diaAtual = "Terça";
        break
        
    case 3:
        diaAtual = "Quarta";
        break

    case 4:
        diaAtual = "Quinta";
        break
    
    case 5:
        diaAtual = "Sexta";
        break

    case 6:
        diaAtual = "Sábado";
        break
    
    default:
        diaAtual = "null";
        break
}

console.log(`Hoje é ${String(diaAtual)}`)