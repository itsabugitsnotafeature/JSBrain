/* 
    Source:
        https://github.com/kennymkchan/interview-questions-in-javascript
    
    Find the intersection of two arrays. 
    An intersection would be the common elements that exists 
    within both arrays. In this case, 
    these elements should be unique!
        
    var firstArray = [2, 2, 4, 1];
    var secondArray = [1, 2, 0, 2];
    intersection(firstArray, secondArray); // [2, 1]
*/


let intersection = (arr1, arr2) => {
    let common = new Set();
    arr1.forEach(function(element) {
        if(arr2.indexOf(element) > -1){
            common.add(element)
        }
    });
    return Array.from(common);
}

let firstArray = [2, 2, 4, 1];
let secondArray = [1, 2, 0, 2];
console.log(JSON.stringify(intersection(firstArray, secondArray)));