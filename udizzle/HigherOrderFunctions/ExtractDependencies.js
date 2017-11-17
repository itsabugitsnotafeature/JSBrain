/* 
    #PracticeThis
    Assume there is an array of available classes: 
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

let findDependencies = (arr, root, depMap, depArray) => {
    
    if(!depMap) {
        depMap = new Map();
        arr.forEach(element => {
            if(!depMap.has(element.id)){
                depMap.set(element.id, element.dependencies);
            }
        });
    }

    if(!depArray) {
        depArray = new Array();
    }

    if(depMap.has(root)){
        let children = depMap.get(root);
        if(children.length === 0){
            return depArray;
        } else {
            children.forEach((child)=>{
                findDependencies(arr, child, depMap, depArray);
                if(depArray.indexOf(child) === -1){
                    depArray.push(child);
                }
            });
        }
    }
    return depArray;
}

let findDependencies_asObject = (arr, root, depMap, depSet) => {
    
    if(!depMap) {
        depMap = new Map();
        arr.forEach(element => {
            if(!depMap.has(element.id)){
                depMap.set(element.id, element.dependencies);
            }
        });
    }

    if(!depSet) {
        depSet = new Set();
    }

    if(depMap.has(root)){
        let children = depMap.get(root);
        if(children.length === 0){
            return;
        } else {
            children.forEach((child)=>{
                findDependencies(arr, child, depMap, depSet);
                depSet.add(child);
            });
        }
    }
    return depSet;
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

console.log(findDependencies(arr, 'html'));