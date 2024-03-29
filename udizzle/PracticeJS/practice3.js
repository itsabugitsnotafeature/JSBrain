





let treeSum = (arr, depth) =>  {
    let sum = 0;
    let length = arr.length;
    if(!depth){
        depth = 1;
    }
    if(length===0){
        return 0;
    }
    
    if(length===1){
        return (arr[0] * depth);
    }

    if(length % 2 !== 0){
        /* 
            Odd Length:
            Meaning, has a root, left and right child 
        */
        let mid = arr[ Math.floor(length/2) ];
        sum = (mid*depth) + treeSum( arr.slice(0, Math.floor(length/2))[0], depth+1) + 
            treeSum(arr.slice(Math.floor(length/2)+1, length)[0] , depth+1);
    } else {
        /* 
            Even Length:
            Meaning, Traverse children unless you encounter an array
        */
        arr.forEach((val)=>{
            if( !isThisAnArray(val) ){
                sum += (val*depth);
            } else {
                let childSum = treeSum(val , depth+1);
                sum += childSum;
            }
        });
    }
    return sum;
}
function isThisAnArray(arr){
    return ( Object.prototype.toString.call(arr).indexOf('Array') > -1 ) ? true : false;
}

// let arr0 = [[[1],4,[2]],5,[6]];
// let arr1 = [[1,1],2,[1,1]];
let arr2 =  [1,[4,[6]]];

// console.log(treeSum(arr0)); // 34
// console.log(treeSum(arr1)); // 10
console.log(treeSum(arr2)); // 27












/* 
Flatten a Tree / Array of Array List
*/


let flattenTree= (arr) => {
    if( arr.length ===0 ){
        return;
    } else {
        let res = [];
        for( let i=0 ; i<arr.length ; i++ ){
            if( isArray(arr[i]) ){
                let flattened = flattenTree(arr[i]);
                while( flattened.length > 0 ){
                    res.push(flattened.shift());
                }
            } else {
                res.push(arr[i]);
            }
        }
        return res;
    }
}

function isArray(arr){
    return ( Object.prototype.toString.call(arr).indexOf('Array') > -1 ) ? true : false;
}

// var arr1 = [ [1,2,3],[ 4,5,[6] ], [[7,8],[9,10,[11,12,13]]] ];
// let arr2 = [[1,1],2,[1,1]];
// var arr3 = [[4,[11,12],5,6],2,1,3,[7,8,[10,9]]];
// let arr4 =  [1,[4,[6]]];
// console.log(flattenTree(arr1));
// console.log(flattenTree(arr2));
// console.log(flattenTree(arr3));
// console.log(flattenTree(arr4));






/* 
    querySelector
    firstChild
    lastChild
    createElement
    cloneNode
*/



var X = function(someValue) {
    this.hello = function() {
       return someValue;
    };
};

X.prototype.test = function(){
     return this.someValue;
};

var x = new X("hi");

// ------ what will the following code return?
// console.log(x.hello());
// console.log(x.test()); 









