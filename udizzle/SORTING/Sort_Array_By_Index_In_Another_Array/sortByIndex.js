/* 
    Question: 
        We have an array of objects A and an array of index B. 
        Reorder objects in array A with given index in array B. 
        Do not change array A's length. 

    EXAMPLE:
        var A = [C, D, E, F, G];
        var B = [3, 0, 4, 1, 2];

        sort(A, B);
            // A is now [D, F, G, C, E];

    JSBIN Solution: 
        https://jsbin.com/giyetaw/edit?js,console
 */



let arr1 = ['C', 'D', 'E', 'F', 'G'];
let index1 = [3, 0, 4, 1, 2];
const SOL1 = ['D', 'F', 'G', 'C', 'E'];

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let index2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const SOL2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function sortByIndex_v1(arr, index) {
    debugger
    // if (!arr || !index || (arr.length < 1) || (index.length < 1)) {
    //     return null;
    // }
    let indexMap = new Map();

    for (let i = 0; i < index.length; i++) {
        debugger
        let src = i;
        let dest = index[i];

        if (src === dest) {
            continue;
        } else if (!indexMap.has(src)) {
            indexMap.set(dest, arr[dest]);
            arr[dest] = arr[src];
        } else {
            indexMap.set(dest, arr[dest]);
            arr[dest] = indexMap.get(src);
        }
    }
    return arr;
}

// FIRST Implementation
function sortByIndex_v0(arr, index) {
    if (!arr || !index || (arr.length < 1) || (index.length < 1)) {
        return null;
    }
    let result = new Array(index.length);
    for (let i = 0; i < index.length; i++) {
        if (i === index[i]) {
            continue;
        } else {
            result[index[i]] = arr[i];
        }
    }
    arr = result;
    return arr;
}


// Testing First Implementation
console.log(assert(sortByIndex_v0(arr1, index1), SOL1));
console.log(assert(sortByIndex_v0(arr2, index2), SOL2));

// Testing Second Implementation
console.log(assert(sortByIndex_v1(arr1, index1), SOL1));
console.log(assert(sortByIndex_v1(arr2, index2), SOL2));


// SIMPLE ASSERT FUNCTION
function assert(isValue, expectedValue) {
    if (!(JSON.stringify(isValue) == JSON.stringify(expectedValue))) {
        console.log("Expected calculated value:" + isValue +
            " to be Equal to:" + expectedValue);
        return false;
    }
    return true;
}
