

/* 
    Source 
        http://www.crazyforcode.com/eulers-totient-function/
    Euler’s Totient Function
    Number N , is Eulers Totient to number K,
        if 
            1. K < N
            2. K and N have no common divisors

*/

'use strict'


let getEulesTotient = (num) => {
    let count = 1;
    let uniques = [];
    for (let i = 2; i < num; i++) {
        process.stdout.clearLine();  // clear current text
        process.stdout.cursorTo(0);
        process.stdout.write("Checking Number " + i + " works or not");
        
        if (!hasCommonDovosot(num, i)) {
            uniques.push(i);
            count++;
        }
    }
    // return count;
    return uniques
}

let hasCommonDovosot = (num, guess) => {
    for (let i = 2; i < num; i++) {
        if ((num % i === 0) && (guess % i === 0)) {
            return true;
        }
    }
    return false;
}
// getEulesTotient(100);   // 40
console.log(getEulesTotient(100));


let sharamAnswer = (num) => {
    let result = num;

    for (let i = 2 ; i*i <= num ; ++i) {
        process.stdout.clearLine();  // clear current text
        process.stdout.cursorTo(0);
        process.stdout.write("Checking Number " + i + " works or not");

        if (num % i == 0) {
            while (num % i == 0){
                num /= i;
            }
            result -= result / i;
        }
    }

    if (num > 1){
        result -= result / num;
    }
    return result;
}
// sharamAnswer(100);   // 40

// const LARGEST_NUMBER = 9007199254740992;
const LARGEST_NUMBER = 19997;

// let startTime = Date.now();
// console.log("\nANSWER => " + getEulesTotient(LARGEST_NUMBER));
// console.log("\nRUNTIME = " + (Date.now() - startTime));


// console.log("\n\n COPIED ANSWER \n\n");
// startTime = Date.now();
// console.log("\nANSWER => " + sharamAnswer(LARGEST_NUMBER));
// console.log("\nRUNTIME = " + (Date.now() - startTime));




function copiedSharam (num) {
    let result = num;
    for(let i=2 ; i*i < num ; i++ ){
        if( num%i === 0 ){
            while (num%i === 0) {
                num = num/i;
            }
            result = result - result / i;
        }
    }
    if (num > 1){
        result -= result / num;
    }
    return result;
}

console.log("\n\n COPIED ANSWER \n\n");
let startTime = Date.now();
console.log("\nANSWER => " + copiedSharam(LARGEST_NUMBER));
console.log("\nANSWER => " + sharamAnswer(LARGEST_NUMBER));
console.log("\nRUNTIME = " + (Date.now() - startTime));


