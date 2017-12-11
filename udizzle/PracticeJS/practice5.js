'use strict'
// DEC 5

/* 
    Higher order Functions  @DONE
    Sorting                 @DONE
    Searching 
    DataStructures in JS
    Numbers 
    Characters 
*/
































let longestCommonSubsequence = (a, b) => {
    if(a.length === 0 || b.length ===0) {
        return 0;
    }

    if(a[0] === b[0]) {
        return 1 + longestCommonSubsequence(a.substring(1, a.length), b.substring(1, b.length));
    }

    let one = longestCommonSubsequence(a, b.substring(1, b.length));
    let two = longestCommonSubsequence(a.substring(1, a.length),b);
    return Math.max(one, two);
}
let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';
console.log(longestCommonSubsequence(str1, str2));




let mySqrt = (num, guess) => {
    if(!guess) {
        guess = num/2;
    }
    let div = num / guess;
    let new_guess = (div + guess)/2;
    if(new_guess === guess) {
        return guess;
    } else {
        return mySqrt(num, new_guess);
    }
}
// console.log(mySqrt(16));
// console.log(mySqrt(36));
// console.log(mySqrt(3));
// console.log(mySqrt(2));




// Number of Ways to select K items out of N items
// Disregarding the order

let binomialCoeff = (n,k) => {
    if(n===k || k===0){
        return 1;
    } else {
        return binomialCoeff(n-1, k-1) + binomialCoeff(n-1, k);
    }
}
// console.log(binomialCoeff(4,2));
// console.log(binomialCoeff(5,2));





