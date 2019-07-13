'use strict'

/* 
    5.1 Given an integer, determine if it is a power of 2. 
    If so, return that number, else return -1. (0 is not a power of two)

        isPowerOfTwo(4); // true
        isPowerOfTwo(64); // true
        isPowerOfTwo(1); // true
        isPowerOfTwo(0); // false
        isPowerOfTwo(-1); // false
*/

var isPowerOfTwo = (num) => {
    debugger
    if (num < 1) {
        return false;
    } else if (num === 1) {
        return true;
    }
    else {
        return isPowerOfTwo(num / 2) ? true : false;
    }
}

console.log(isPowerOfTwo(1000));

// For the non-zero case:
function isPowerOfTwo_Bitwise(number) {
    // `&` uses the bitwise n.
    // In the case of number = 4; the expression would be identical to:
    // `return (4 & 3 === 0)`
    // In bitwise, 4 is 100, and 3 is 011. Using &, if two values at the same
    // spot is 1, then result is 1, else 0. In this case, it would return 000,
    // and thus, 4 satisfies are expression.
    // In turn, if the expression is `return (5 & 4 === 0)`, it would be false
    // since it returns 101 & 100 = 100 (NOT === 0)

    return number & (number - 1) === 0;
}

// For zero-case:
function isPowerOfTwoZeroCase(number) {
    return (number !== 0) && ((number & (number - 1)) === 0);
}
// console.log(isPowerOfTwo(66));
// console.log(isPowerOfTwo(4));


let convertToBinary = (num) => {
    if (num <= 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }
    else {
        let bin = '';
        while(num>1){
            
            if(num%2===0){
                bin += '0';
            } else {
                bin += '1';
            }
            num = num/2;
        }
        return (bin + num.toString()).split('').reverse().join('');
    }
}

console.log(convertToBinary(8));
console.log(convertToBinary(1024));