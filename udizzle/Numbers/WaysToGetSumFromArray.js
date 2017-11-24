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
console.log( countWaysToGetSum([1,2,3], 1) );
console.log( countWaysToGetSum([1,2,3], 2) );
console.log( countWaysToGetSum([1,2,3], 3) );
console.log( countWaysToGetSum([1,2,3], 4) );
console.log( countWaysToGetSum([1,2,3], 5) );
console.log( countWaysToGetSum([1,2,3], 6) );
console.log( countWaysToGetSum([1,2,3], 7) );



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
        and addition or subtraction operator.

    NOTE: You can use a number only once

*/

function subsetSum(givenArray, targetSum, partialArray) {
    var currentSum, n, remaining;

    partialArray = partialArray || [];

    // sum partialArray
    currentSum = partialArray.reduce(function (a, b) {
        return a + b;
    }, 0);

    // check if the partialArray sum is equals to targetSum
    if (currentSum === targetSum) {
        console.log("%s=%s", partialArray.join("+"), targetSum)
    }

    // if we reach the number why bother to continue
    if (currentSum >= targetSum) {
        return;  
    }

    for (var i = 0; i < givenArray.length; i++) {
        currentNum = givenArray[i];
        remainingArray = givenArray.slice(i + 1);
        subsetSum(remainingArray, targetSum, partialArray.concat([currentNum]));
    }
}

// subsetSum([3, 9, 8, 4, 5, 7, 10], 15);

// output:
// 3+8+4=15
// 3+5+7=15
// 8+7=15
// 5+10=15
