'use strict'

/* 
    GREATEST COMMON DIVISOR
    Question: How would you find the greatest common divisor of two numbers?

*/
let greatestCommonDivisor = (a, b) => {
    let i = (a > b ? a : b);
    while (i > 0) {
        if ((a % i === 0) && (b % i === 0)) {
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
    [...str].forEach((char) => {
        if (charMap.has(char)) {
            charMap.set(char, false);
        } else {
            charMap.set(char, true);
        }
    })
    charMap.forEach((value, key) => {
        if (value && firstUniqueChar === null) {
            firstUniqueChar = key;
        }
    })
    return firstUniqueChar;
}
// console.log( firstNonRepeatChar('the quick brown fox jumps then quickly blow air'))


let removeDuplicateChar = (str) => {
    let charSet = new Set();
    let uniqueStr = [];
    [...str].forEach((char) => {
        if (!charSet.has(char)) {
            charSet.add(char);
            uniqueStr.push(char)
        }
    })
    return uniqueStr.join('');
}
// console.log( removeDuplicateChar('Learn more javascript dude'));


//FIND  MISSING NUMBER IN AN ARRAY
let missingNumber = (numArray) => {
    let low = numArray[0];
    let high = numArray[0];
    let num = null;
    let values = new Set();

    numArray.forEach((val) => {
        if (low > val) {
            low = val;
        }
        if (high < val) {
            high = val;
        }
        values.add(val);
    });

    for (let i = low; i <= high; i++) {
        if (!values.has(i)) {
            return i;
        }
    }
}
// Only works if array is sorted
function missingNumberBetterAlgo(arr) {
    var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;
    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }
    return expectedSum - sum;
}
// console.log( missingNumber([5, 2, 6, 1, 3]));


/* 
    Sum of two
    Question: From a unsorted array, 
    check whether there are any two numbers that will sum up to a given number?
*/
let sumFinder = (arr, num) => {
    for (let i in arr) {
        if (arr.indexOf(num - i) > -1) {
            return true;
        }
    }
    return false;
};
console.log(sumFinder([6, 4, 3, 2, 1, 7], 9));


/* 
    COUNTING ZEROS
    Question: Count Total number of zeros from 1 upto n?
    Answer: 
        If n = 50. number of 0 would be 11 
            (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100). 
        Please note that 100 has two 0. This one looks simple but little tricky

    Explanation: So the tick here is. 
        if you have a number 1 to 50 the value is 5. 
            just 50 divided by 10. 
        However, if the value is 100. 
            the value is 11. 
            you will get by 100/10 = 10 
            and 10/10. 
        Thats how you will get in the more zeros in one number like 
            (100, 200, 1000)
*/
let countZero = (n) => {
    let count = 0;
    while (n > 0) {
        count += Math.floor(n / 10);
        n = n / 10;
    }
    return count;
}
console.log(countZero(2014));

let mySqrt = (num, guess) => {
    if(!num || num===0){
        return 0;
    }
    if(!guess){
        guess = num / 2.0;
    }
    let div = num / guess;
    let newGuess = (div + guess)/2.0;
    if(guess === newGuess){
        return newGuess;
    } else {
        return mySqrt(num, newGuess);
    }
}

console.log("Squsre Root of 3 is:" + mySqrt(3));
// console.log("Squsre Root of 49 is:" + mySqrt(49));
// console.log("Squsre Root of 169 is:" + mySqrt(169));