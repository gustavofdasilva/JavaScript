var area = document.querySelector("select");
var num = document.getElementById("num");
var EachRes

function calcular() {
    area.innerHTML = "";
    
    if(num.value == ""){
        alert("Impossível calcular!");
    } else {
        for(var i = 1; i <= 10 ; i++) {
            EachRes = Number(num.value*i);
            area.innerHTML += 
            `
            <option>
            ${num.value} x ${i} = ${EachRes}
            </option>
            `
        }
    }
}