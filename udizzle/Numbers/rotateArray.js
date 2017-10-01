/* 
    A left rotation operation on an array of size  shifts each of the array's 
    elements  unit to the left. For example, if left rotations are 
    performed on array , then the array would become .
    Given an array of  integers and a number, , perform  
    left rotations on the array. Then print the updated 
    array as a single line of space-separated integers.

    Input Format
        The first line contains two space-separated integers 
            denoting the respective values of  (the number of integers) and  
            (the number of left rotations you must perform). 
        The second line contains  space-separated integers describing 
            the respective elements of the array's initial state.

    Constraints
    Output Format
        Print a single line of  space-separated integers denoting the final 
        state of the array after performing  left rotations.

    Sample Input
        5 4
        1 2 3 4 5
    Sample Output
        5 1 2 3 4
 */

// Using Internal API's
let rotateArr = (arr, times, reverse) => {
    if (reverse) {
        for (let i = 0; i < times; i++) {
            arr.unshift(arr.pop())
        }
    }
    else {

        for (let i = 0; i < times; i++) {
            arr.push(arr.shift());
        }
    }
    return arr;
}

let rotateArrVanilla = (arr, times, reverse) => {
    let len = arr.length;
    return arr.slice(times).concat(arr.slice(0,times))
}

let ip = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(JSON.stringify(rotateArr(ip, 5)));
ip = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(JSON.stringify(rotateArrVanilla(ip, 5)));