let digitsToWords = (num) => {
    let units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tens = [ '', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    let hundreds = [ '', 'hundred', 'thousand', 'million', 'billion', 'trillion'];

    
    if(num < 20) {
        return units[num];
    }
    if(num < 100){
        // return tens[ Math.floor(num/10) ] + ' ' + units[num - (Math.floor(num/10) * 10)];
        return tens[ Math.floor(num/10) ] + ' ' + units[ Math.floor(num%10)];
    }
    if(num < 1000){
        return units[Math.floor(num/100) ] + ' hundred ' +  digitsToWords( Math.floor(num%100) );
    }
    if(num < 1000000){
        return digitsToWords(Math.floor(num/1000)) + ' thousand ' +  digitsToWords( Math.floor(num%1000) );
    }
    if(num < 1000000000){
        return digitsToWords(Math.floor(num/1000000)) + ' million ' +  digitsToWords( Math.floor(num%1000000) );
    }

}

let digitsToWordsWithDecimal = (num) => {
    num = num.toString();
    let whole;
    let decimal;
    if(num.indexOf('.') > -1){
        whole = parseInt(num.slice(0, num.indexOf('.')));
        decimal = num.slice(num.indexOf('.') + 1, num.length);
    }
    let minorString = '';
    decimal = [...decimal];
    decimal.forEach(val => {
        minorString += digitsToWords(parseInt(val)) + ' ' ;
    });
    return digitsToWords(whole) + ' POINT ' + minorString;
}

// console.log(digitsToWordsWithDecimal(976452842.678431));
// console.log(digitsToWords(971314));
// console.log(digitsToWords(425623));
// console.log(digitsToWords(999992));







let generateFibonacciTillOrder = (order, arr) => {
    if(!arr){
        arr = new Array();
        arr.push(0);
        arr.push(1);
        arr.push(1);
    }
    if(arr.length === order){
        return arr;
    } else {
        arr.push(arr[arr.length-1] + arr[arr.length-2] );
        return generateFibonacciTillOrder(order, arr)
    }
}

let getFibNthNumofNthOrder = (order) => {
    if(order <=1 ){
        return order;
    } else {
        return (getFibNthNumofNthOrder(order-1) + getFibNthNumofNthOrder(order-2));
    }
}
// console.log(generateFibonacciTillOrder(11));
// console.log(getFibNthNumofNthOrder(10));
// console.log(generateFibonacciTillOrder(50));
// console.log(getFibNthNumofNthOrder(50));






let findIfNumsExistWithGivenProduct = (arr, targetProduct) => {
    arr.sort();
    let low = 0;
    let hi = arr.length-1;

    while (low < hi){
        if((arr[low] * arr[hi]) < targetProduct){
            low++;
        } else if((arr[low] * arr[hi]) > targetProduct){
            hi--;
        } else if((arr[low] * arr[hi]) === targetProduct){
            return true;
        }
    }
    return false;
}
let test = [1, 6, 4, 5, 1, 2, 3, 4, 1, 9, 1, 8, 7, 6, 9, 6, 2, 1, 6, 2];
// console.log(findIfNumsExistWithGivenProduct(test, 12));
// console.log(findIfNumsExistWithGivenProduct(test, 77));




let intersectionOfTwoArrays = (arr1, arr2) => {
    for(let i=0 ; i<arr1.length ; i++){
        if(arr2.indexOf(arr1[i]) === -1){
            arr1.splice(i, 1);
        } else {
            arr2.splice(arr2.indexOf(arr1[i]), 1);
        }
    }
    return arr1;
}
// let firstArray = [2, 2, 4, 1];
// let secondArray = [1, 2, 0, 2];
// console.log(intersectionOfTwoArrays(firstArray, secondArray));
// console.log(firstArray);


function greatestCommonDivisor(a, b){
    if(!b){
        return a;
    } else {
        return (b, a%b);
    }
}
// console.log(greatestCommonDivisor( 30, 25 ));



let isHappyNum = (num, iter) => {
    if(!iter) {
        iter = 1;
    } 
    if(iter > 9999){
        console.log("Too deep!");
        return false;
    }

    if (num < 0) {
        return false;
    }

    if (num < 10 && num!==1) {
        return false;
    }

    if (num===1) {
        return true;
    }

    num = [...num.toString()];
    let sum = 0;
    for(let i=0 ; i < num.length ; i++){
        sum += Math.pow(parseInt(num[i]), 2)
    }
    return isHappyNum(sum, iter+1);
}
// console.log( isHappyNum(19));
// console.log( isHappyNum(2));




let isPowOfN = (num, pow) => {
    if(pow === 2){
        return (num & (num-1)) === 0;
    } else {
        while(num > 1){
            num = num/pow;
        }
        return (num === 1);
    }
}

// console.log(isPowOfN(36, 6));
// console.log(isPowOfN(16, 2));
// console.log(isPowOfN(81, 9));
// console.log(isPowOfN(121, 11));
// console.log(isPowOfN(1024, 2));

// console.log(isPowOfN(36, 2));
// console.log(isPowOfN(1025, 2));
// console.log(isPowOfN(1025, 21));




let greatestArrayDifference = (arr) => {
    let maxNum = arr[0];
    let minNum = arr[0];

    for(let i=0 ; i<arr[i] ; i++){
        maxNum = Math.max(maxNum, arr[i]);
        minNum = Math.min(minNum, arr[i]);
    }

    return maxNum - minNum;
}

// let arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// console.log(greatestArrayDifference(arr));






let lcm = (a,b) => {
    return ( (a*b) / hcf(a, b) );
}
let hcf = (a,b) => {
    if(!b){
        return a;
    } else {
        return hcf(b, a%b);
    }
}
// console.log(hcf(8, 16));



let maxProdOf3Nums_Consecutive = (arr) => {
    let res = -Infinity;
    let prod1 = 1;
    let prod2 = 1;
    let prod3 = 1;

    let iter = 1;
    for (let i = 0; i < arr.length; i++) {

        prod1 *= arr[i];
        prod2 *= arr[i + 1];
        prod3 *= arr[i + 2];

        prod1 = isNaN(prod1) ? -Infinity : prod1;
        prod2 = isNaN(prod2) ? -Infinity : prod2;
        prod3 = isNaN(prod3) ? -Infinity : prod3;

        res = Math.max(prod1, prod2, prod3, res);
        iter++;

        if (iter > 3) {
            prod1 = 1;
            prod2 = 1;
            prod3 = 1;
            iter = 1;
        }
    }
    return res;
}
let maxProdOf3Nums_NonConsecutive = (arr) => {
    arr.sort();
    return Math.max((arr[0] * arr[1] * arr[arr.length - 1]),
        arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1]);
}


