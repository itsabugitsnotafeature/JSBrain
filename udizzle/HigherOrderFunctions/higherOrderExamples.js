

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

// Q2. 
const input2 = {
    id: 1,
    children: [
        { id: 2 },
        {
            id: 3,
            children: [{ id: 5 }, { id: 6 }]
        },
        { id: 4 }
    ]
}
const output2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 5 }, { id: 6 }, { id: 4 }];


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

// Q.
var array = [
    [
        ['firstName', 'Joe'],
        ['lastName', 'Blow'],
        ['age', 42],
        ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
        ['role', 'manager']
    ]
]

obj = {
    firstName: 'Joe',
    lastname: '...'
}


// QQ
[
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

[
    {
        topic: "names",
        content: [...array of objects based on "names"...]
    },
    {
        topic: "ages",
        content: [...array of objects based on "ages"...]
    }
]
/* 
Use the following : 
shift 
unshift 
push 
pop
slice 
splice 
join 

copyWithin
fill
pop
push
reverse
shift
sort
splice
unshift


How to Detect array mutation 
https://stackoverflow.com/questions/36386732/detect-array-mutation









 */