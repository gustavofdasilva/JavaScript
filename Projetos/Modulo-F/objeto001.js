let amigo = {nome:"josé",peso:87,idade:"36",engordar(p=0){
    console.log("Engordou!");
    this.peso+=Number(p);
}}

amigo.engordar(20);
console.log(amigo.peso);