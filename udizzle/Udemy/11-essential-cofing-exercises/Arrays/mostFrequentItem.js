'use strict'


let findMostFrequentNum = (arr) => {
    let countMap = {};
    let maxVal = 0;
    arr.forEach(element => {
        if(element in countMap) {
            countMap[element] = countMap[element]+1;
            maxVal = maxVal > countMap[element] ? maxVal : countMap[element];
        } else {
            countMap[element] = 1;
        }
        
    });
    return Object.keys(countMap).find((key) => countMap[key] === maxVal );
}
let test = [1, 6, 4, 5, 1, 2, 3, 4, 1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2];
console.log(findMostFrequentNum(test, 12));