'use strict'
/* 
    A 2-dimensional array is an array of arrays.

    Implement a function that takes a square 2D array 
        (# columns = # rows) and rotates it by 90 degrees.

    Example:
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

    ->

    [[7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]]

 */
let rotate2DArray_inPlace = (arr) => {
    let squareArrayLength = arr[0].length;
    
    for(let j=0 ; j<squareArrayLength ; j++){
        let crossSection = [];
        for(let i=0 ; i<squareArrayLength ; i++){
            crossSection.push( arr[i][j] );
        }
        arr.push(crossSection.reverse());
    }

    for(let j=0 ; j<squareArrayLength ; j++){
        arr.shift();
    }
}
let arr1 = [ 
    [1,2,3], 
    [4,5,6], 
    [7,8,9] 
];
rotate2DArray_inPlace(arr1)
console.log(arr1);


let rotate2DArray_inPlace_betterAlgo = (arr) => {
    let squareArrayLength = arr.length;
    for( let i=0 ; i <= Math.ceil(squareArrayLength/2) - 1 ; i++ ){
        for( let j=0 ; j <= Math.floor(squareArrayLength/2) - 1 ; j++ ){

            let temp = new Array(4);
            let [current_i, current_j] = [i, j];
            
            for( let k=0 ; k < 4 ; k++ ){
                temp[k] = arr[current_i][current_j];
                [current_i, current_j] = rotate_sub(current_i, current_j, squareArrayLength);
            }

            for( let k=0 ; k < 4 ; k++ ){
                arr[current_i][current_j] = temp[ (k+3) % 4 ];
                [current_i, current_j] = rotate_sub(current_i, current_j, squareArrayLength);
            }
        }
    }
    return arr;
}

function rotate_sub(row, col, length){
    return [col, length-1-row];
}
arr1 = [ 
    [1,2,3], 
    [4,5,6], 
    [7,8,9] 
];
debugger
rotate2DArray_inPlace_betterAlgo(arr1);
console.log(arr1);


let rotate2DArray_withNewArray = (arr) => {
    let result = [];
    let squareArrayLength = arr[0].length;
    
    for(let j=0 ; j<squareArrayLength ; j++){
        let crossSection = [];
        for(let i=0 ; i<arr.length ; i++){
            crossSection.push( arr[i].shift() );
        }
        result.push(crossSection.reverse());
    }
    return result;
}

let rotate2DArray_withNewArray_betterAlgo = (arr) => {
    let squareArrayLength = arr.length;
    
    let result = new Array();
    for(let rowIndex=0 ; rowIndex < squareArrayLength ; rowIndex++){
        result.push(new Array(squareArrayLength));
    }
    
    for(let rowIndex=0 ; rowIndex < squareArrayLength ; rowIndex++){
        for(let colIndex=0 ; colIndex < squareArrayLength ; colIndex++){
            // let val = arr[rowIndex][colIndex];
            // let newRowIndex = colIndex;
            // let newColIndex = squareArrayLength - 1 - rowIndex;
            // result[newRowIndex][newColIndex] = val;

            result[colIndex][squareArrayLength - 1 - rowIndex] = arr[rowIndex][colIndex];;
        }
    }
    return result;
}


arr1 = [ 
    [1,2,3], 
    [4,5,6], 
    [7,8,9] 
];
console.log( rotate2DArray_withNewArray(arr1) );
arr1 = [ 
    [1,2,3], 
    [4,5,6], 
    [7,8,9] 
];
console.log( rotate2DArray_withNewArray_betterAlgo(arr1) );
