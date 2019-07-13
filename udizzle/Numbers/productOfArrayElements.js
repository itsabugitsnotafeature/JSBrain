/* 
    Source: 
        https://github.com/kennymkchan/interview-questions-in-javascript
    
    Given an array of integers, 
    return an output array such that output[i] is 
    equal to the product of all the elements in the 
    array other than itself. 
    
    (Solve this in O(n) without division)

    Example: 
        var firstArray = [2, 2, 4, 1];
        var secondArray = [0, 0, 0, 2];
        var thirdArray = [-2, -2, -3, 2];

        productExceptSelf(firstArray); // [8, 8, 4, 16]
        productExceptSelf(secondArray); // [0, 0, 0, 0]
        productExceptSelf(thirdArray); // [12, 12, 8, -12]
*/

let prodArrayWithDivision = (arr) => {
    let allProd = arr.reduce((prev,curr) => {
        return (prev * curr);
    }, 1)
    let prodArr = new Array(arr.length);
    arr.forEach(function(element, index) {
        prodArr[index] = allProd / element;
    }, this);
    return prodArr;
}

let prodArrayWoDivision = (arr) => {
    let prodArr = new Array();
    
    let mul = 1;
    for(let i=0 ; i< arr.length ; i++){
        prodArr.push(mul);
        mul *= arr[i];
    }

    mul = 1;
    for(let i=arr.length-1 ; i >= 0 ; i--){
        prodArr[i] *= mul;
        mul *= arr[i];
    }

    return prodArr;
}

let arr = [2, 2, 4, 1];
console.log( JSON.stringify(prodArrayWoDivision(arr)));
// console.log( JSON.stringify(prodArrayWithDivision(arr)));