'use strict'
// DEC 5

/* 
    Higher order Functions  @DONE
    Sorting   @DONE
    Searching 
    DataStructures in JS
    Numbers 
    Characters 
*/





// Q2. 
const input2 = {
    id: 1,
    children: [
        {
            id: 2
        },
        {
            id: 4
        },
        {
            id: 3,
            children: [
                {
                    id: 5
                },
                {
                    id: 6
                }
            ]
        }
    ]
}
const output2 = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 5 },
    { id: 6 },
    { id: 4 }
];
let qFunc2 = (obj) => {
    let result = [];

    (function recurseAndAdd(child){
        let item = {id: child.id};
        result.push(item);
        
        if(child.children){
            let children = child.children;
            for(let i=0 ; i<children.length ; i++){
                recurseAndAdd(children[i]);
            }
        }
    })(obj);

    return result;
}
console.log(qFunc2(input2));











// Search Dependencies
/* 
    [
        {
            id: 'fundamental', 
            dependencies: []
        },
        {
            id: 'oo',
            dependencies: ['fundamental']
        },
        {
            id: 'ds',
            dependencies: ['fundamental']
        },
        {
            id: 'javascript',
            dependencies: ['oo', 'ds']
        },
        {
            id: 'html',
            dependencies: ['javascript', 'oo']
        }
    ]
    write a method to find all dependencies for a certain class:
    e.g: 
    findDependencies(courses, ‘html’) => ['fundamental', 'oo','ds', 'javascript'] 

  
*/
let findDependencies = (arr, dep) => {
    let depMap = new Map();
    let result = [];

    arr.forEach((depObj)=>{
        if(!depMap.has(depObj.id)){
            depMap.set(depObj.id, depObj.dependencies);
        } else {
            let currDeps = depMap.get(depObj.id);
            currDeps = currDeps.concat(depObj.dependencies);
            depMap.set(depObj.id, currDeps);
        }
    });
    
    (function recurseAndAdd(currDep){
        if(!currDep || (result.indexOf(currDep) > -1)){
            return;
        } else {
            let childDeps = depMap.get(currDep);
            
            for(let i = 0 ; i < childDeps.length ; i++){
                recurseAndAdd(childDeps[i]);
            }
            result.push(currDep);
        }
    })(dep);
    return result.slice(0, result.length - 1);
}
let arr = [
    {
        id: 'fundamental', 
        dependencies: []
    },
    {
        id: 'oo',
        dependencies: ['fundamental']
    },
    {
        id: 'ds',
        dependencies: ['fundamental']
    },
    {
        id: 'javascript',
        dependencies: ['oo', 'ds']
    },
    {
        id: 'html',
        dependencies: ['javascript', 'oo']
    }
];
// console.log(findDependencies(arr, 'html'));
// console.log(findDependencies(arr, 'javascript'));
// console.log(findDependencies(arr, 'ds'));
// console.log(findDependencies(arr, 'oo'));
// console.log(findDependencies(arr, 'fundamental'));






// Given
const endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

// Result
const this_result = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
];

let groupUserBySkill = (endorsements) => {
    return endorsements.reduce((prev, curr, index, arr) => {
        if(prev.length ===0) {
            let item = {};
            item.skill = curr.skill;
            item.user = [curr.user];
            item.count = item.user.length;
            prev.push(item);
        } else {
            let found = false;
            prev.map((eachSkill)=> {
                if(eachSkill.skill === curr.skill){
                    eachSkill.user.push(curr.user);
                    eachSkill.count = eachSkill.user.length;
                    found = true;
                }
            })
            if(!found){
                let item = {};
                item.skill = curr.skill;
                item.user = [curr.user];
                item.count = item.user.length;
                prev.push(item);
            }
        }
        return prev;
    }, []);
}
// console.log( JSON.stringify(groupUserBySkill(endorsements), null, 2) );










// quick sort
let quickSort = (arr, left , right) => {
    if(left === undefined){
        left = 0;
        right = arr.length-1;
    }

    if(left<right){
        let pivotIndex = right;
        let partitionIndex = partion(arr, left, right, pivotIndex);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    } else {
        return arr;
    }
}

let partion = (arr, left, right, pivotIndex) => {
    let pivotValue = arr[pivotIndex];
    let partitionIndex = left;
    for(let i=left ; i<right ; i++){
        if(arr[i] <= pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, pivotIndex);
    return partitionIndex;
}

function swap(arr, src, dest) {
    arr[dest] = [arr[src] , arr[src] = arr[dest]][0];
}

// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log(tc);
// quickSort(tc)
// console.log(tc);





// merge sort
let mergeSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    arr = merge( mergeSort( arr.slice(0, mid)), mergeSort(arr.slice(mid, arr.length)) );
    return arr;
}
let merge = (lar, rar) => {
    let result = [];

    while( (lar.length > 0) && (rar.length > 0) ) {
        if( lar[0] > rar[0] ) {
            result.push(rar.shift());
        } else if( lar[0] < rar[0] ) {
            result.push(lar.shift());
        } else if( lar[0] === rar[0] ) {
            result.push(lar.shift());
            result.push(rar.shift());
        } 
    }

    return (lar.length > 0) ? result.concat(lar) : result.concat(rar) ;
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log(mergeSort(tc));
// console.log(tc);






// insertion sort
let insertionSort = (arr) => {
    let result = [];
    arr.forEach(val => {
        if(result.length === 0){
            result.push(val);
        } else {
            let index = 0;
            while(index < result.length && result[index] <= val ){
                index++;
            }
            result = result.slice(0, index).concat(val).concat(result.slice(index, result.length))
        }
    });
    return result;
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// console.log(insertionSort(tc));
// console.log(tc);






// selection sort
let selectionSort = (arr) => {
    for(let i=0 ; i< arr.length ; i++){
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[j] < arr[i]){
                swap(arr, i, j);
            }
        }
    }
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// selectionSort(tc)
// console.log(tc);







function swap1(arr, src, dest) {
    arr[dest] = [arr[src] , arr[src] = arr[dest]][0];
}
// bubble sort
let bubbleSort = (arr) => {
    for(let i = arr.length-1 ; i > 0  ; i--){
        let j = 0;
        while( j < i ){
            if( arr[j] > arr[j+1] ){
                swap1(arr, j+1, j);
            }
            j++;
        }
    }
}
// let tc = [ 7, 9, 4, 10, 10, 14, 4, 11, 0, 11, 1, 17, 2, 4, 13 ];
// bubbleSort(tc);
// console.log(tc);
