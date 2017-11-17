/* 

    Source: 
        https://www.careercup.com/question?id=5756151524229120

    We have an array of objects A and an array of indexes B. 
    Reorder objects in array A with given indexes in array B. 
    Do not change array A's length. 

    example:


    var A = [C, D, E, F, G];
    var B = [3, 0, 4, 1, 2];

    sort(A, B);
    // A is now [D, F, G, C, E];

*/

let sortByIndex = (arr, indices) => {
    let delimiter = "-++-";
    
    for(let currentIndex=0 ; currentIndex<indices.length ; currentIndex++) {
        let destIndex = indices[currentIndex];

        /* 
            If destination > current, then current element has already gone to its destination
            Therefore, simply replace 
        */
        if(destIndex > currentIndex){
            arr[destIndex] = arr[destIndex] + delimiter + arr[currentIndex];
        } else {

            /* 
                check at current index, if delimiter exists 
            */
            let delimitIndex = arr[currentIndex].indexOf(delimiter);

            if(delimitIndex === -1){
                /* 
                    of current is NOT contaminated with delimiter, 
                    simply put it as is to destinatoin 
                */
                arr[destIndex] = arr[currentIndex];
            } else {
                /* 
                    This is case of A-++-B
                    Step1: Extract A and put it at destination 
                    Step2: Extract A + delimiter from current position 
                */
                arr[destIndex] = arr[currentIndex].substr(0,arr[currentIndex].indexOf(delimiter));
                arr[currentIndex] = arr[currentIndex].substr(arr[currentIndex].indexOf(delimiter) + 
                    delimiter.length , arr[currentIndex].length)
            }
        }
    }
    return arr;
}

let arr1 = ['C', 'D', 'E', 'F', 'G'];
let indices1 = [3,0,4,1,2];

let arr2 = ['C', 'D', 'E', 'F', 'G'];
let indices2 = [4,3,2,1,0];

let arr3 = ['C', 'D', 'E', 'F', 'G'];
let indices3 = [4,2,0,1,3];

let arr4 = ['C', 'D', 'E', 'F', 'G'];
let indices4 = [4,1,2,3,0];

console.log(sortByIndex(arr1, indices1));
console.log(sortByIndex(arr2, indices2));
console.log(sortByIndex(arr3, indices3));
console.log(sortByIndex(arr4, indices4));