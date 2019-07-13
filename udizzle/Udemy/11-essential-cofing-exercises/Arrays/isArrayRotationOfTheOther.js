'use strict' 

let is_rotation = (arr1, arr2) => {
    for( let i=0 ; i < arr1.length ; i++){
        arr1.push(arr1.shift());
        if (JSON.stringify(arr2) === JSON.stringify(arr1)) {
            return true;
        }
    }
    return false;
};

let is_rotation_vanilla = (arr1, arr2) => {
    if(arr1.length !== arr2.length ){
        return false;
    }

    let secondStartIndex = 0;
    secondStartIndex = arr2.indexOf(arr1[0]);
    if (secondStartIndex === -1){
        return false;
    } 

    for( let i=0 ; i < arr1.length ; i++){    
        if  (secondStartIndex === arr2.length){
            secondStartIndex = 0;
        }

        if  (arr1[i] !== arr2[secondStartIndex]){
            return false;
        }
        secondStartIndex++;   
    }
    return true;
};

let test2 = [1, 6, 4, 5, 1, 2, 3, 4, 1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2];
let test1 = [1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2, 1, 6, 4, 5, 1, 2, 3, 4];

let test3 = [1, 6, 4, 5, 1, 2, 3, 4, 1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 9, 2];
let test4 = [1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2, 1, 6, 4, 5, 1, 2, 3, 4];

console.log( is_rotation(test1, test2) );
console.log( is_rotation_vanilla(test1, test2) );

console.log( is_rotation(test3, test4) );
console.log( is_rotation_vanilla(test4, test3) );