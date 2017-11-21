/* 
    INSERTION SORT
    
    Imagine you are playing cards. 
        Somebody is giving you cards one by one. 
        When you are receiving card, 
            you are planning to put them in a way 
            so that the smaller one is on the left. 
        This means you want to insert them in a sorted way
    
        Algo: 
        STEP-1: If the first card you are getting is 5. 
            Just hold the card in your hand. 
                you dont have to do anything.

        STEP-2: If the second card is 2, 
            you want to put it before 5 
            so that the two cards you have are sorted. 
            
            When you are putting the card with number 2 at the left, 
                you are changing the position of the card 5 
                from first position to second position. 
            
            And then first position becomes available and you put 2 there.

        STEP-3: If the third card is 4. 
            you will start from second position. 
            In the second position, 
                you have card 5 which is bigger than 4. 
            Hence you will move 5 to the third position. 
            The next card to the left is 2 which is smaller than 4. 
            Hence, you wont move 2. And you will insert card 4 in the second position.

        STEP-4: Then you got 10. 
            It is bigger than the previous card which is 5. 
            Hence, you just add it at the last position.

        STEP-5: The next card is 7. 
            You just move the position of the card 10 to the right 
            and insert card 7.

        STEP-6: If the last card is 3. 
            You will have to move 10 to the right as it is bigger than 3. 
            and then you check with the next card to the left it is 7 
            which is bigger than 3. you move it to the right. 
        
        Similarly, you move 5, 4 to the right. And put the number 3 before 2 as 2 is smaller than 3.
        congrats. you are done.
 */

function insertionSort(arr) {
    let len = arr.length, 
        el;
    for (let i=1 ; i<len ; i++) {
        el = arr[i];
        let j = i;

        while (j > 0 && (arr[j-1] > arr[j]) ) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = el;
    }
    return arr;
}

function dizzleInsertionSort(arrToSort){
    for(let i=0 ; i<arrToSort.length ; i++){
        debugger;
        let val = arrToSort[i];
        let j = i;
        while( j>=0 && arrToSort[j-1] > val ){
            arrToSort[j] = arrToSort[j-1];
            j--;
        }
        arrToSort[j] = val;
    }
    return arrToSort;
}

let testData1 = [7,5,2,4,3,9],
    testData2 = [9,7,5,4,3,1],
    testData3 = [1,2,3,4,5,6];

console.log(JSON.stringify(dizzleInsertionSort(testData1)));
console.log(JSON.stringify(dizzleInsertionSort(testData2)));
console.log(JSON.stringify(dizzleInsertionSort(testData3)));

let randomArray = (length, max) => [...new Array(length)]
.map(() => Math.round(Math.random() * max));

let startTime = Date.now();
dizzleInsertionSort(randomArray(9999, 1000));
console.log("Total Runtime: " + (Date.now() - startTime) );