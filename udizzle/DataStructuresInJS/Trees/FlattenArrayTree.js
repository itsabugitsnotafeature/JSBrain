'use strict'


/* 
    Flatten a Tree / Array of Array List

    [ [1,2,3],[ 4,5,[6] ], [[7,8],[9,10,[11,12,13]]] ];
    [[1,1],2,[1,1]];
    [[4,[11,12],5,6],2,1,3,[7,8,[10,9]]];
    [1,[4,[6]]];
    
*/


let flattenArrayTree = (arr) => {
    if(arr.length === 0){
        return;
    }
    let result = [];
    for(let i=0 ; i<arr.length ; i++){
        if(isArray(arr[i])) {
            let deflated = flattenArrayTree(arr[i]);
            deflated.forEach(element => {
                result.push(element);
            });
        } else {
            result.push(arr[i]);
        }
    }
    return result
}

function isArray(item) {
    return (Object.prototype.toString.call(item).toLowerCase().indexOf('array') > -1) ?
        true : false;
}



var arr1 = [ [1,2,3],[ 4,5,[6] ], [[7,8],[9,10,[11,12,13]]] ];
let arr2 = [[1,1],2,[1,1]];
var arr3 = [[4,[11,12],5,6],2,1,3,[7,8,[10,9]]];
let arr4 =  [1,[4,[6]]];
console.log(flattenArrayTree(arr1));
console.log(flattenArrayTree(arr2));
console.log(flattenArrayTree(arr3));
console.log(flattenArrayTree(arr4));