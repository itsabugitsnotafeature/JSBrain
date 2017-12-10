/* 
    #PracticeThis
    #LinkedIn Question
    Source:
        http://www.geeksforgeeks.org/ways-sum-n-using-array-elements-repetition-allowed/
    Number of ways to calculate a target number using only array elements

    Problem Statement: 
        How would you go about testing all possible combinations 
        of additions from a given array of numbers so they 
        add up to a given final number?

        Example:
            Array of numbers available: [1,2,3]
                Desired Sum: 1
                Output = 1
                    [1]

                Desired Sum: 2
                Output = 2
                    [1,1], [2]

                Desired Sum: 3
                Output = 4
                    [1,1,1], [1,2], [2,1], 3

                Desired Sum: 4
                Output = 7
                    [1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2], [1,3], [3,1]
        
    Algo In a Nut Shell: 
        Calc num of ways to to get to sum from 1 to Target-SUM
        Store in array
        Keep on going until you reach Target-SUM

            Num-Of-Ways (Target-SUM) =  Num-Of-Ways (Target-SUM - val-1 of array) + 
                                        Num-Of-Ways (Target-SUM - val-2 of array) + 
                                        Num-Of-Ways (Target-SUM - val-3 of array) + 
                                        ...
                                        Num-Of-Ways (Target-SUM - val-n of array);

*/


let countWaysToGetSum = (givenVals, targetSum) => {
    let memCache = new Array(targetSum+1).fill(0);
    memCache[0] = 1;

    for( let currSum = 1 ; currSum <= targetSum ; currSum++ ){
        givenVals.forEach(val => {
            if( currSum >= val ){
                memCache[currSum] = memCache[currSum] + memCache[currSum - val];
            }
        });
    }

    return memCache[targetSum];
}
// console.log( countWaysToGetSum([1,2,3], 1) );
// console.log( countWaysToGetSum([1,2,3], 2) );
// console.log( countWaysToGetSum([1,2,3], 3) );
// console.log( countWaysToGetSum([1,2,3], 4) );
// console.log( countWaysToGetSum([1,2,3], 5) );
// console.log( countWaysToGetSum([1,2,3], 6) );
// console.log( countWaysToGetSum([1,2,3], 7) );



let countWays_sharam = (arr, N) => {
    let count = new Array(N+1).fill(0);
      
    // base case
    count[0] = 1;
      
    // count ways for all values up to 'N'
    // and store the result
    for (let i=1; i<=N; i++){
        for (let j=0; j<arr.length; j++){
  
            // if i >= arr[j] then
            // accumulate count for value 'i' as
            // ways to form value 'i-arr[j]'
            if (i >= arr[j]){
                count[i] += count[i - arr[j]];
            }
        }
    }
    // required number of ways    
    return count[N];    
      
}
// console.log( countWays([1,2,3], 6) );




/* 
    #LinkedIn Question
    #Practice #2
    Source:
        http://www.geeksforgeeks.org/number-of-ways-to-calculate-a-target-number-using-only-array-elements/
        http://www.geeksforgeeks.org/number-of-ways-to-calculate-a-target-number-using-only-array-elements/
    Number of ways to calculate a target number using only array elements

    Problem Statement: 
        Given an integer array, find number of ways 
        to calculate a target number 
        using only array elements 
        and ADDITION OR SUBTRACTION operator.

    NOTE: You can use a number only once

*/

let subsetSum = (arr, targetSum, currentIndex) => {
    currentIndex = currentIndex || 0;

    // If all elements are processed, i.e currentIndex > arr.length
    // target is not reached, return 0
    if (currentIndex >= arr.length && targetSum !== 0){
        return 0;
    }

    // If target is reached, return 1
    if (targetSum === 0) {
        return 1;
    }

    // 1. Don't consider current element
    let nativeCase =  subsetSum(arr, targetSum, currentIndex + 1);
    
    // 2. Consider current element and subtract it from target
    let subtractionCase =  subsetSum(arr, targetSum - arr[currentIndex], currentIndex + 1);
    
    // 3. Consider current element and add it to target
    // NOTE: Set following to 0 for only subtraction scenario
    let additionCase =  subsetSum(arr, targetSum + arr[currentIndex], currentIndex + 1);

    // Return total count of three cases
    return nativeCase + additionCase + subtractionCase;
}

// console.log(subsetSum([3, 9, 8, 4, 5, 7, 10], 15));
console.log(subsetSum([9, 20], 11));
console.log(subsetSum([9, 9], 18));
console.log(subsetSum([1,2,3], 4));

// output:
// 3+8+4=15
// 3+5+7=15
// 8+7=15
// 5+10=15
