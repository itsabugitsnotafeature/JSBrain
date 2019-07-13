'use strict'


/* 
    Given a nested list of integers, 
        return the sum of all integers in the list 
        weighted by their depth;
    
    For example, 
        Given list = [[1,1],2,[1,1]] 
            the function should return 10 
            (four 1's at depth 2, one 2 at depth 1) * 
        
        Given list = [1,[4,[6]]] 
            the function should return 27 
            (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3)

*/



let treeSumByDepth = (arr, depth) => {
    if (arr.length === 0){
        return 0;
    }

    if(depth === undefined){
        depth = 1;
    }
    let sum = 0;

    for(let i=0 ; i<arr.length ; i++) {
        if( isArray(arr[i]) ){
            sum += treeSumByDepth(arr[i], depth+1 );
        } else {
            sum += (arr[i]*depth);
        }
    }
    return sum;
}

function isArray(item) {
    return ( Object.prototype.toString.call(item).toLowerCase().indexOf('array') > -1 ) ?
        true : false;
}

let arr1 = [[1,1],2,[1,1]]; // 10
let arr2 =  [1,[4,[6]]];    // 27
debugger
console.log(treeSumByDepth(arr1));
console.log(treeSumByDepth(arr2));
