'use strict'

let findCommonInTwoArrays = (arr1, arr2) => {
    let res = [];

    arr1.forEach(element => {
        if(arr2.indexOf(element) > -1){
            arr2.splice(arr2.indexOf(element), 1);
            res.push(element);
        }
    });
    return res;
}
let arr1 = [10, 4, 0, 15, 7, 5, 4, 13, 7, 17, 17, 12, 17, 1, 8, 3, 2, 7, 10, 19];
let arr2 = [6, 9, 15, 4, 13, 13, 4, 1, 11, 12, 19, 11, 9, 18, 17, 6, 20, 13, 5, 4];
console.log(findCommonInTwoArrays(arr1, arr2) );




let findCommonInTwoArrays_otherWay = (arr1, arr2) => {
    debugger
    arr1.sort((a,b)=> a - b)
    arr2.sort((a,b)=> a - b)
    let res = [];
    let p1 = 0;
    let p2 = 0;

    while( (p1 < arr1.length-1) || (p2 < arr2.length-1) ) {
        if( arr1[p1] === arr2[p2] ) {
            res.push(arr1[p1]);
            p1++;
            p2++;
        } else if( arr1[p1] > arr2[p2] ) {
            p2++;
        } else {
            p1++
        }
    }
    return res;
}
debugger
let arr3 = [10, 4, 0, 15, 7, 5, 4, 13, 7, 17, 17, 12, 17, 1, 8, 3, 2, 7, 10, 19];
let arr4 = [6, 9, 15, 4, 13, 13, 4, 1, 11, 12, 19, 11, 9, 18, 17, 6, 20, 13, 5, 4];
console.log(findCommonInTwoArrays_otherWay(arr3, arr4) );