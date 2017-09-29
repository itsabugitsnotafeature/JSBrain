/* 

    Given an integer array, find three numbers 
    whose product is MAXIMUM and 
    OUTPUT the maximum product.
        Example 1:
            Input: [1,2,3]
            Output: 6
        Example 2:
            Input: [1,2,3,4]
            Output: 24
    Note:
        The length of the given array will be in range [3,104] 
        All elements are in the range [-1000, 1000].
        Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
 */
let TC = {
    one: [1, 2, 3],
    two: [1, 2, 3, 4],
    three: [-1, -2, -3],
    four: [-4, -3, -2, -1, 60]
};

let maximumProduct_consecutiveNumbers = (arr) => {

    let max_so_far = -Infinity,
        max_ending_here_1 = 1,
        max_ending_here_2 = 1,
        max_ending_here_3 = 1,
        elements_ending_here = 0;

    for (let i = 0; i < arr.length; i++) {
        if (elements_ending_here < 3) {

            max_ending_here_1 *= arr[i];
            max_ending_here_2 *= arr[i + 1];
            max_ending_here_3 *= arr[i + 2];
            elements_ending_here++;
        } else {
            max_ending_here_1 = isNaN(max_ending_here_1) ? -Infinity : max_ending_here_1;
            max_ending_here_2 = isNaN(max_ending_here_2) ? -Infinity : max_ending_here_2;
            max_ending_here_3 = isNaN(max_ending_here_3) ? -Infinity : max_ending_here_3;
            max_so_far = Math.max(max_ending_here_1, max_ending_here_2, max_ending_here_3, max_so_far);

            max_ending_here_1 = 1;
            max_ending_here_2 = 1;
            max_ending_here_3 = 1;
            elements_ending_here = 0;
        }
    }

    max_ending_here_1 = isNaN(max_ending_here_1) ? -Infinity : max_ending_here_1;
    max_ending_here_2 = isNaN(max_ending_here_2) ? -Infinity : max_ending_here_2;
    max_ending_here_3 = isNaN(max_ending_here_3) ? -Infinity : max_ending_here_3;
    max_so_far = Math.max(max_ending_here_1, max_ending_here_2, max_ending_here_3, max_so_far);

    return max_so_far;
};

console.log(maximumProduct(TC.four));
// console.log(maximumProduct(TC.three));
// console.log(maximumProduct(TC.two));
// console.log(maximumProduct(TC.one));