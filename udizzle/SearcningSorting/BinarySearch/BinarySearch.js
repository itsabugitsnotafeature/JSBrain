'use strict'

let binarySearch = (arr, num, low, hi, count) => {
    if(low === undefined){
        low = 0;
    }
    if(hi === undefined){
        hi = arr.length-1;
    }
    
    count = count ? count : 0;

    if(count === 100){
        return null;
    }

    if(hi<low){
        return false;
    }

    let mid = Math.floor((low + hi)/2);

    if(arr[mid] === num){
        return true;
    } else if (arr[mid] > num) {
        return binarySearch(arr, num, low, mid-1, ++count);
    } else {
        return binarySearch(arr, num, mid+1, hi, ++count);
    }

}
debugger
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log( binarySearch(arr, 2) );
console.log( binarySearch(arr, 12) );
console.log( binarySearch(arr, 13) );
console.log( binarySearch(arr, 55) );
console.log( binarySearch(arr, -9) );