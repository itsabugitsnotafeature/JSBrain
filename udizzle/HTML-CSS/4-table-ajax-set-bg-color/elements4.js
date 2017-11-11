console.log("Elements 4 Hello World !");

const DATA_URL = 'https://api.myjson.com/bins/1furu3';
var USER_DATA = null;
var baseColorValues = {
    r: 255,
    g: 255,
    b: 255
};
var dropPercent = 10;


window.onload = function () {

    if(tossACoin()){
        initializePageByXhr();
    } else {
        initializePageByFetch();
    }
    
    var body = document.getElementsByTagName('body')[0];
    this.setElementBackgroundColor( body, getColorValue(this.baseColorValues.r, this.baseColorValues.g, this.baseColorValues.b ));
}

/* 
    true  : Heads
    false : Tails
*/
function tossACoin() {
    return (Math.floor(Math.random() * 2) == 0)
}

function initializePageByFetch(){
    this.fetch(DATA_URL)
        .then((resp)=>{
            console.log("initializePageByFetch(): Request Sent !");
            return resp.text();
        })
        .then((data)=>{
            setUserData(JSON.parse(data));
        })

}

function setUserData(userDataObj) {
    this.USER_DATA = userDataObj;
    createUserTabledata();
    return true;
}


function getColorValue(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`
}


function setElementBackgroundColor(elem, col) {
    elem.style.backgroundColor = col;
}

function setColor(){
    // regEx : \d+
    var sourceElem = document.querySelector('#tableDiv > table > tbody > tr:nth-child(1)');
    var sourceElemColor = sourceElem.style.backgroundColor;
    var sourceElemColorComponents = sourceElemColor.match(/\d+/g);;
    let reductionFactor = 20;

    var targetElem = document.querySelector('#tableDiv > table > tbody > tr:nth-child(2)');
    var targetElemColorComponents = sourceElemColorComponents.reduce((prev, curr)=>{
        var col = Math.floor(curr - (curr * reductionFactor / 100));
        prev.push(col);
        return prev;
    },[]);
    var targetElemColor = getColorValue(targetElemColorComponents[0], 
            targetElemColorComponents[1], targetElemColorComponents[2]);    
    targetElem.style.backgroundColor = targetElemColor
}

function initializePageByXhr() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', extractAndInitializeXhrData);
    xhr.open('GET', DATA_URL);
    xhr.send();
    console.log("initializePageByXhr(): Request Sent !");
}


function extractAndInitializeXhrData() {
    setUserData(JSON.parse(this.responseText));    
}


function createUserTabledata() {
    console.log(this.USER_DATA);
    let data = this.USER_DATA;
    // var tableTemplate = document.querySelector('#tableTemplate');
    // var tableElement = tableTemplate.content.querySelectorAll('table')[0].cloneNode();

    // Create Table and its elements
    var tableElement = document.createElement('table');
    var tableHeadElement = document.createElement('thead');
    var tableBodyElement = document.createElement('tbody');
    var tableFooterElement = document.createElement('tfooter');

    // PREPARE  HEADER
    var headers = getObectKeys(data);
    var rowElement = document.createElement('tr');
    headers.forEach((headerItem)=>{
        var td = document.createElement('td');
        td.textContent = headerItem;
        rowElement.appendChild(td);
    });
    rowElement.style.textTransform = 'capitalize';
    rowElement.style.fontFamily = 'sans-serif';
    tableHeadElement.appendChild(rowElement);

    // PREPARE  BODY
    data.forEach((user ,index )=>{
        rowElement = document.createElement('tr');
        headers.forEach((headerItem)=>{
            if(headerItem === 'image'){
                var td = document.createElement('td');
                var img = document.createElement('img');
                img.src = user[headerItem];
                td.appendChild(img);
            } else {
                var td = document.createElement('td');
                td.textContent = user[headerItem];
            }
            rowElement.appendChild(td);
        });
        let r = parseInt(this.baseColorValues.r - (this.baseColorValues.r * Math.random()) );
        let g = parseInt(this.baseColorValues.g - (this.baseColorValues.g * Math.random()) );
        let b = parseInt(this.baseColorValues.b - (this.baseColorValues.b * Math.random()) );
        this.setElementBackgroundColor( rowElement, getColorValue(r, g, b));
        tableBodyElement.appendChild(rowElement);
    });

    // background-color: red;
    tableBodyElement.style.textTransform = 'capitalize';
    tableBodyElement.style.fontFamily = 'sans-serif';
    
    // PREPARE  Footer
    tableElement.appendChild(tableHeadElement);
    tableElement.appendChild(tableBodyElement);
    tableElement.appendChild(tableFooterElement);
    refreshDiv(tableElement);
}


function getObectKeys(data){
    var keyList = new Set();
    if( Array.isArray(data) ){
        data.forEach((item)=>{
            var allKeys = Object.keys(item);
            allKeys.forEach((key)=>{
                keyList.add(key);
            })
        })
    }
    return Array.from(keyList);
}


function refreshDiv(innerContent){
    document.getElementById("tableDiv").appendChild(innerContent);
    console.log("THE END !")
}