/* 
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
let lists = [[1,1],2,[1,1]];
let list2 =  [1,[4,[6]]];
// console.log(nestedListSum(lists));
// console.log(nestedListSum(list2));






let sRoot = (num, guess) => {
    if(!guess){
        guess = num/2.0 ;
    }

    let div = num/guess ;
    let newGuess = ((div + guess) /2 );

    if (guess == newGuess){
        return guess;
    }
    else {
        return sRoot(num, newGuess);
    }
}
// sRoot(3)





let hcf = (b, a) => {
    if (a <=0){
        return b;
    }
    return hcf( a, b%a );
}
// console.log(hcf(16,20));
// console.log(hcf(100,90));



let maxProd3Nums = (arr) => {
    let maxProd = -Infinity;
    let leftMax = (new Array(arr.length)).fill(-1);
    let leftMin = (new Array(arr.length)).fill(-1);
    
    let rightMax = (new Array(arr.length)).fill(-1);
    let rightMin = (new Array(arr.length)).fill(-1);

    let max = arr[0];
    let min = arr[0];

    for( let i=1 ; i<arr.length ; i++ ){
        leftMax[i] = max;
        max = Math.max(max, arr[i]);

        leftMin[i] = min;
        min = Math.min(min, arr[i]);
    }

    max = arr[arr.length-1];
    min = arr[arr.length-1];

    for( let i=arr.length-2 ; i>0 ; i-- ){
        rightMax[i] = max;
        max = Math.max(max, arr[i]);

        rightMin[i] = min;
        min = Math.max(min, arr[i]);
    }
    debugger

    for( let i=0 ; i<arr.length ; i++ ){
        let max1 = Math.max( arr[i] * leftMax[i] * rightMax[i], arr[i] * leftMin[i] * rightMin[i] );
        let max2 = Math.max( arr[i] * leftMax[i] * rightMin[i], arr[i] * leftMin[i] * rightMax[i] );
        maxProd = Math.max( maxProd, max1, max2);
    }
    return maxProd;
}
// let arr = [-1, -2, -3, -4, 8, 10];
// console.log(maxProd3Nums(arr));
// console.log(myMaxProduct(arr));




let maxSubArraySum = (arr) => {
    let maxSum = -Infinity;
    let sum = 0;

    for(let i=0 ; i<arr.length ; i++) {
        sum += arr[i];
        maxSum = Math.max(maxSum, sum );
        if(sum<0){
            sum = 0;
        }
    }
    return maxSum;
}
// let t1 = [-64, 78, 56, 10, -8, 26, -18, 47, -31, 75, 89, 13, 48, -19, -69, 36, -39, 55, -5, -4, -15, -37, -27, -8, -5, 35, -51, 83, 21, -47, 46, 33, -91, -21, -57, 0, 81, 1, -75, -50, -23, -86, 39, -98, -29, 69, 38, 32, 24, -90, -95, 86, -27, -23, -22, 44, -88, 3, 27, 9, 55, -50, -80, 40, 5, -61, -82, -14, 40, -58, 35, 93, -68, -26, 94, 3, -79, 9, -88, 21, 19, -84, 7, 91, -8, 84, 12, -19, -13, -83, 66, -80, -34, 62, 59, 48, -98, 53, -66, 18, 94, 46, 11, -73, 96, -18, 6, -83, 91, 17, 38, 10, 9, -78, -22, 77, 83, 89, -42, -30, -94, -98, -34, -51, 63, -97, 96, 64, 55, -93, -41, 27, 52, 69, 53, 26, -71, -64, 42, -80, 52, -43, 6, -62, -21, 83, -85, -38, 49, -50, 8, 55, -72, 74, 80, 90, 53, 53, 32, -15, 36, 90, -88, -34, 37, 41, 91, 65, 76, 33, 61, 5, 90, -33, 42, -54, -73, 34, -16, 75, 83, 91, 7, -89, 42, -36, 77, -5, -83, 9, 80, 53, -23, 68, -81, 90, 10, -90, 55, -14, 19, -7, 91, -14, 59, 33, 31, 62, -33, -85, 37, -73, 83, -78, -86, 25, -15, 91, 97, 2, -23, 54, -68, 53, 22, -73, 43, -68, -87, -25, 18, 31, 67, -14, 94, 3, -81, 25, -35, -37, 17, 79, -34, -23, -99, -43, -98, -38, -52, 75, 63, 1, 29, 71, -68, -71, 74, 51, -40, 86, -73, 54, -5, 70, -60, -11, -49, -64, 90, -8, -25, -16, -52, 40, 60, -75, 96, 39, -13, -79, 14, -73, 22, -79, 75, 30, -51, 49, -19, -15, 36, -16, -60, -69, -68, -21, -4, -18, -9, -14, 50, 65, 70, 75, -17, 30, 99, -44, -31, -14, -46, 60, -10, 52, 80, -35, -18, -94, -86, 62, -10, 49, -53, 6, 56, -45, 62, -48, 36, -47, 15, -37, -81, -15, -62, -22, 91, -85, 33, -62, -23, 86, 97, 66, 15, 54, -69, 96, 36, -55, 36, -97, 70, 82, 9, 4, -63, -29, 32, 49, 23, -53, 88, 18, 8, -96, 72, -23, -82, 6, 14, -6, -31, -12, -39, 61, -58, -32, 57, 77, 12, -7, 56, -40, -48, -35, 40, -35, 12, -28, 90, -87, -4, 79, 30, 80, 82, -20, -43, 76, 62, 70, -30, -92, -42, 7, 68, -24, 75, 26, -70, -36, 95, 86, 0, -52, -49, -60, 12, 63, -11, -20, 75, 84, -41, -18, 41, -82, 61, 98, 70, 0, 45, -83, 8, -96, 24, -24, -44, -24, -98, -14, 39, 97, -51, -60, -78, -24, -44, 10, -84, 44, 89, 67, 5, -75, -73, -53, -81, 64, -55, 88, -35, 89, -94, 72, 69, 29, -52, -97, 81, -73, -35, 20, -99, 13, 36, 98, 65, 69, 8, 81, 13, -25, 25, 95, -1, 51, -58, -5, 16, -37, -17, 57, -71, -35, 29, 75, 70, 53, 77, 51, 79, -58, -51, 56, 31, 84, 54, -27, 30, -37, -46, -56, 14, 56, -84, 89, 7, -43, -16, 99, 19, 67, 56, 24, -68, -38, -1, -97, -84, -24, 53, 71, -6, -98, 28, -98, 63, -18, -25, -7, 21, 5, 13, -88, -39, 28, -98, 68, 61, -15, 44, -43, -71, 1, 81, -39, 62, -20, -60, 54, 33, 69, 26, -96, 48, -69, -94, 11, -11, -20, 80, 87, 61, -29, 98, -77, 75, 99, 67, 37, -38, 11, 93, -10, 88, 51, 27, 28, -68, 66, -41, 41, 36, 84, 44, -16, 91, 49, 71, -19, -94, 28, -32, 44, 75, -57, 66, 51, -80, 10, -35, -19, 97, -65, 70, 63, 86, -2, -9, 94, -59, 26, 35, 76, 11, -21, -63, -21, -94, 84, 59, 87, 13, -96, 31, -35, -53, -26, -84, -34, 60, -20, 23, 58, 15, -7, 21, -22, 67, 88, -28, -91, 14, -93, 61, -98, -38, 75, -19, -56, 59, -83, -91, -51, -79, 16, 14, -56, 90, 6, -14, 27, 63, -91, -15, -22, -22, 82, 32, -54, 47, -96, -69, -61, 86, 91, -60, -75, 43, -3, -31, 3, -9, -23, 28, 11, 69, -81, 31, 59, 25, -83, -36, -12, -75, 48, 42, -21, 8, -26, 24, -68, -23, 31, -30, -60, 0, -13, -36, -57, 60, 32, 22, -49, 85, -49, 38, 55, -54, -31, -9, 70, -38, 54, -65, -37, -20, 76, 42, 64, -73, -57, 95, -20, 74, -57, 19, -49, 29, 83, -7, -11, -8, -84, 40, -45, -57, -45, 86, -12, 24, -46, -64, 62, -91, -30, -74, -35, -76, 44, -94, -73, 86, 77, 7, 37, -80, -74, 87, 48, 85, -19, -85, -45, -27, 31, 9, -8, 85, -28, 79, -14, 25, 91, -51, 10, -61, -49, 74, -38, 94, 56, -12, 57, 34, 71, -5, 53, 74, -18, -21, 59, 39, -30, 90, -88, -99, -24, 3, 62, 47, -40, -51, -27, -49, -26, 82, -11, 1, 34, 27, -5, -10, 92, -48, -99, 63, 23, 31, 14, -94, -90, -49, 44, -44, -59, 33, -44, 17, -64, -82, -36, -28, -57, 13, 0, -7, -4, 88, 70, -93, -7, -35, -4, -15, -6, -26, -75, 93, -95, 39, 98, 90, 66, 20, -54, -93, -47, -22, 0, -35, -28, 41, 14, -8, -46, -86, 84, 26, -98, 55, 32, -29, 96, -94, 32, -33, -21, 57, -39, -17, -27, -64, -50, -61, 55, -28, -78, 84, 49, 22, -73, -79, -37, 40, 12, -7, 53, -26, -80, 31, -94, 51, -97, -98, 56, 34, -54, -88, -32, -17, -29, 17, 18, 20, 32, -49, 91, 54, -65, 40, -47, -39, 38, -8, -99, -73, 84, 30, 0, -96, -38, 5, 32, -36, -16, -35, 74, 29, -23, -80, -88, 47, 36, 29, -32, -54, 79, -64, 76, 91, 53, -71, -71, -9, -3, -93, 17, -19, 36, 94, -38, 97, -1, 70, -62, 82, -65, -87, 11, 11, -68, -1, -41, 44, -71, 3, 89];
// let t2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let t3 = [-1, -1, -1, -1, -1, -5, -4];
// console.log(maxSubArraySum(t1));
// console.log(my_maxSubArraySum(t1));





let mergeKSortedList = (arr) => {
    debugger;
    let result = [];
    let crossSections = [];
    let maxLength = 0;

    for(let i=0 ; i< arr.length ; i++){
        maxLength = Math.max(maxLength, arr[i].length);
    }

    for(let i=0 ; i< maxLength ; i++){
        let thisCs = [];
        for(let i=0 ; i< arr.length ; i++){
            if(arr[i][0] !== undefined ){
                thisCs.push(arr[i].shift());
            }
        }
        crossSections.push(thisCs);
    }
    debugger;

    crossSections.forEach((cs) => {
        result = insertSortedCs(result, cs);
    });
    return result;
}

function insertSortedCs (target, cs) {
    if(target.length === 0){
        target.push(cs.shift());
    }
    cs.forEach((num)=>{
        let targetIndex = 0;
        while(num > target[targetIndex]) {
            targetIndex++;
        }
        target = [ ...target.slice(0,targetIndex) , num, ...target.slice(targetIndex, target.length) ]
    })
    return target;
}

let arr = [
    [1,2,3,4,5],
    [3,3,8],
    [-1, 0, 1, 2],
    [99, 100],
    [76]
];
// console.log(mergeKSortedList(arr));


let arrayProduct = (arr) => {
    let prod = new Array();
    let mul = 1;

    arr.forEach((num) => {
        prod.push(mul);
        mul *= num;
    });

    mul = 1;
    for(let i=arr.length-1 ; i>0 ; i--){
        prod[i] *= mul;
        mul *= arr[i];
    }
    return prod;
}
// console.log(arrayProduct([1,2,3,4,5]));



let quicksort = (arr, left, right) => {
    if ( left === undefined) {
        left = 0;
        right = arr.length - 1;
    }
    if(left < right) {
        let pivotIndex = right;
        let partitionIndex = partition(arr, left, right, pivotIndex);
        quicksort(arr, left, partitionIndex-1);
        quicksort(arr, partitionIndex+1, right);
    }
    return arr;
}
function partition(arr, left, right, pivotIndex){
    debugger
    let pivotValue = arr[pivotIndex];
    let partitionIndex = left;

    for(let i=left ; i<=right ; i++){
        if ( arr[i] < pivotValue){
            // swap val I witl partion index
            arr[partitionIndex] = [ arr[i] , arr[i] = arr[partitionIndex] ][0];
            partitionIndex++;
        }
    }
    debugger
    arr[partitionIndex] = [ arr[right] , arr[right] = arr[partitionIndex] ][0];
    return partitionIndex;
}
// console.log(quicksort([8,6,4,2,1,3,5,7]));



let longestPalendrome = (str) => {
    debugger
    str = [...str];
    let longestPalen = [];
    let start = 1;

    while (start < str.length) {
        let offset = 1;
        let thisPalen = [];
        thisPalen.push(str[start]);

        while( (start+offset < str.length) && (start-offset > 0) && (str[start-offset] === str[start+offset]) ){
            thisPalen.push(str[start + offset]);
            thisPalen.unshift(str[start + offset]);
            longestPalen = longestPalen.length > thisPalen.length ? longestPalen : thisPalen;
            offset++;
        }

        start += offset;
    }
    return longestPalen.join('');
}
// console.log(longestPalendrome('aabbbaa'));
let testIp = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
// console.log(longestPalendrome(testIp));


let longestNonRepeatingCharString = (str) => {
    debugger
    let maxSeq = [];
    let res = [];
    str = [...str];

    str.forEach((char)=> {
        if( res.indexOf(char) === -1 ){
            res.push(char);
        } else if( res.indexOf(char) === 0 && res.length === 1 ) {
            
        } else {
            maxSeq = (maxSeq.length > res.length) ? maxSeq : res;
            let index = res.indexOf(char);
            res = res.slice(index+1,res.length);
        }
    });
    return maxSeq.join('');
}
// console.log(longestNonRepeatingCharString('aaaaaaaabcdefikjllllnkbvebevgiou'));



let makeanagram = (str1, str2) => {

    str1 = [...str1];
    str2 = [...str2];
    let commonChars = [];
    let delChars = [];

    str1.forEach((char)=>{
        if(str2.indexOf(char)>-1){
            commonChars.push(char);
            str2.splice( str2.indexOf(char), 1 );
        } else {
            delChars.push(char);
        }
    });
    
    delChars = delChars.concat(str2);
    return delChars.length;
}
// console.log(makeanagram('abcdeg', 'ijdef'));


let longestParenthesie = (str) => {
    let stack = new Array();
    let maxLength = 0;

    str = [...str];
    str.forEach((element, index) => {
        if(element === '('){
            stack.push(element);
        } else {
            let currLen = index - stack.length;
            maxLength = (currLen > maxLength) ? currLen : maxLength;
            stack.pop();
        }
    });
    return maxLength;
}

// let str = "(((((((((())))))))))";
// let str = "(((((()()()()())";
// console.log(longestParenthesie(str));
// console.log(sharamCopied(str));
