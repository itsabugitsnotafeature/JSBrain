'use strict'

let test = () => {
    let randomArray = [];
    for(let i=0 ; i < 15 ; i++){
        let num = Math.floor( Math.random() * 20 );
        randomArray.push(num);
    }
    return randomArray;
};


/* 
    SELECTION    SORT
    Time Complexity: 
        Ω(n^2)
    Space Complexity: 

*/
let selectionSort = (arr) => {

    for(let i=0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[j] < arr[i] ){
                [ arr[i], arr[j] ] = [ arr[j], arr[i] ] ;
            }
        }
    }
    return arr;
}
// console.log( selectionSort(test()) );



/* 
    INSERTION    SORT
    Time Complexity: 
        Ω(n)
    Space Complexity: 

*/
let insertionSort = (arr) => {
    let result = [];
    for(let i = 0 ; i < arr.length  ; i++) {
        result = insertionThisToArr( result, arr[i] );
    }
    return result;
}
let insertionThisToArr = (arr, num) => {
    if(arr.length === 0){
        arr.push(num);   
    } else {
        let index = 0;
        while( (arr[index] < num) && (index < arr.length) ){
            index++;
        }
        arr = [ ...arr.slice(0, index), num, ...arr.slice( index, arr.length )  ];
    }
    return arr;
}
// console.log( insertionSort(test()) );





/* 
    MERGE    SORT
    Time Complexity: 

    Space Complexity: 

*/
let mergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor( arr.length/2 );

    return merge( mergeSort( arr.slice(0, mid) ), mergeSort( arr.slice(mid, arr.length) ) ) ;
}

let merge = (lar, rar) => {
    let result = [];
    let l=0;
    let r=0;

    while ( l<lar.length && r<rar.length ){
        if( lar[l] < rar[r] ){
            result.push(lar[l++]);
        } else if( lar[l] > rar[r] ){
            result.push(rar[r++]);
        } else {
            result.push(lar[l++]);
            result.push(rar[r++]);
        }
    }

    if( l<lar.length ){
        result = result.concat( lar.slice(l) );
    } else {
        result = result.concat( rar.slice(r) );
    }
    return result;
}
// let tc = test();
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log( tc );
// console.log( mergeSort(tc) );





/* 
    QUICK    SORT
    Time Complexity: 
        (n log(n))
    Space Complexity: 

*/
let quickSort = (arr, left, right) => {
    if (!left){
        left = 0;
        right = arr.length - 1 ;
    }

    if (left < right){
        let pivot = right;
        let partitionIndex = partitionNew(arr, left, right, pivot );
        quickSort( arr, left, partitionIndex-1 );
        quickSort( arr, partitionIndex+1, right );
    }

    return arr;
}

function partition( arr, left, right, pivot ){
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for( let i = left ; i < right ; i++ ){
        if( arr[i] < pivotValue ){
            [ arr[i], arr[partitionIndex] ] = [ arr[partitionIndex], arr[i] ];   
            partitionIndex++;
        }
    }
    [ arr[right], arr[partitionIndex] ] = [ arr[partitionIndex], arr[right] ];   
    return partitionIndex;
}

// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log( tc );
// console.log( quickSort(tc) );




/* 
    BUVVLE  SORT
    Time Complexity: 
        Ω(n)
    Space Complexity: 

*/
let bubbleSort = (arr) => {
    let result = [];

    for(let i = arr.length - 1 ; i > 0  ; i--) {
        for(let j = 0 ; j <= i ; j++){
            if(arr[j+1] < arr[j] ){
                [ arr[j+1], arr[j] ] = [ arr[j], arr[j+1] ] ;
            }
        }
    }
    return arr;
}
// console.log( bubbleSort(test()) );





let quickSort2 = (arr, left, right) => {
    debugger
    if(left===undefined){
        left = 0;
        right = arr.length - 1;
    }

    if( left < right ){
    let pivotIndex = right;
    let partitionIndex = partition2( arr, left, right, pivotIndex );

    quickSort2(arr, left, partitionIndex - 1);
    quickSort2(arr, partitionIndex + 1, right);
    }   
    return arr;
    
}

let partition2 = ( arr, left, right, pivotIndex ) => {

    let pivotValue = arr[pivotIndex];
    let partitionIndex = left;

    for( let i=left ; i < right ; i++ ){
        if( arr[i] <= pivotValue ){
            arr[i] = [ arr[partitionIndex], arr[partitionIndex] = arr[i] ][0] ;
            partitionIndex++
        }
    }
    arr[partitionIndex] = [ arr[pivotIndex], arr[pivotIndex] = arr[partitionIndex] ][0];
    return partitionIndex;
}

// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 11 ];
// console.log( tc );
// console.log( quickSort2(tc) );



let quickSort3 = (arr, left, right) => {
    if (left === undefined){
        left = 0; 
        right = arr.length -1 ;
    }

    if (left < right){
        let pivotIndex = right;
        let partitionIndex = partition3(arr, left, right, pivotIndex);
        quickSort3(arr, left, partitionIndex - 1);
        quickSort3(arr, partitionIndex + 1, right);
    }
    return arr;
}

// Note that you are always passing the 
//      whole array, not a sub part of it
// PartitionIndex also == Index where 
//      the pivot value is located at the 
//      very end of the method
let partition3 = (arr, left, right, pivotIndex) => {
    let pivotValue = arr[pivotIndex];
    // mistake4 : assigining this as left instead of 0
    let partitionIndex = left;

    // mistake1 : < or <=
    for( let i = left ; i < right ; i++){
        // mistake2 : < or <=
        if( arr[i] <= pivotValue ){
            arr[i] = [ arr[partitionIndex], arr[partitionIndex] = arr[i] ][0];
            partitionIndex++;
        }
    }

    // mistake3 : is this step necessary or not
    // mistake6 : replace right with partitionIndex, 
    arr[right] = [ arr[partitionIndex], arr[partitionIndex] = arr[right] ][0];

    // mistake5 : This is not needed
    // partitionIndex++;
    console.log( arr.slice(left, partitionIndex) +" <---> "+ arr.slice(partitionIndex, right));
    return partitionIndex;
}
let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 19, 1, 17, 2, 4, 11 ];
// console.log( tc );
console.log( quickSort3(tc) );

