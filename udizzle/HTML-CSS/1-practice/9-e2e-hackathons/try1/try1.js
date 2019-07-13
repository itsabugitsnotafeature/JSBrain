'use strict'
console.log('Hello World !');

var URL = "https://api.myjson.com/bins/1furu3";

var DATA = null;

var setData = (data) =>{
    this.DATA = data;
    cardFactory();
}

var getData = () =>{
    return this.DATA;
}

function initializeWithXhr(){
    var xhr = new XMLHttpRequest();
    debugger
    xhr.addEventListener('load',()=>{
        var response = event.target.responseText;
        setData( JSON.parse(response) );
    });
    xhr.open('GET', URL);
    xhr.send();
}

function initializeWithFetch(){
    fetch(URL)
        .then((resp)=>{
            return resp.json();
        }).then((data)=>{
            setData(data);
        });
}

// initializeWithXhr();
initializeWithFetch();

function cardFactory() {
    let cardContainer = document.querySelector('.card-container');
    let templateElement = document.querySelector('#card-template');

    (getData()).forEach(function(user) {
        var elem = templateElement.content.children.card.cloneNode(true);
        elem.style.backgroundColor = getRandomColor();
        var imgElem = null;
        var titleElem = null;
        var descElem = null;
        [imgElem, titleElem, descElem] = elem.children;
    
        imgElem.firstElementChild.src = user.image;
        titleElem.innerText = user.first_name + ' ' + user.last_name
        descElem.firstElementChild.innerText = "Gender is " + user.gender + " can be reached out at email id " +
            user.email + " and can be identified using the ID => " + user.gender;
    
        cardContainer.appendChild(elem);
    }, this);

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var col = '#';
    while(col.length !== 7){
        col += letters[ Math.floor(Math.random() * 16) ];
    }
    return col;
}