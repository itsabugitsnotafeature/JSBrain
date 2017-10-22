'use strict'


let mergeKSortedList = (lists) => {
    let maxLength = 0;
    let numSlices = [];
    let result = [];

    lists.forEach(function(list) {
        if(list.length){
            maxLength = (maxLength > list.length) ? (maxLength) : (list.length);     
        }
    }, this);
    if(!maxLength){
        console.log("Wow dude, empty list")
        return lists;
    }

    for(let j=0 ; j<maxLength ; j++ ){
        let eachSlice = [];
        for(let i=0 ; i<lists.length ; i++){
            eachSlice.push(lists[i].shift());
        }
        numSlices.push(eachSlice)
    }
    
    for(let j=0 ; j<numSlices.length ; j++ ){
        while(numSlices[j].length !== 0){
            let entry = numSlices[j].pop();
            if(!isNaN(entry)){
                result = insertSortedElement(result, entry);
            }
        }
    }
    return result;
};

let insertSortedElement = (arr, num) => {
    let index = 0;
    while( arr[index] < num ){
        index++;
    }
    arr = [ ...(arr.slice(0,index)) , num , ...(arr.slice(index, arr.length))  ];
    return arr;
}


let arr1 = [
    [6,7,8,9,10],
    [1,2,3,4,5],
    [11,12,13,14,15]
];
let arr2 = [
    [5],
    [10],
    [-2,-1,0],
    [0],
    [7]
];

let arr3 = [
    []
];

console.log( JSON.stringify(mergeKSortedList(arr1), null, 2) );
// console.log( JSON.stringify(mergeKSortedList(arr2), null, 2) );
// console.log( JSON.stringify(mergeKSortedList(arr3), null, 2) );