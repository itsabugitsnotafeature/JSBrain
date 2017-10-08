/* 
    Selection Sort
    
    Algorithm: 
    Go through the array, 
        find the index of the lowest element 
        swap the lowest element with the first element. 
        
    Hence first element is the lowest element in the array.

    Now go through the rest of the array 
        (excluding the first element) 
        and find the index of the lowest 
        and swap it with the second element.

    Thats how it continues to select (find out) 
        the lowest element of the array 
        and putting it on the left until it hits the last element.
*/

function dizzleSelectionSort(arr2Sort){
    let startTime = Date.now();
    for(let i=0 ; i<=arr2Sort.length-1 ; i++){
        for(let j=i+1 ; j<=arr2Sort.length-1 ; j++){
            debugger
            if(arr2Sort[i] > arr2Sort[j]){
                arr2Sort[i] = [arr2Sort[j], arr2Sort[j] = arr2Sort[i]][0];
            }
        }
    }
    console.log("Total Runtime: " + (Date.now() - startTime) );
    return arr2Sort;
}

let testData1 = [7,5,2,4,3,9],
    testData2 = [9,7,5,4,3,1],
    testData3 = [1,2,3,4,5,6];

console.log(JSON.stringify(dizzleSelectionSort(testData1)));
console.log(JSON.stringify(dizzleSelectionSort(testData2)));
console.log(JSON.stringify(dizzleSelectionSort(testData3)));

let randomArray = (length, max) => [...new Array(length)]
.map(() => Math.round(Math.random() * max));

dizzleSelectionSort(randomArray(9999, 1000));