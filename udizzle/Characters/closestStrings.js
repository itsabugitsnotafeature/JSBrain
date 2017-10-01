/* 
    You are given a array of string followed by two words. 
    You have to find the minimum distance between 
    the two words in the given array of string

    For example:
        (“the', “quick', “brown', “fox', “quick')
        distance(“fox','the') = 3
        distance(“quick', “fox') = 1

 */

let findClosest = (arr, one, two) => {
    let minCount = Infinity;
    let tempCount = 0;
    let activated = false;
    let foundPair = 0;
    for (let i = 0; i < arr.length; i++) {
        if (activated) {
            tempCount++;
        }
        if (arr[i] === one || arr[i] === two) {
            foundPair++;
            if(foundPair%2 === 0){
                minCount = Math.min(minCount, tempCount -1);
            }
            tempCount = 0;
            activated = !activated;
        }
    }
    return minCount;
}
let arr = [0,1,2,3,4,5,6,7,8,9];
let arr1 = [0,1,2,3,4,5,6,7,8,9];
let one = 0;
let two = 8;
console.log(findClosest(arr, one, two));

let findClosest_iterative = (arr, one, two) => {
    let minCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempCount = 0;
        if (arr[i] === one) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] === two) {
                    minCount = tempCount;
                    break;
                }
                tempCount++;
            }
        }
        if (arr[i] === two) {
            minCount = 0;
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] === one) {
                    minCount = tempCount;
                    break;
                }
                tempCount++;
            }
        }
    }
    return minCount;
}
