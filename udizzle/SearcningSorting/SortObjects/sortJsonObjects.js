'use strict'

/* 
    Using XML-HTTPRequest Module
*/
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const URL = 'https://api.myjson.com/bins/1773un';
let xhr = new XMLHttpRequest();
function serveXmlHttpPReq() {
    // console.log( JSON.stringify(this.responseText));
    let rawData = JSON.parse((this.responseText));
    
    console.log( "\n\n UNSORTED !");
    console.log( JSON.stringify(rawData, null, 2));

    rawData.sort( (a,b) => {
        if (a.title.toLowerCase().charAt(0) < b.title.toLowerCase().charAt(0))
            return -1
            if (a.title.toLowerCase().charAt(0) > b.title.toLowerCase().charAt(0))
            return 1
        return 0
    });
    console.log( "\n\n SORTED !!!! ");
    console.log( JSON.stringify(rawData, null, 2));

};
xhr.addEventListener('load', serveXmlHttpPReq);
xhr.open('GET', URL);
xhr.send();


/* 
    node-fetch
*/

let fetch = require('node-fetch');
fetch(URL).then((res)=>{
    return res.json();
}).then(function(json) {
    serveFeetchRequest(json);
});

function serveFeetchRequest(res){
    console.log( "\n\n BEFORE ");
    let rawData = res;
    console.log( JSON.stringify(rawData, null, 2) );

    res.sort((a,b) => {
        if( a.title.toLowerCase().charAt(0) < b.title.toLowerCase().charAt(0) ){
            return -1;
        } else if( a.title.toLowerCase().charAt(0) > b.title.toLowerCase().charAt(0) ){
            return 1;
        }  else {
            return 0;
        }
    })

    console.log( "\n\n AFTER ");
    console.log( JSON.stringify(rawData, null, 2) );

}