// let TC = {
//     one: [1, 2, 3],
//     two: [1, 2, 3, 4],
//     three: [-1, -2, -3],
//     four: [-4, -3, -2, -1, 60]
// };

// console.log(maxProdOf3Nums_Consecutive(TC.one));
// console.log(maxProdOf3Nums_Consecutive(TC.two));
// console.log(maxProdOf3Nums_Consecutive(TC.three));
// console.log(maxProdOf3Nums_Consecutive(TC.four));

// console.log(maxProdOf3Nums_NonConsecutive(TC.one));
// console.log(maxProdOf3Nums_NonConsecutive(TC.two));
// console.log(maxProdOf3Nums_NonConsecutive(TC.three));
// console.log(maxProdOf3Nums_NonConsecutive(TC.four));





let maxSubArraySum = (arr) => {
    let maxSum = -Infinity;
    let currSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += arr[i];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}

// let LONGEST_INPUT = [-64, 78, 56, 10, -8, 26, -18, 47, -31, 75, 89, 13, 48, -19, -69, 36, -39, 55, -5, -4, -15, -37, -27, -8, -5, 35, -51, 83, 21, -47, 46, 33, -91, -21, -57, 0, 81, 1, -75, -50, -23, -86, 39, -98, -29, 69, 38, 32, 24, -90, -95, 86, -27, -23, -22, 44, -88, 3, 27, 9, 55, -50, -80, 40, 5, -61, -82, -14, 40, -58, 35, 93, -68, -26, 94, 3, -79, 9, -88, 21, 19, -84, 7, 91, -8, 84, 12, -19, -13, -83, 66, -80, -34, 62, 59, 48, -98, 53, -66, 18, 94, 46, 11, -73, 96, -18, 6, -83, 91, 17, 38, 10, 9, -78, -22, 77, 83, 89, -42, -30, -94, -98, -34, -51, 63, -97, 96, 64, 55, -93, -41, 27, 52, 69, 53, 26, -71, -64, 42, -80, 52, -43, 6, -62, -21, 83, -85, -38, 49, -50, 8, 55, -72, 74, 80, 90, 53, 53, 32, -15, 36, 90, -88, -34, 37, 41, 91, 65, 76, 33, 61, 5, 90, -33, 42, -54, -73, 34, -16, 75, 83, 91, 7, -89, 42, -36, 77, -5, -83, 9, 80, 53, -23, 68, -81, 90, 10, -90, 55, -14, 19, -7, 91, -14, 59, 33, 31, 62, -33, -85, 37, -73, 83, -78, -86, 25, -15, 91, 97, 2, -23, 54, -68, 53, 22, -73, 43, -68, -87, -25, 18, 31, 67, -14, 94, 3, -81, 25, -35, -37, 17, 79, -34, -23, -99, -43, -98, -38, -52, 75, 63, 1, 29, 71, -68, -71, 74, 51, -40, 86, -73, 54, -5, 70, -60, -11, -49, -64, 90, -8, -25, -16, -52, 40, 60, -75, 96, 39, -13, -79, 14, -73, 22, -79, 75, 30, -51, 49, -19, -15, 36, -16, -60, -69, -68, -21, -4, -18, -9, -14, 50, 65, 70, 75, -17, 30, 99, -44, -31, -14, -46, 60, -10, 52, 80, -35, -18, -94, -86, 62, -10, 49, -53, 6, 56, -45, 62, -48, 36, -47, 15, -37, -81, -15, -62, -22, 91, -85, 33, -62, -23, 86, 97, 66, 15, 54, -69, 96, 36, -55, 36, -97, 70, 82, 9, 4, -63, -29, 32, 49, 23, -53, 88, 18, 8, -96, 72, -23, -82, 6, 14, -6, -31, -12, -39, 61, -58, -32, 57, 77, 12, -7, 56, -40, -48, -35, 40, -35, 12, -28, 90, -87, -4, 79, 30, 80, 82, -20, -43, 76, 62, 70, -30, -92, -42, 7, 68, -24, 75, 26, -70, -36, 95, 86, 0, -52, -49, -60, 12, 63, -11, -20, 75, 84, -41, -18, 41, -82, 61, 98, 70, 0, 45, -83, 8, -96, 24, -24, -44, -24, -98, -14, 39, 97, -51, -60, -78, -24, -44, 10, -84, 44, 89, 67, 5, -75, -73, -53, -81, 64, -55, 88, -35, 89, -94, 72, 69, 29, -52, -97, 81, -73, -35, 20, -99, 13, 36, 98, 65, 69, 8, 81, 13, -25, 25, 95, -1, 51, -58, -5, 16, -37, -17, 57, -71, -35, 29, 75, 70, 53, 77, 51, 79, -58, -51, 56, 31, 84, 54, -27, 30, -37, -46, -56, 14, 56, -84, 89, 7, -43, -16, 99, 19, 67, 56, 24, -68, -38, -1, -97, -84, -24, 53, 71, -6, -98, 28, -98, 63, -18, -25, -7, 21, 5, 13, -88, -39, 28, -98, 68, 61, -15, 44, -43, -71, 1, 81, -39, 62, -20, -60, 54, 33, 69, 26, -96, 48, -69, -94, 11, -11, -20, 80, 87, 61, -29, 98, -77, 75, 99, 67, 37, -38, 11, 93, -10, 88, 51, 27, 28, -68, 66, -41, 41, 36, 84, 44, -16, 91, 49, 71, -19, -94, 28, -32, 44, 75, -57, 66, 51, -80, 10, -35, -19, 97, -65, 70, 63, 86, -2, -9, 94, -59, 26, 35, 76, 11, -21, -63, -21, -94, 84, 59, 87, 13, -96, 31, -35, -53, -26, -84, -34, 60, -20, 23, 58, 15, -7, 21, -22, 67, 88, -28, -91, 14, -93, 61, -98, -38, 75, -19, -56, 59, -83, -91, -51, -79, 16, 14, -56, 90, 6, -14, 27, 63, -91, -15, -22, -22, 82, 32, -54, 47, -96, -69, -61, 86, 91, -60, -75, 43, -3, -31, 3, -9, -23, 28, 11, 69, -81, 31, 59, 25, -83, -36, -12, -75, 48, 42, -21, 8, -26, 24, -68, -23, 31, -30, -60, 0, -13, -36, -57, 60, 32, 22, -49, 85, -49, 38, 55, -54, -31, -9, 70, -38, 54, -65, -37, -20, 76, 42, 64, -73, -57, 95, -20, 74, -57, 19, -49, 29, 83, -7, -11, -8, -84, 40, -45, -57, -45, 86, -12, 24, -46, -64, 62, -91, -30, -74, -35, -76, 44, -94, -73, 86, 77, 7, 37, -80, -74, 87, 48, 85, -19, -85, -45, -27, 31, 9, -8, 85, -28, 79, -14, 25, 91, -51, 10, -61, -49, 74, -38, 94, 56, -12, 57, 34, 71, -5, 53, 74, -18, -21, 59, 39, -30, 90, -88, -99, -24, 3, 62, 47, -40, -51, -27, -49, -26, 82, -11, 1, 34, 27, -5, -10, 92, -48, -99, 63, 23, 31, 14, -94, -90, -49, 44, -44, -59, 33, -44, 17, -64, -82, -36, -28, -57, 13, 0, -7, -4, 88, 70, -93, -7, -35, -4, -15, -6, -26, -75, 93, -95, 39, 98, 90, 66, 20, -54, -93, -47, -22, 0, -35, -28, 41, 14, -8, -46, -86, 84, 26, -98, 55, 32, -29, 96, -94, 32, -33, -21, 57, -39, -17, -27, -64, -50, -61, 55, -28, -78, 84, 49, 22, -73, -79, -37, 40, 12, -7, 53, -26, -80, 31, -94, 51, -97, -98, 56, 34, -54, -88, -32, -17, -29, 17, 18, 20, 32, -49, 91, 54, -65, 40, -47, -39, 38, -8, -99, -73, 84, 30, 0, -96, -38, 5, 32, -36, -16, -35, 74, 29, -23, -80, -88, 47, 36, 29, -32, -54, 79, -64, 76, 91, 53, -71, -71, -9, -3, -93, 17, -19, 36, 94, -38, 97, -1, 70, -62, 82, -65, -87, 11, 11, -68, -1, -41, 44, -71, 3, 89];
// let IDEAL_INPUT = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let IDEAL_NEG_INPUT = [-1, -1, -1, -1, -1, -5, -4];
// console.log(maxSubArraySum(IDEAL_INPUT) === 6 );
// console.log(maxSubArraySum(IDEAL_NEG_INPUT) === -1 );
// console.log(maxSubArraySum(LONGEST_INPUT) === 3452 );






