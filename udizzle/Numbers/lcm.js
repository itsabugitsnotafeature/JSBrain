'use strict'

/* 
    Calcuate Lowest Common Multiple of 2 Mumbers 
    Example : 
        3,4 => 12
        12, 80 => 240
*/


/* 
    Lowest Common Multiple
*/
let calculateLowestCommonMultipleOfTwoNumbers = (a, b) => {
    let greatestDivisor = getGreatestCommonDivisor(a, b);
    let product = (a * b);
    let LCM = product / greatestDivisor;
    return LCM;
    // return (a * b) / getGreatestCommonDivisor(a, b);
};


/* 
    greatest common divisor [closed]
        aka
    highest common divisor
        aka
    highest common factor
*/
let getGreatestCommonDivisor = (a, b) => {
    // return !b ? a : getGreatestCommonDivisor(b, a % b);
    if(!b){
        return a;
    } else {
        let thisDiv = getGreatestCommonDivisor( b, (a % b) );
        return thisDiv;
    }
}

console.log( "3, 4 \t => \t" + calculateLowestCommonMultipleOfTwoNumbers(3, 4) );
console.log( "12, 80 \t => \t" + calculateLowestCommonMultipleOfTwoNumbers(12, 80) );


let calculateLowestCommonMultipleOfRangeOfNumbers = (a, b) => {
    let nums = getRange(a, b);
    let num = nums[0];
    nums.forEach((item)=>{
        num = calculateLowestCommonMultipleOfTwoNumbers(num, item);
    });
    return num;
};

let getRange = (a , b) => {
    let ranges = new Array;
    for(let i=a ; i<=b ; i++){
        ranges.push(i);
    }
    return ranges;
}

console.log( "1, 13 \t => \t" + calculateLowestCommonMultipleOfRangeOfNumbers(1, 13) );