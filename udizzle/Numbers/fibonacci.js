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

let generateFibonacciTillOrder = (order, arr) => {
    if(!arr){
        arr = new Array();
        arr.push(0);
        arr.push(1);
        arr.push(1);
    }
    if(arr.length === order){
        return arr;
    } else {
        arr.push(arr[arr.length-1] + arr[arr.length-2] );
        return generateFibonacciTillOrder(order, arr)
    }
}

function getFibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return (getFibonacciRecursive(n - 1) + getFibonacciRecursive(n - 2));
    }
}