let mergeKSortedList = (arr) => {
    let result = [];
    let maxLen = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        maxLen = Math.max(maxLen, arr[i].length);
    }
    for (let i = 0; i < maxLen; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].length > 0) {
                result = insertElemByVal(result, arr[j].shift());
            }
        }
    }
    return result;
}

let insertElemByVal = (arr, num) => {
    if (arr.length === 0) {
        arr.push(num);
    } else {
        let ind = 0;
        while (arr[ind] <= num) {
            ind++;
        }
        arr = arr.slice(0, ind).concat([num]).concat(arr.slice(ind, arr.length));
    }
    return arr;
}


let arr1 = [
    [6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5],
    [11, 12, 13, 14, 15]
];
let arr2 = [
    [5],
    [10],
    [-2, -1, 0],
    [0],
    [7]
];

let arr3 = [
    []
];

// console.log( JSON.stringify(mergeKSortedList(arr1)) );
// console.log( JSON.stringify(mergeKSortedList(arr2)) );
// console.log( JSON.stringify(mergeKSortedList(arr3)) );






let prodOFAllButNum = (arr) => {
    let res = new Array(arr.length);
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        res[i] = mul;
        mul *= arr[i];
    }

    mul = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        res[i] *= mul;
        mul *= arr[i];
    }
    return res;
}

