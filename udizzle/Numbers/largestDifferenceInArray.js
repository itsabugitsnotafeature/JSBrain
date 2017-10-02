/* 
    Given an array of integers, 
        find the largest difference between two elements 
        such that the element of lesser value 
        must come before the greater element

    [7, 8, 4, 9, 9, 15, 3, 1, 10]
    [-, 1, x, 2, 2,  8, x, x, 3]
    [-, -, x, 2, 2,  8, x, x, 3]
    Would return `11` 
        based on the difference between `4` and `15`
    
    Notice: It is not `14` from the difference between `15` and `1` 
    because 15 comes before 1.
*/

let greatestDiff = (arr) => {
    let maxDiff = -Infinity,
        currMinNum = arr[0];

    for(let i=1 ; i< arr.length ; i++){
        if( arr[i] > currMinNum && (arr[i] - currMinNum > maxDiff) ){
            maxDiff = arr[i] - currMinNum;
        } else if ( arr[i] <= currMinNum ) {
            currMinNum = arr[i];
        }
    }
    return maxDiff;
}

let arr = [7, 8, 4, 9, 9, 15, 3, 1, 10];
console.log(greatestDiff(arr));
