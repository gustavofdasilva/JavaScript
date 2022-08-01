var dados = []
var area = document.querySelector("select");
var areaResult = document.getElementById("AreaR");
var counter = 0;


function inList(number, array) {
    if (array.indexOf(Number(number)) != -1) {
        return false
    } else {
        return true
    }
}

function getNumber() {
    
    area = document.querySelector("select");
    var Enum = document.getElementById("num");
    var num = Number(Enum.value);
    if(num>=1 && num<=100 && inList(num,dados)) {
        areaResult.innerHTML="";
        dados.push(num);
        
        area.innerHTML += `
        <option>
        
            Valor ${num} adicionado!
    
        </option>`  
        counter++;  
    } else {
        window.alert("dados inválidos!");
    }
}

function result() {
    if(counter>0) {
        var max = 0
        var min = max
        var soma = 0
        var media = 0

        for(var i in dados) {
            if(max < dados[i]) {
                max = dados[i]
            }
        }

        min = max
        for(var i in dados) {
            if(min>dados[i]) {
                min = dados[i]
            }
        }

        for(var i in dados) {
            soma += dados[i];
            media = soma/dados.length;
        }

        
        areaResult.innerHTML = `
        
        Ao todo, temos ${dados.length} valores cadastrados <br>
        O maior valor foi o ${max} <br>
        O menor valor foi o ${min} <br>
        A soma dos valores foi ${soma} <br>
        A média dos valores foi ${media}
        
        `
    } else {
        window.alert("Insira os valores!");
    }
}