// console.log(prodOFAllButNum( [2, 2, 4, 1] ));
// console.log(prodOFAllButNum( [0, 0, 0, 2] ));
// console.log(prodOFAllButNum( [1, 2, 3, 4] ));
// console.log(prodOFAllButNum( [-2, -2, -3, 2] ));







let rearrangeByIndex = (arr, destArr) => {
    if (arr.length !== destArr.length) {
        return null;
    }
    let delim = "++++";
    for (let i = 0; i < arr.length; i++) {
        if (destArr[i] <= i) {
            if (arr[i].indexOf(delim) === -1) {
                arr[destArr[i]] = arr[i];
            } else {
                arr[destArr[i]] = arr[i].slice(0, arr[i].indexOf(delim));
                arr[i] = arr[i].slice(arr[i].indexOf(delim) + (delim.length), arr[i].length);
            }
        } else {
            arr[destArr[i]] += delim + arr[i];
        }
    }
}

// let arr1 =      ['C', 'D', 'E', 'F', 'G'];
// let indices1 =  [ 3,   0,   4,   1,   2];
// rearrangeByIndex(arr1, indices1);
// console.log(arr1);

// let arr2 = ['C', 'D', 'E', 'F', 'G'];
// let indices2 = [4,3,2,1,0];
// rearrangeByIndex(arr2, indices2);
// console.log(arr2);

