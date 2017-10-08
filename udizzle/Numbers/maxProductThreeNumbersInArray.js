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

let maxProduct_prototype = (arr) => {
    // if size is less than 3, no triplet exists
    if (arr.length < 3) {
        return -1;
    }


    // Construct four auxiliary vectors
    // of size n and initailize them by -1
    let leftMin = [],
        rightMin = [],
        leftMax = [],
        rightMax = [];

    // will contain max product
    let max_product = -Infinity;

    // to store maximum element on left of array
    let max_num = arr[0];

    // to store minimum element on left of array
    let min_num = arr[0];

    // leftMax[i] will contain max element
    // on left of arr[i] excluding arr[i].
    // leftMin[i] will contain min element
    // on left of arr[i] excluding arr[i].
    for (let i = 1; i < arr.length; i++) {
        leftMax[i] = max_num;

        if (arr[i] > max_num) {
            max_num = arr[i];
        }

        leftMin[i] = min_num;

        if (arr[i] < min_num) {
            min_num = arr[i];
        }
    }

    // reset max_num to store maximum element on
    // right of array
    max_num = arr[arr.length - 1];

    // reset min_num to store minimum element on
    // right of array
    min_num = arr[arr.length - 1];

    // rightMax[i] will contain max element
    // on right of arr[i] excluding arr[i].
    // rightMin[i] will contain min element
    // on right of arr[i] excluding arr[i].
    for (let j = arr.length - 2; j >= 0; j--) {
        rightMax[j] = max_num;

        if (arr[j] > max_num) {
            max_num = arr[j];
        }

        rightMin[j] = min_num;

        if (arr[j] < min_num) {
            min_num = arr[j];
        }
    }

    // For all array indexes i except first and
    // last, compute maximum of arr[i]*x*y where
    // x can be leftMax[i] or leftMin[i] and
    // y can be rightMax[i] or rightMin[i].
    for (let i = 1; i < arr.length - 1; i++) {
        let max1 = Math.max(arr[i] * leftMax[i] * rightMax[i],
            arr[i] * leftMin[i] * rightMin[i]);

        let max2 = Math.max(arr[i] * leftMax[i] * rightMin[i],
            arr[i] * leftMin[i] * rightMax[i]);

        max_product = Math.max(max_product, Math.max(max1, max2));
    }

    return max_product;
}

let myMaxProduct = (arr) => {
    if(arr.length < 3) {
        return -1;
    } else if(arr.length === 3) {
        return arr.reduce((prev,next)=>{
            return prev * next;
        },1)
    }

    let maxProd = -Infinity;
    
    let leftMax = (new Array(arr.length)).fill(-1),
        leftMin = (new Array(arr.length)).fill(-1),
        rightMax = (new Array(arr.length)).fill(-1),
        rightMin = (new Array(arr.length)).fill(-1);
    
    let max_num = arr[0],
        min_num = arr[0];

    for(let i=1 ; i <arr.length ; i++ ) {
        leftMax[i] = max_num;
        if(arr[i] > max_num){
            max_num = arr[i];
        }

        leftMin[i] = min_num;
        if(arr[i] < min_num){
            min_num = arr[i];
        }
    }

    max_num = arr[arr.length - 1];
    min_num = arr[arr.length - 1];

    for(let i=arr.length-2 ; i>=0 ; i--){
        rightMax[i] = max_num;
        if(arr[i] > max_num){
            max_num = arr[i];
        }

        rightMin[i] = min_num;
        if(arr[i] < min_num){
            min_num = arr[i];
        }
    }

    for(let i=0 ; i<arr.length ; i++){
        let max1 = Math.max( arr[i] * leftMax[i] * rightMax[i],
                             arr[i] * leftMin[i] * rightMin[i] );

        let max2 = Math.max( arr[i] * leftMax[i] * rightMin[i],
                                arr[i] * leftMin[i] * rightMax[i] );

        maxProd = Math.max(maxProd, max1, max2)
    }
    return maxProd;
}

console.log(maxProduct_prototype([-1,-2,-3]));
console.log(maxProduct_prototype(TC.four));
console.log(maxProduct_prototype(TC.three));
console.log(maxProduct_prototype(TC.two));
console.log(maxProduct_prototype(TC.one));