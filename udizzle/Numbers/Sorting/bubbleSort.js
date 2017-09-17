// Bubble Sort
/* 
    Algorithm
    Step-1: Compare the first item with the second. 
        If the first item is bigger than the second item. 
            you swap them.

    step-2: Compare second with third item. 
        If second item is bigger than the third, 
            we swap them. 
        Else, 
            they stayed in their position. 
        Hence, the biggest among first three is in the third position.

    step-3: Keep doing it. 
        Until we hit the last element of the array. 
        In that way we bubble up the biggest item of the array 
            to the right most position of the array.

    step-4: Look at the inner loop in the code below.

    step-5: Repeat this process, 
        Starting from the last item of the array. 
        Look at the outer loop in the code below. 
        We do this way, 
            so that after finishing the first inner loop, 
            the biggest one will be in the last item of the array.

    step-6: And then we move backward inside the outer loop.
        same thing is going on....

*/
// Implementation
function bubbleSort(arrToSort){
    console.log("Array to Sort: ", JSON.stringify(arrToSort));

    var arrayLenght = arrToSort.length;
    console.log("Array Length: ", arrayLenght);
    for (var i = arrayLenght-1 ; i>=0 ; i--){

      for(var j = 1 ; j<=i ; j++){
        
        console.log("\n\nCurrent Array State : ", JSON.stringify(arrToSort));
        console.log("Comparing %d with %d !", arrToSort[j-1], arrToSort[j]);
        
        if(arrToSort[j-1]>arrToSort[j]){
            console.log(" Bingo ! \n Swapping %d with %d...", arrToSort[j-1], arrToSort[j]);
            var temp = arrToSort[j-1];
            arrToSort[j-1] = arrToSort[j];
            arrToSort[j] = temp;
         } else {
            console.log("Skipping...");
         }

      }
    }
    return arrToSort;
 }

let testData1 = [7,5,2,4,3,9],
    testData2 = [9,7,5,4,3,1],
    testData3 = [1,2,3,4,5,6];

 console.log(JSON.stringify(bubbleSort(testData1)));
 console.log(JSON.stringify(bubbleSort(testData2)));
 console.log(JSON.stringify(bubbleSort(testData3)));
 
function bubbleDizzle(arr2Sort){
    for(let i = (arr2Sort.length-1) ; i > 0 ; i-- ) {
        for( let j=1 ; j<i ; j++){
            if(arr2Sort[j-1] > arr2Sort[j]) {
                arr2Sort[j] = [arr2Sort[j-1], (arr2Sort[j-1] = arr2Sort[j]) ][0];
            }
        }
    }
    return arr2Sort;
}

function bubbleDizzleWithTime(arr2Sort){
    let startTime = Date.now();
    for(let i = (arr2Sort.length-1) ; i > 0 ; i-- ) {
        for( let j=1 ; j<i ; j++){
            if(arr2Sort[j-1] > arr2Sort[j]) {
                arr2Sort[j] = [arr2Sort[j-1], (arr2Sort[j-1] = arr2Sort[j]) ][0];
            }
        }
    }
    console.log("Total Runtime: " + (Date.now() - startTime) );
    return arr2Sort;
}

console.log(JSON.stringify(bubbleDizzle(testData1)));
console.log(JSON.stringify(bubbleDizzle(testData2)));
console.log(JSON.stringify(bubbleDizzle(testData3)));

let randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

bubbleDizzleWithTime(randomArray(9999, 1000));