// let arr3 = ['C', 'D', 'E', 'F', 'G'];
// let indices3 = [4,2,0,1,3];
// rearrangeByIndex(arr3, indices3);
// console.log(arr3);

// let arr4 = ['C', 'D', 'E', 'F', 'G'];
// let indices4 = [4,1,2,3,0];
// rearrangeByIndex(arr4, indices4);
// console.log(arr4);






let rotateArray = (arr, times, anticlockwise) => {
    if (anticlockwise) {
        arr.slice(arr.length - times, arr.length).concat(arr.slice(0, arr.length - times));
    } else {
        return arr.slice(times, arr.length).concat(arr.slice(0, times));
    }
}






let getNthUglyNumber = (nth) => {
    let arr = new Array();
    arr.push(0);
    arr.push(1);
    let currNum = 2;

    while (arr.length <= nth) {
        if (isUgly(currNum)) {
            // process.stdout.clearLine();  // clear current text
            // process.stdout.cursorTo(0);
            // process.stdout.write("PUSHING => " + currNum);
            arr.push(currNum);
        }
        currNum++;
    }
    return arr[nth];
}

function isUgly(num) {
    while (num % 2 === 0) {
        num = num / 2;
    }
    while (num % 3 === 0) {
        num = num / 3;
    }
    while (num % 5 === 0) {
        num = num / 5;
    }
    return (num === 1);
}

// console.log("\n" + getNthUglyNumber(10));
// console.log("\n" + getNthUglyNumber(15));   // 24
// console.log("\n" + getNthUglyNumber(150));













let waysToCalcSum_WITH_RepeatingNumbers = (arr, targetSum) => {
    let sumCache = new Array(targetSum + 1).fill(0);
    sumCache[0] = 1;

    for (let currentSum = 1; currentSum <= targetSum; currentSum++) {
        arr.forEach(val => {
            if (val <= currentSum) {
                sumCache[currentSum] += sumCache[currentSum - val];
            }
        });
    }
    return sumCache[targetSum];
}
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 1) );
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 2) );
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 3) );
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 4) );
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 5) );
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 6) );
// console.log( waysToCalcSum_WITH_RepeatingNumbers([1,2,3], 7) );



let waysToCalcSum_WITHOUT_RepeatingNumbers = (arr, targetSum, currentIndex) => {
    currentIndex = currentIndex || 0;

    // If all elements are processed, i.e currentIndex > arr.length
    // target is not reached, return 0
    if (currentIndex >= arr.length && targetSum !== 0) {
        return 0;
    }

    // If target is reached, return 1
    if (targetSum === 0) {
        return 1;
    }

    // 1. Don't consider current element
    let nativeCase = waysToCalcSum_WITHOUT_RepeatingNumbers(arr, targetSum, currentIndex + 1);

    // 2. Consider current element and subtract it from target
    let subtractionCase = waysToCalcSum_WITHOUT_RepeatingNumbers(arr, targetSum - arr[currentIndex], currentIndex + 1);

    // 3. Consider current element and add it to target
    let additionCase = waysToCalcSum_WITHOUT_RepeatingNumbers(arr, targetSum + arr[currentIndex], currentIndex + 1);

    // Return total count of three cases
    return nativeCase + additionCase + subtractionCase;
}

// console.log( waysToCalcSum_WITHOUT_RepeatingNumbers([1,2,3], 1) );
// console.log( waysToCalcSum_WITHOUT_RepeatingNumbers([-3, 1, 3, 5, 7, 2], 6) );
// console.log( waysToCalcSum_WITHOUT_RepeatingNumbers([3, 9, 8, 4, 5, 7, 10], 15));












