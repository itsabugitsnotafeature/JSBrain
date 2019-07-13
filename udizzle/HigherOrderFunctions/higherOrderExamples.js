

// Q1. 
// Given
const input1 = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' }
];

// Required Result
const output1 = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
];
function question1(input) {
    let sorted = input.reduce((prev, current, index, inputArr) => {

        if (prev.length === 0) {
            let record = {
                skill: current.skill,
                user: [current.user],
                count: 1
            };
            prev.push(record);
            return prev;
        } else {
            let found = false;
            prev.map((eachSkill) => {
                if (eachSkill.skill === current.skill) {
                    eachSkill.user.push(current.user);
                    eachSkill.count += 1;
                    found = true;
                }
            })
            if (!found) {
                let record = {
                    skill: current.skill,
                    user: [current.user],
                    count: 1
                };
                prev.push(record);
            }
            return prev;
        }
    }, [])
    return sorted;
}
let res1 = question1(input1);
// console.log(JSON.stringify(res1, null, 2));


// Q2. 
const input2 = {
    "id": 1,
    "children": [
        {
            "id": 2
        },
        {
            "id": 4
        },
        {
            "id": 3,
            "children": [
                {
                    "id": 5
                },
                {
                    "id": 6
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

function quetsion2(obj) {
    let idArray = [];

    if (input2.id !== undefined) {
        let item = {
            id: obj.id
        }
        idArray.push(item)
    }
    let allKeys = Object.keys(obj);

    allKeys.forEach((key) => {
        if (key === 'id') {
            let item = {
                id: allKeys[key]
            }
            idArray.push(item)
        }
        if (key === 'children') {

            idArray.push(item)
        }

    })

}


// Q3.
const input3 = [
    [56.789, 12.34],
    [123.45, 87.65]
]
const output3 = [
    [
        {
            X: 12.34,
            Y: 56.789
        },
        {
            X: 87.65,
            Y: 123.45
        }
    ]
]

function question3(arr) {
    let cordinate = arr.reduce((prev, curr, index, ipArray) => {
        let coordinate = {
            X: curr[1],
            Y: curr[0],
        }
        prev.push(coordinate);
        return prev;
    }, [])
    return cordinate;
}
let res3 = question3(input3);
// console.log(JSON.stringify(res3, null, 2));



// QQ 4
let input4 = [
    {
        question: "what is your name?",
        answer: "Ben",
        topic: "names"
    },
    {
        question: "what is your name?",
        answer: "Ben",
        topic: "names"
    },
    {
        question: "What is dog's name?",
        answer: "Snugglets",
        topic: "names"
    },
    {
        question: "What is your brother's age?",
        answer: 55,
        topic: "ages"
    }
]
let output4 = [
    {
        topic: "names",
        content: ['Ben', "Snugglets"]
    },
    {
        topic: "ages",
        content: [55]
    }
]
function question4(inp4){
    let sol = inp4.reduce((prev,curr,index,inputArr)=>{
        if(prev.length === 0){
            let obj = {
                topic: curr.topic,
                content: [curr.answer]
            }
            prev.push(obj);
            return prev;
        } else {
            let found = false;
            prev.map((eachTopic)=>{
                if(eachTopic.topic === curr.topic){
                    eachTopic.content.push(curr.answer);
                    found = true;
                }
            });
            if(!found){
                let obj = {
                    topic: curr.topic,
                    content: [curr.answer]
                }
                prev.push(obj);
            }
            return prev;
        }
    },[])
    return sol;
}
let res4 = question4(input4);
console.log(JSON.stringify(res4, null, 2));


