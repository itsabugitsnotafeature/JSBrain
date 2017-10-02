/* 
    Source : 
        https://github.com/kennymkchan/interview-questions-in-javascript

    1.2 Being told that an unsorted array contains (n - 1) of n 
        consecutive numbers (where the bounds are defined), 
        find the missing number in O(n) time
    
    Example:        
        arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
        upperBound = 9;
        lowerBound = 1;

        OUTPUT should be 8

} */

let findMissingNumber = (arr, lower, upper) => {
    let missing;
    for(let i = lower ; i<= upper ; i++){
        if(arr.indexOf(i) < 0){
            return i;
        }
    }
    return null;
}
let arr=[2, 5, 1, 4, 9, 6, 3, 7];
console.log(findMissingNumber(arr,1,9))