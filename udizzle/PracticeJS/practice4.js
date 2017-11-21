/* 
    PROGRESSION: 

    1. Sorting              -- DONE
    2. JS PROTOTYPES        -- 
    3. NUMBERS              -- 
    4. CHARACTERS           -- 
    5. UDEMY                -- 

*/







/*

    INHERITANCE EXERCISES

*/



// *****  
// *****  EXAMPLE 1 : OBJECTS
// *****  
let poops = {
    isPoopin: true,
    walks: function(){
        console.log("Okay im walking")
    }
}

let animal = {
    eats: true,
    __proto__: poops
}

let animal2 = {
    name: "Ted"
}
animal2.__proto__ = poops;

let animal3 = {
    type: "K9"
}
// Incorrect Way
animal3.prototype = poops
animal3.prototype
// {isPoopin: true, walks: ƒ}
animal3.prototype.isPoopin
// true
animal3.prototype.walks()
// VM1012:5 Okay im walking





// *****  
// *****  EXAMPLE 2 : FUNCTIONS 
// *****  

function sayHi(){
    console.log("Hello World");
}

function talk(phrase){
    console.log(phrase)
}

talk.prototype.sayHelloWorld = sayHi

talk.prototype.sayHelloWorld()
// VM1411:3 Hello World
talk.__proto__.sayHi()
// Uncaught TypeError: talk.__proto__.sayHi is not a function
talk.__proto__.sayHi
// undefined




// *****  
// *****  EXAMPLE 3 : OBJECTS WITH COMPOSITIONAL INHERITANCE
// *****  


let hasChocolate = {
    hasChocolate: true
}

let hasCaramel = {
    hasCaramel: true
}

let hasMilk = {
    hasMilk: true
}

let hasSoda = {
    hasSoda: true
}

function tellIngrediants(e) {
    debugger
    console.log(this.hasChocolate);
    console.log("what")
}

let chocolateIceCream = Object.assign({},hasChocolate, hasCaramel, hasMilk);
let chocolateSodaCream = Object.assign({},hasChocolate, hasSoda, hasMilk);

let newIceCream = {
    newChoco: Object.assign({},hasChocolate, hasCaramel, hasMilk),
    melts: true
}

debugger
tellIngrediants.call(newIceCream.newChoco);
tellIngrediants.apply(newIceCream.newChoco);

































/*

    SORTING EXERCISES

*/

function showData(data){
    console.log("\n\n" + JSON.stringify(data, null, 2) );
}


const ARR1 = ['C', 'D', 'E', 'F', 'G'];
const INDEX1 = [3, 0, 4, 1, 2];
const SOL1 = ['D', 'F', 'G', 'C', 'E'];

const ARR2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const INDEX2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const SOL2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let sortByIndex = (arr, iArray) => {
    let seperator = "****";
    debugger
    for(let i=0 ; i<arr.length ; i++){
        let destIndex = iArray[i];
        if(destIndex < i){
            if( arr[i].indexOf(seperator) > -1 ){
                
                let itemToMove = arr[i].substring(0, arr[i].indexOf(seperator));
                arr[i] = arr[i].substring( arr[i].indexOf(seperator) + seperator.length, arr[i].length  )
                
                arr[destIndex] = itemToMove;
            } else {
                arr[destIndex] = arr[i];
            }
        } else {
            if( arr[i].indexOf(seperator) > -1 ){
                
                let itemToMove = arr[i].substring(0, arr[i].indexOf(seperator));
                arr[i] = arr[i].substring( arr[i].indexOf(seperator) + seperator.length, arr[i].length  )
                
                arr[destIndex] = itemToMove;
            } else {
                arr[destIndex] += seperator + arr[i];
            }
        }
    }

}
sortByIndex(ARR1, INDEX1)
showData( ARR1 );





let passes = [
    {
        id: 8810,
        depart: "SFO",
        arrival: "NY"
    },
    {
        id: 8809,
        depart: "NDLS",
        arrival: "MUM"
    },
    {
        id: 8808,
        depart: "DUBAI",
        arrival: "BER"
    },
    {
        id: 8807,
        depart: "PERTH",
        arrival: "TOKYO"
    },
    {
        id: 8806,
        depart: "MUM",
        arrival: "HYD"
    },
    {
        id: 8805,
        depart: "HYD",
        arrival: "LDN"
    },
    {
        id: 8804,
        depart: "CCU",
        arrival: "SFO"
    },
    {
        id: 8803,
        depart: "LDN",
        arrival: "CCU"
    },
    {
        id: 8802,
        depart: "TOKYO",
        arrival: "DUBAI"
    },
    {
        id: 8801,
        depart: "BER",
        arrival: "NDLS"
    }
];

let sortBusinessTrip = (tripItinerary) => {
    let destMap = new Map();
    let hasLanded = new Map();
    let startCity = null;
    let totalTrip = [];

    console.log('hi hi');
    debugger

    tripItinerary.forEach((pitStop) => {
        destMap.set(pitStop.depart, pitStop.arrival);
        hasLanded.set(pitStop.arrival, true);
    });

    // Tag the starting airport
    console.log('hi hi');

    destMap.forEach((value, key)=>{
        if( !hasLanded.has(key) ){
            startCity = key;
        } else if (!hasLanded.has(value)) {
            startCity = value;
        }
    });

    totalTrip.push(startCity);

    for(let i=0 ; i<passes.length ; i++){
        startCity = destMap.get(startCity)
        totalTrip.push(startCity);
    }
    
    return totalTrip;
}

// showData(sortBusinessTrip(passes));





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

let arrangeUsersBySkill = (users) => {
    return users.reduce((prev, curr, index, arr) => {
        if(prev.length === 0){
            let entry = {
                skill: curr.skill,
                user: [curr.user],
                count: 1
            }
            prev.push(entry);
        } else {
            let isUserPushed = false;
            prev.map((eachSkill)=>{
                if(eachSkill.skill === curr.skill){
                    eachSkill.user.push(curr.user);
                    eachSkill.count += 1;
                    isUserPushed = true;
                }
            });

            if(!isUserPushed){
                let entry = {
                    skill: curr.skill,
                    user: [curr.user],
                    count: 1
                }
                prev.push(entry);
            }
        }
        return prev;
    },[]);
}
// showData( arrangeUsersBySkill(endorsements) );






/* 
    sorting json objects received from ajax call
*/

function getData() {
    let url = "https://api.myjson.com/bins/1773un";
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', renderData);
    xhr.open("GET", url);
    xhr.send();
}

function renderData() {
    let data = JSON.parse(this.responseText);
    debugger;
    showData(data);
    
    // Sort by title
    data.sort((a,b)=>{
        return compareString(a.title.toLowerCase(), b.title.toLowerCase());
    });
    showData(data);
}

function compareString(a,b){
    if(a.charCodeAt(0) > b.charCodeAt(0)){
        return 1;
    } else if(a.charCodeAt(0) < b.charCodeAt(0)){
        return -1;
    } else {
        if( a.length !== 0 && b.length !==0 ){
            return compareString(
                    a.substring(1, a.length), 
                    b.substring(1, b.length)
                );
        } else {
            return (a.length !== 0) ? 1 : -1;
        }
    }

}


// getData();