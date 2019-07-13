'use strict'

let randomArray = (length, max) => [...new Array(length)]
.map(() => Math.round(Math.random() * max));




let find_3_WithGivenProduct = (arr, targetProduct) => {
    let numMap = new Map();

    arr.forEach((element,index) => {
        // ????
    });

}
let test = [1, 6, 4, 5, 1, 2, 3, 4, 1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2];
console.log(find_3_WithGivenProduct(arr, 12));



/* 
    Q : Find 2 nums from given array that multiplies to get given product
        Sort 
        have low and high index
        if mul arr[hi*lo] > target
            hi--
        if mul arr[hi*lo] < target
            lo++
        if mul arr[hi*lo] === target
            return pair


*/
let find_2_WithGivenProduct = (arr, targetProduct) => {
    debugger
    arr.sort();
    let lo = 0;
    let hi = arr.length-1;

    while(lo < hi) {
        if( (arr[hi] * arr[lo]) > targetProduct ){
            hi--;
        } else if( (arr[hi] * arr[lo]) < targetProduct ){
            lo++; 
        } else if( (arr[hi] * arr[lo]) === targetProduct ){
            return [ arr[lo], arr[hi] ];
        }
    }
    return null;
}
let arr = randomArray(30, 15);
console.log(find_2_WithGivenProduct(arr, 20));
   
// let startTime = Date.now();
// let arr = randomArray(9999, 1000);
// console.log(find_2_WithGivenProduct(arr, 20));
// console.log("Total Runtime: " + (Date.now() - startTime));