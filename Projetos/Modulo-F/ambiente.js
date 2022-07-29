/*var num = [5 , 3 , 4 , 3 , 6 , 6 , 3 , 2 , 9 , 6 , 6 , 4 , 5 , 1]
num[5] = 9
num.push(7) //Coloca ao final do array

/*
for (var n = 0 ; n <= num.length ; n++) {
    console.log(num[n]);
}
*/
/*
for (var n in num) {
    console.log(num[n]);
}

console.log(num.indexOf(6));
console.log(num.indexOf(14));
*/

//* RECURSIVIDADE  
function fatorial(n) {
    if(n==1) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5))