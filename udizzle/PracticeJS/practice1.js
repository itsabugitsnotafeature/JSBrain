















let calcSqrt = (num, guess) => {
    if(!num || num===0){
        return 0;
    }
    if(!guess){
        guess = num / 2.0;
    }
    
    let div = num / guess;
    let newGuess = (div + guess) / 2.0;
    if(newGuess === guess){
        return guess;
    }
    return calcSqrt( num, newGuess );
}

console.log(calcSqrt(3));




let greatestDifference = (arr) => {
    let res = -Infinity;
    let currMinVal = arr[0];

    for(let i=1 ; i< arr.length ; i++){
        if( arr[i] > currMinVal && ((arr[i] - currMinVal) > res) ){
            res = arr[i] - currMinVal;
        }
        currMinVal = currMinVal < arr[i] ? currMinVal : arr[i];
    }
    return res;
}
let greatestDifference_1 = (arr) => {
    let maxDiff = -Infinity,
        currMinValue = arr[0];

    for(let i=1 ; i< arr.length ; i++){
        if( arr[i] > currMinValue && (arr[i] - currMinValue > maxDiff) ){
            maxDiff = arr[i] - currMinValue;
        } else if ( arr[i] <= currMinValue ) {
            currMinValue = arr[i];
        }
    }
    return maxDiff;
}

// let arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// console.log(greatestDifference(arr));
// console.log(greatestDifference_1(arr));





let maxProductInSubArray = (arr) => {
    let maxProd = 1,
        maxSoFarProd = 1,
        minSoFarProd = 1;

    for(let i=0 ; i<arr.length ; i++ ){
        if(arr[i]===0){
            maxSoFarProd = 1; 
            minSoFarProd = 1;
        } else if(arr[i] > 0){

            maxSoFarProd *= arr[i]
            minSoFarProd = Math.min( minSoFarProd, minSoFarProd*arr[i] );

        } else {
            let temp = maxProd;
            maxSoFarProd = Math.max( 1, minSoFarProd*arr[i] );
            minSoFarProd = temp * arr[i] ;
        }
        maxProd = (maxSoFarProd > maxProd)? maxSoFarProd : maxProd;
    }

    return maxProd;
}
// let CORNER_INPUT_2 = [2, -5, -2, -4, 3];
// console.log("POOP")
// console.log(JSON.stringify(maxProductInSubArray(CORNER_INPUT_2)));



let maxSumSubArray = (arr) => {
    let max_ending_here = 0;
    let max_so_far = -Infinity;
    arr.forEach((element) => {
        max_ending_here += element;
        max_so_far = max_so_far > max_ending_here ? max_so_far : max_ending_here;
        max_ending_here = max_ending_here < 0 ? 0 : max_ending_here;
    } )
    return max_so_far;
}
// let IDEAL_INPUT = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
// console.log( JSON.stringify(maxSumSubArray(IDEAL_INPUT)) );






let mergeKSortedLists = (listOfLists) => {
    let maxLength = 0,
    crossSections = [],
    result = [];

    maxLength = listOfLists.reduce((prev,current,index,arr)=>{
        return current.length > prev ? current.length : prev;
    },0);

    for(let i=0 ; i < maxLength ; i++){
        for(let j=0 ; j<listOfLists.length ; j++){
            crossSections.push(listOfLists[j][i]);
        }
    }
    
    for(let i=0 ; i < maxLength ; i++){
        for(let j=0 ; j<crossSections.length ; j++){
            
            orderedInsert(result,crossSections[i] );
        }
    }
    
    
    

};
// let arr1 = [
//     [6,7,8,9,10],
//     [1,1,1,1,1,1,2,3,4,5],
//     [11,12,13,14,15]
// ];
// console.log( JSON.stringify( mergeKSortedLists(arr1)));



let prodOfAllElementsExceptSelf = (arr) => {
    let prodArray = new Array();
    
    let mul = 1;
    for(let i=0 ; i<arr.length ; i++){
        prodArray.push(mul);
        mul *= arr[i];
    }

    mul = 1;
    for(let i=arr.length-1 ; i>=0 ; i--){
        prodArray[i] *= mul;
        mul *= arr[i];
    }
    return prodArray;
}

// let arr = [2, 2, 4, 1]; // [8, 8, 4, 16]
// console.log( JSON.stringify(prodOfAllElementsExceptSelf(arr)));


let removeDuplicatesFromArray = (arr) =>{

    // Method 1
    return Array.from(new Set(arr));

    // Method 2
    let uniqueArray = new Array();
    arr.forEach(function(element) {
        if(uniqueArray.indexOf(element)===-1){
            uniqueArray.push(element)
        }
    }, this);
    return uniqueArray;
}


let rotateArrayLeft = (arr, times) => {
    if (times === 1){
        return arr.push(arr.shift());
    } else {
        return arr.slice(times).concat(arr.slice(times));
    }
}


let getLcm = (a,b) => {
    let prod = a*b;
    let hcf = getHcf(a,b);
    return (prod / hcf);
};

let getHcf = (a,b) => {
    if(!b) {
        return a;
    }
    return getHcf (b, a % b );
};

/* 
console.log( getHcf(64, 64) );
console.log( getLcm(18, 7) );

*/
