/* 
    // TODO: Complete this Exercise

    Given an object describing folder structure, 
    print it on the console with the correct indentation. 

    Sample Input: 
        {
            folders : [
                {
                    label: "2015",
                    parent: "'Travel'",
                    id: 1
                },
                {
                    label: "2016",
                    parent: "Travel",
                    id: 2
                }.
                ...
            ]
        }

    Sample Output:
    
        Travel
            2015
                India
                    Pics
                    Docs
                Thailand
            2016
                Mexico
                USA
                Brazil
            2018
                Venezuela
                    Trip-Advisor
                    PICS
                        Indoors
                        OutDoors
                Budhapest
                Italy

*/



let printWithIndent = (input) => {
    let parentMap = new Map();
    let root = null;

    input.folders.forEach(child => {
        if( child.parent === null ) {
            root = child ;
        } else {
            if(parentMap.has(child.parent)){
                let children = parentMap.get(child.parent);
                children.push(child);
                parentMap.set(child.parent, children);
            } else {
                children = new Array();
                children.push(child);
                parentMap.set(child.parent, children);
            }
        }
    });

    debugger;

    (function recurseAndPrint(node, depth){
        
        if(depth === undefined){
            depth = 0;
        }

        if(depth === 100){
            return;
        }

        // console.log("LABEL: " + node.label);
        // console.log("depth: " + depth);

        
        let allChildren = parentMap.get(node.label);

        for(let i=0 ; i<children.length ; i++){
            recurseAndPrint(children[i], depth+1);
        }

        consolePrintWithIndent(node, depth);
    })(root);

}

function consolePrintWithIndent(child, depth) {
    console.log(JSON.stringify(child.label, null, depth));
}


let input = {
    folders: [
        {
            label: "2015",
            parent: "Travel",
            id: 1
        },
        {
            label: "2016",
            parent: "Travel",
            id: 2
        },
        {
            label: "2017",
            parent: "Travel",
            id: 3
        },
        {
            label: "Travel",
            parent: null,
            id: 0
        },
        {
            label: "India",
            parent: "2015",
            id: 4
        },
        {
            label: "Thailand",
            parent: "2015",
            id: 5
        },
        {
            label: "Mexico",
            parent: "2016",
            id: 6
        },
        {
            label: "USA",
            parent: "2016",
            id: 7
        },
        {
            label: "Brazil",
            parent: "2016",
            id: 8
        },
        {
            label: "Venezuela",
            parent: "2018",
            id: 9
        },
        {
            label: "Budhapest",
            parent: "2018",
            id: 10
        },
        {
            label: "Italy",
            parent: "2018",
            id: 11
        },
        {
            label: "Pics",
            parent: "India",
            id: 12
        },
        {
            label: "Docs",
            parent: "India",
            id: 13
        },
        {
            label: "Trip-Advisor",
            parent: "Venezuela",
            id: 14
        },
        {
            label: "PICS",
            parent: "Venezuela",
            id: 15
        },
        {
            label: "Indoors",
            parent: "PICS",
            id: 16
        },
        {
            label: "OutDoors",
            parent: "PICS",
            id: 17
        }
    ]
};

printWithIndent(input);