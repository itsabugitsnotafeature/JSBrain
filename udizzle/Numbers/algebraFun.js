'use strict'

/* 
    GREATEST COMMON DIVISOR
    Question: How would you find the greatest common divisor of two numbers?

*/
let greatestCommonDivisor = (a,b) => {
    let i = (a > b ? a : b);
    while ( i > 0) {
        if( (a % i=== 0) && (b % i=== 0) ){
            return i;
        }
        i--;
    }
    return null;
}
// console.log( greatestCommonDivisor(14, 21) );
// console.log( greatestCommonDivisor(69, 169) );


/* 
    First non repeating char
*/

let firstNonRepeatChar = (str) => {
    let firstUniqueChar = null;

    let charMap = new Map;
    [...str].forEach((char)=> {
        if(charMap.has(char)){
            charMap.set(char, false);
        } else {
            charMap.set(char, true);
        }
    })
    charMap.forEach((value, key)=> {
        if(value && firstUniqueChar === null){
            firstUniqueChar = key;
        }
    })
    return firstUniqueChar;
}
console.log( firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))
