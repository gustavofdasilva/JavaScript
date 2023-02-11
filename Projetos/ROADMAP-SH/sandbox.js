

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

function pow(x,n) {
    let result = 0;
    for(let i = 0;i<n;i++) {
        result += x*x;
    }
    return result;
}

console.log(pow(3,2));