let treeSumByDepth = (arr, depth) => {
    if (depth === undefined) {
        depth = 1;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isArray1(arr[i])) {
            let flattenedSum = treeSumByDepth(arr[i], depth + 1);
            sum += flattenedSum;
        } else {
            sum += (depth * arr[i]);
        }
    }
    return sum;
}

function isArray1(arr) {
    return (Object.prototype.toString.call(arr).toLowerCase().indexOf('array') > -1);
}

// let arr1 = [[1,1],2,[1,1]];
// let arr2 =  [1,[4,[6]]];
// debugger
// console.log(treeSumByDepth(arr1));  // 10
// console.log(treeSumByDepth(arr2));  //





let flattenArrayTree = (arr) => {
    if (arr.length === 0) {
        return;
    }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (isArray(arr[i])) {
            let flattened = flattenArrayTree(arr[i]);
            while (flattened.length > 0) {
                res.push(flattened.shift());
            }
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

function isArray(arr) {
    return (Object.prototype.toString.call(arr).toLowerCase().indexOf('array') > -1);
}

// var arr1 = [ [1,2,3],[ 4,5,[6] ],151, 152,153, [154, [155, 156, 57, 158] ,[7,8],[9,10,[11,12,13]]] ];
// let arr2 = [[1,1],2,[1,1]];
// var arr3 = [[4,[11,12],5,6],2,1,3,[7,8,[10,9]]];
// let arr4 =  [1,[4,[6]]];
// console.log(flattenArrayTree(arr1));
// console.log(flattenArrayTree(arr2));
// console.log(flattenArrayTree(arr3));
// console.log(flattenArrayTree(arr4));








// Max product of 3
let maxProductOf3 = (arr) => {
    arr.sort();
    return Math.max((arr[0] * arr[1] * arr[arr.length - 1]), (arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]));
}
// let arr1 = [-10, -10, 1, 3, 2];
// console.log("Max Prod => " + maxProductOf3(arr1));












// Q2. 
const input2 = {
    id: 1,
    children: [
        {
            id: 2
        },
        {
            id: 4
        },
        {
            id: 3,
            children: [
                {
                    id: 5
                },
                {
                    id: 6
                }
            ]
        }
    ]
}
const output2 = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 5 },
    { id: 6 },
    { id: 4 }
];
let qFunc2 = (obj) => {
    let result = [];

    (function recurseAndAdd(child) {
        let item = { id: child.id };
        result.push(item);

        if (child.children) {
            let children = child.children;
            for (let i = 0; i < children.length; i++) {
                recurseAndAdd(children[i]);
            }
        }
    })(obj);

    return result;
}
// console.log(qFunc2(input2));











// Search Dependencies
/* 
    [
        {
            id: 'fundamental', 
            dependencies: []
        },
        {
            id: 'oo',
            dependencies: ['fundamental']
        },
        {
            id: 'ds',
            dependencies: ['fundamental']
        },
        {
            id: 'javascript',
            dependencies: ['oo', 'ds']
        },
        {
            id: 'html',
            dependencies: ['javascript', 'oo']
        }
    ]
    write a method to find all dependencies for a certain class:
    e.g: 
    findDependencies(courses, ‘html’) => ['fundamental', 'oo','ds', 'javascript'] 

  
*/
let findDependencies = (arr, dep) => {
    let depMap = new Map();
    let result = [];

    arr.forEach((depObj) => {
        if (!depMap.has(depObj.id)) {
            depMap.set(depObj.id, depObj.dependencies);
        } else {
            let currDeps = depMap.get(depObj.id);
            currDeps = currDeps.concat(depObj.dependencies);
            depMap.set(depObj.id, currDeps);
        }
    });

    (function recurseAndAdd(currDep) {
        if (!currDep || (result.indexOf(currDep) > -1)) {
            return;
        } else {
            let childDeps = depMap.get(currDep);

            for (let i = 0; i < childDeps.length; i++) {
                recurseAndAdd(childDeps[i]);
            }
            result.push(currDep);
        }
    })(dep);
    return result.slice(0, result.length - 1);
}
// let arr = [
//     {
//         id: 'fundamental', 
//         dependencies: []
//     },
//     {
//         id: 'oo',
//         dependencies: ['fundamental']
//     },
//     {
//         id: 'ds',
//         dependencies: ['fundamental']
//     },
//     {
//         id: 'javascript',
//         dependencies: ['oo', 'ds']
//     },
//     {
//         id: 'html',
//         dependencies: ['javascript', 'oo']
//     }
// ];
// console.log(findDependencies(arr, 'html'));
// console.log(findDependencies(arr, 'javascript'));
// console.log(findDependencies(arr, 'ds'));
// console.log(findDependencies(arr, 'oo'));
// console.log(findDependencies(arr, 'fundamental'));






