/* 
    Source: 
        https://github.com/kennymkchan/interview-questions-in-javascript

    Removing duplicates of an array and 
        returning an array of only unique elements
    
    Example: 
        Input: [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
        Output: [1, 2, 3, 5, 9, 8] 
*/

let removeDuplicatesEs6 = (arr) => {
    return Array.from(new Set(arr));
}

let removeDuplicatesVanilla = (arr) => {
    let uniqueArr = new Array();
    for(let i=0 ; i<arr.length ; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

var a1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8],
    a1_sol = [1, 2, 3, 5, 9, 8];

console.log(removeDuplicatesVanilla(a1));
console.log(removeDuplicatesEs6(a1));