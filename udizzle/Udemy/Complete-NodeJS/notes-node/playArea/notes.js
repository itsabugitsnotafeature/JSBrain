'use strict'

console.log("Imported Notes.JS!");
const fs = require('fs');

// fs.appendFileSync('./playArea/greetings.txt', ": Holy Moly NEW Hello World!");
// module.exports.addNums = (a,b) => {
//     return  (a + b) ;
// }

function getData(){
    return (JSON.parse(fs.readFileSync('./playArea/myNotes.json', 'utf8')));
}

function setData(data){
    fs.writeFileSync('./playArea/myNotes.json', JSON.stringify(data) );
    return true;
}

let addNote = (title, value) => {
    console.log("Adding node with title : " + title);
    console.log("Body : " + value);
    debugger
    let data = getData();
    data[title] = value;
    setData(data);
}

let removeNote = (title) => {
    console.log("Removing node with title : " + title);    
    let data = getData();
    delete data[title];
    setData(data);
}

let getAllNotes = () => {
    console.log("Showing all Notes");
    return JSON.stringify(getData(), null, 2);
}

let getNote = (title) => {
    console.log("Getting note with title :" + title);
    let data = getData();
    return JSON.stringify(data[title], null, 2);
    
}

module.exports = {
    addNote,
    removeNote,
    getAllNotes,
    getNote
}