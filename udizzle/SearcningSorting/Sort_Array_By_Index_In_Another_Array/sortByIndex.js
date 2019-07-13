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




// FIFTH Implementation
function showData(data){
    console.log("\n\n" + JSON.stringify(data, null, 2) );
}


const ARR1 = ['C', 'D', 'E', 'F', 'G'];
const INDEX1 = [3, 0, 4, 1, 2];
const SOL1 = ['D', 'F', 'G', 'C', 'E'];

const ARR2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const INDEX2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const SOL2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let sortByIndex = (arr, iArray) => {
    let seperator = "****";
    debugger
    for(let i=0 ; i<arr.length ; i++){
        let destIndex = iArray[i];
        if(destIndex < i){
            if( arr[i].indexOf(seperator) > -1 ){
                
                let itemToMove = arr[i].substring(0, arr[i].indexOf(seperator));
                arr[i] = arr[i].substring( arr[i].indexOf(seperator) + seperator.length, arr[i].length  )
                
                arr[destIndex] = itemToMove;
            } else {
                arr[destIndex] = arr[i];
            }
        } else {
            if( arr[i].indexOf(seperator) > -1 ){
                
                let itemToMove = arr[i].substring(0, arr[i].indexOf(seperator));
                arr[i] = arr[i].substring( arr[i].indexOf(seperator) + seperator.length, arr[i].length  )
                
                arr[destIndex] = itemToMove;
            } else {
                arr[destIndex] += seperator + arr[i];
            }
        }
    }

}
sortByIndex(ARR1, INDEX1)
showData( ARR1 );









// FOURTH Implementation
const ARR1 = ['C', 'D', 'E', 'F', 'G'];
const INDEX1 = [3, 0, 4, 1, 2];
const SOL1 = ['D', 'F', 'G', 'C', 'E'];

const ARR2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const INDEX2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const SOL2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let arr1,
    index1,
    arr2,
    index2;

let sortByIndev_v4 = (arrChar, arrIndex)=>{
    var arr1 = ['C', 'D', 'E', 'F', 'G'];
    var arr2 = [3, 0, 4, 1, 2];
    // var result = new Array(arr1.length);
    
    arrChar = arrChar? arrChar: arr1;
    arrIndex = arrIndex? arrIndex: arr2;

    let map = new Map();
    for(let i = 0 ; i< arr1.length ; i++){
        // result[arr2[i]] = arr1[i];

        map.set(arr2[i],arr1[i]);
    }
    
    let sorted = new Array(arr1.length);
    map.forEach((value,key)=>{
        sorted[key] = value;
    })
  
    console.log(sorted);
    return sorted;
};

// THIRD Implementation ==> MOST MIND BOGGLING 
function sortByIndex_v3(array, index) {
    for (let i = 0; i < index.length; ++i) {
        let tmp = i;
        while (index[tmp] != tmp) {
            swap(array, index[tmp], tmp);
            swapIndex(index, index[tmp], tmp);
            tmp = index[tmp];
        }
    }
    return array;
}
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function swapIndex(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


// SECOND Implementation
function sortByIndex_v1(arr, index) {
    if (!arr || !index || (arr.length < 1) || (index.length < 1)) {
        return null;
    }
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



// Testing Third Implementation
setData();
console.log(assert(sortByIndex_v3(arr1, index1), SOL1));
console.log(assert(sortByIndex_v3(arr2, index2), SOL2));

// Testing Second Implementation
setData();
console.log(assert(sortByIndex_v1(arr1, index1), SOL1));
console.log(assert(sortByIndex_v1(arr2, index2), SOL2));

// Testing First Implementation
// setData();
// console.log(assert(sortByIndex_v0(arr1, index1), SOL1));
// console.log(assert(sortByIndex_v0(arr2, index2), SOL2));




// SIMPLE ASSERT FUNCTION
function assert(isValue, expectedValue) {
    if (!(JSON.stringify(isValue) == JSON.stringify(expectedValue))) {
        console.log("Expected calculated value:" + isValue +
            " to be Equal to:" + expectedValue);
        return false;
    }
    return true;
}

function setData() { 
    arr1 = ARR1;
    arr2 = ARR2;
    index1 = INDEX1;
    index2 = INDEX2;
}