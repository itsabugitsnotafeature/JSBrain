/*
    #PracticeThis
    Flatten an array of arrays into one array
        Example: 
            var arr = [ [1,2,3],[ 4,5,[6] ], [[7,8],[9,10,[11,12,13]]] ];
        Output: 
        [ 1,2,3,4,5,6,7,8,9,10,11,12,13 ];
*/

let flatten = (arr) => {
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){

        if( Object.prototype.toString.call(arr[i]).indexOf('Array') > -1 ) {
            arr[i] = recurse(arr[i]);
            while(arr[i].length > 0){
                res.push(arr[i].shift());
            }
        } else {
            res.push(arr[i]);
        }

        function recurse(arr){
            let thisRes = [];
            for(let i = 0 ; i < arr.length ; i++){
                if( Object.prototype.toString.call(arr[i]).indexOf('Array') > -1 ) {
                    arr[i] = recurse(arr[i]);
                    while(arr[i].length > 0){
                        thisRes.push(arr[i].shift());
                    }
                } else {
                    thisRes.push(arr[i]);   
                }
            }
            return thisRes;
        }
    }
    return res;
};
var arr1 = [ [1,2,3],[ 4,5,[6] ], [[7,8],[9,10,[11,12,13]]] ];
let lists = [[1,1],2,[1,1]];
var list1 = [[4,[11,12],5,6],2,1,3,[7,8,[10,9]]];
let list2 =  [1,[4,[6]]];
// console.log( flatten(arr1) );
// console.log( flatten(lists) );
// console.log( flatten(list1) );
// console.log( flatten(list2) );


let flattenOne = (arr) => {
    if( arr.length === 0){
        return 0;
    }
    if(isArray(arr)){
        let res = [];
        for(let i=0; i<arr.length ; i++){
            
            if(!isArray(arr[i])){
                res.push(arr[i]);
            } else {
                arr[i] = flattenOne(arr[i]);
                while(arr[i].length > 0){
                    res.push(arr[i].shift());
                }
            }
        }
        return res;
    }
}
function isArray(obj) {
    return ( Object.prototype.toString.call(obj).indexOf('Array') > -1 ) ? true : false;
}
debugger
console.log( flattenOne(arr1) );
console.log( flattenOne(lists) );
console.log( flattenOne(list1) );
console.log( flattenOne(list2) );







/*
    #PracticeThis
    [[1,1],2,[1,1]],
    return 10. 
    (four 1's at depth 2, one 2 at depth 1)
*/

let nestedListSum = (list, depth) => {
    debugger
    if(list.length === 0){
        return 0;
    }
    if( depth === undefined ){
        depth = 1;
    }

    if(list.length % 2 !== 0){
        // If list is odd numbered : Middle one is root
        let mid = Math.ceil(list.length / 2) - 1;
        let kind = Object.prototype.toString.call(list[mid]);
        if( kind.indexOf('Array') > -1 ){
            // Array node
            let thisSum = 0;
            for( let i=0 ; i<list[mid].length ; i++  ){
                thisSum += (list[mid][i] * depth);
            }
            
            let leftSum = nestedListSum(list.slice(0, mid), depth + 1);
            let rightSum = nestedListSum(list.slice(mid+1, list.length), depth + 1);
            return ( thisSum + leftSum + rightSum);
        }
        else {
            // Single node
            let thisSum = list[mid] * depth;
            let leftSum = nestedListSum(list.slice(0, mid), depth + 1);
            let rightSum = nestedListSum(list.slice(mid+1, list.length), depth + 1);

            return ( thisSum + leftSum + rightSum);
        }
    } else {
        // If list is EVEN numbered : Middle one is root
        // 0th is root
        // rest are children
        
        let fistElement = list[0];
        let kind = Object.prototype.toString.call(fistElement);
        if( kind.indexOf('Array') > -1 ){
            // Array node
            let thisSum = 0;
            for( let i=0 ; i<list.length ; i++  ){
                thisSum += (list[i] * depth);
            }
            let childSum = nestedListSum(list.slice(1, list.length)[0], depth + 1);
            return ( thisSum + childSum);
        } else {
            let thisSum = list[0] * depth;
            let childSum = nestedListSum(list.slice(1, list.length)[0], depth + 1);
            return ( thisSum + childSum);
        }
    }
}
// let lists = [[1,1],2,[1,1]];
// let list2 =  [1,[4,[6]]];
// console.log(nestedListSum(lists));
// console.log(nestedListSum(list2));


