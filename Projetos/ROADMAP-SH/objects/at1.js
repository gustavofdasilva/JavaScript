let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(salaries) {
    for(prop in salaries) {
        let sum = salaries.John + salaries.Ann + salaries.Pete;

        return sum;
    }
    return 0;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiply(obj) {
    for(prop in obj) {
        if(typeof(obj[prop]) == "number"){
            obj[prop] *= 2;
        }
    }
}

multiply(menu);
console.log(menu);
