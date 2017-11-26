'use strict'
const fs = require('fs');
const os = require('os');
const notes = require('./playArea/notes.js')
const _ = require('lodash');


fs.appendFile('./playArea/greetings.txt', "\nHoly Moly OLD Hello World!", (err)=>{
    console.log('Callback Done!');
    if(err){
        console.error('ERROR: ' + err);
    }
});

fs.appendFileSync('./playArea/greetings.txt', "\n" + os.userInfo().username + 
    ": Holy Moly NEW Hello World!");

fs.appendFileSync('./playArea/greetings.txt', "\n" + `${os.userInfo().username}: Another One`);

// console.log(notes.addNums(3,4));
console.log('Done!');
console.log( _.isString(true) );
console.log( _.isString('true') );
console.log( _.uniq(['ud', 1,1,2,'ud','andrew', 3,4,5,5,5,34,  'andrew', 555]));

