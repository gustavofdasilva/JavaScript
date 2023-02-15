"use strict";
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    }
}

// to ||

function checkAgeOR(age) {
    return (age || confirm("did parnets"));
}

// to ?
function checkAgeINTER(age) {
    return(age>18 ? true : confirm("did parents"));
}

function min(a,b) {
    return (a<b) ? a : b;
}

let sum = (a,b) => a+b;
console.log(sum(2,3));

let age = 19;

let welcome = (age < 18) ?
    n => console.log(`Sorry... not for you number ${n}`) :
    n => console.log(`Greetings! Number ${n}`);