// Given
const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

// Result
const this_result = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
];

let groupUserBySkill = (endorsements) => {
    return endorsements.reduce((prev, curr, index, arr) => {
        if (prev.length === 0) {
            let item = {};
            item.skill = curr.skill;
            item.user = [curr.user];
            item.count = item.user.length;
            prev.push(item);
        } else {
            let found = false;
            prev.map((eachSkill) => {
                if (eachSkill.skill === curr.skill) {
                    eachSkill.user.push(curr.user);
                    eachSkill.count = eachSkill.user.length;
                    found = true;
                }
            })
            if (!found) {
                let item = {};
                item.skill = curr.skill;
                item.user = [curr.user];
                item.count = item.user.length;
                prev.push(item);
            }
        }
        return prev;
    }, []);
}
// console.log( JSON.stringify(groupUserBySkill(endorsements), null, 2) );










// quick sort
let quickSort = (arr, left, right) => {
    if (left === undefined) {
        left = 0;
        right = arr.length - 1;
    }

    if (left < right) {
        let pivotIndex = right;
        let partitionIndex = partion(arr, left, right, pivotIndex);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    } else {
        return arr;
    }
}

let partion = (arr, left, right, pivotIndex) => {
    let pivotValue = arr[pivotIndex];
    let partitionIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, pivotIndex);
    return partitionIndex;
}

function swap(arr, src, dest) {
    arr[dest] = [arr[src], arr[src] = arr[dest]][0];
}

// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log(tc);
// quickSort(tc)
// console.log(tc);





// merge sort
let mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    arr = merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)));
    return arr;
}
let merge = (lar, rar) => {
    let result = [];

    while ((lar.length > 0) && (rar.length > 0)) {
        if (lar[0] > rar[0]) {
            result.push(rar.shift());
        } else if (lar[0] < rar[0]) {
            result.push(lar.shift());
        } else if (lar[0] === rar[0]) {
            result.push(lar.shift());
            result.push(rar.shift());
        }
    }

    return (lar.length > 0) ? result.concat(lar) : result.concat(rar);
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log(mergeSort(tc));
// console.log(tc);






// insertion sort
let insertionSort = (arr) => {
    let result = [];
    arr.forEach(val => {
        if (result.length === 0) {
            result.push(val);
        } else {
            let index = 0;
            while (index < result.length && result[index] <= val) {
                index++;
            }
            result = result.slice(0, index).concat(val).concat(result.slice(index, result.length))
        }
    });
    return result;
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log(insertionSort(tc));
// console.log(tc);






// selection sort
let selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// selectionSort(tc)
// console.log(tc);







function swap1(arr, src, dest) {
    arr[dest] = [arr[src], arr[src] = arr[dest]][0];
}
// bubble sort
let bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = 0;
        while (j < i) {
            if (arr[j] > arr[j + 1]) {
                swap1(arr, j + 1, j);
            }
            j++;
        }
    }
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// bubbleSort(tc);
// console.log(tc);
