'use strict'


function getFibonacci(maxVal) {
    let currentVal = 0;
    let last = 0;
    let secLast = 1;
    let fibarray = [];
    while (currentVal < maxVal) {
        fibarray.push(currentVal);
        currentVal = last + secLast;
        last = secLast;
        secLast = currentVal;
    }
    return fibarray
}

console.log(getFibonacci(1000));
console.log(getFibonacciRecursive(12));
console.log(fibonacci(12));

function getFibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return (getFibonacciRecursive(n - 1) + getFibonacciRecursive(n - 2));
    }
}


