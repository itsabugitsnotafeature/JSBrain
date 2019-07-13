/* 
    Merge Sort
        It's a divide and conquer type algorithm.
        Just break down your array into small and small pieces 
            and until you have one items in each pieces. 
        Then merge together by comparing them. 

    Algo: 
        Code Merge Sort: 
            Merge sort has two parts. 
            Main part does divide (or breaks down).
            And second part is merging/combining parts. 
            At the time of combining, 
                parts are COMPARED together.

        DIVIDE: 
            The first function named as mergeSort 
                is actually a divide function. where an array is divided into two.

        MERGE: 
            This is just merging two sorted array. 
            Just be careful this two array COULD BE IN DIFFERENT SIZE.
 */


function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }

    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}


function dizzleMergeSort(arrayToSort){
    if(arrayToSort.length < 2) {
        return arrayToSort;
    }
    let mid = Math.floor(arrayToSort.length/2);
    return dizzleMergeNow( dizzleMergeSort(arrayToSort.slice(0,mid)), 
        dizzleMergeSort(arrayToSort.slice(mid, arrayToSort.length)) );
}

function dizzleMergeNow(leftArray, rightArray){
    let lLenth = leftArray.length;
    let rLength = rightArray.length;
    let l = 0,
        r = 0;
    let result = new Array();

    while( (l<lLenth) && (r<rLength) ){
        if( leftArray[l] <= rightArray[r]){
            result.push(leftArray[l++]);
        } else {
            result.push(rightArray[r++]);
        }
    }
    if((l<lLenth)){
        while((l<lLenth)){
            result.push(leftArray[l++]);   
        }
    } else {
        while((r<rLength)){
            result.push(rightArray[r++]);
        }
    }
    return result;
}
debugger
let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
console.log(JSON.stringify(dizzleMergeSort(tc)));
console.log(JSON.stringify(tc));

// let testData1 = [7, 5, 2, 4, 3, 9],
//     testData2 = [9, 7, 5, 4, 3, 1],
//     testData3 = [1, 2, 3, 4, 5, 6];

// console.log(JSON.stringify(dizzleMergeSort(testData1)));
// console.log(JSON.stringify(dizzleMergeSort(testData2)));
// console.log(JSON.stringify(dizzleMergeSort(testData3)));

// let randomArray = (length, max) => [...new Array(length)]
// .map(() => Math.round(Math.random() * max));

// let startTime = Date.now();
// dizzleMergeSort(randomArray(9999, 1000));
// console.log("Total Runtime: " + (Date.now() - startTime) );
