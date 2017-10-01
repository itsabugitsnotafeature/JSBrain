let maxProduct = (arr) => {
    debugger
    let max_product = 1,
        min_product = 1,
        max_so_far = -Infinity;
    
    for(let i=0 ; i<arr.length ; i++) {
        if( arr[i] === 0 ) {
            // Number is ZERO
            max_product = 1;
            min_product = 1;

        } else if ( arr[i] > 0 ) {
            // Number is Positive
            max_product *= arr[i];
            min_product = Math.min(min_product * arr[i], min_product);
        } else {
            // Number is Negative
            let temp = max_product;
            max_product = Math.max(1, min_product * arr[i]);
            min_product = temp * arr[i];
        }
        max_so_far = (max_product > max_so_far) ? max_product : max_so_far;
    }
    return max_so_far;
}

console.log(maxProduct([2, -5, -2, -4, 3]))