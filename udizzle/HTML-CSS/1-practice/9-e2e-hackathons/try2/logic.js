'use strict'

console.log('hello world')

function getToolTip() {
    let tooltipString = '<div ><span> ToolTip Data </span></div>';
    let parser = new DOMParser();
    
    let tooltipElement = parser.parseFromString(tooltipString, "text/xml");
    return tooltipElement.firstChild;
}

let addToolTip = () => {
    let allRows = document.getElementsByTagName('tr');
    allRows = Array.from(allRows);
    allRows.forEach((row)=>{
        let tooltipElem = getToolTip();
        tooltipElem.id = 'tooltip'
        row.appendChild(tooltipElem);
    });
}

function updateDemoDiv(elem) {
    let demoDiv = document.getElementById('demo');
    demoDiv.innerHTML = '';
    demoDiv.appendChild(elem);
}


let renderTable = (data) => {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let titles = Object.keys(data[0]);
    
    // Setup Head
    let titleRow = document.createElement('tr');
    titles.forEach((title) => {
        let tElem = document.createElement('td');
        tElem.innerText = title;
        titleRow.appendChild(tElem);
    });
    thead.appendChild(titleRow);

    // Setup BODY
    data.forEach((block) => {
        let blockRow = document.createElement('tr');

        titles.forEach((title) => {
            if (title === 'image') {
                let bElem = document.createElement('img');
                bElem.src = block[title];
                blockRow.appendChild(bElem);

            } else {
                let bElem = document.createElement('td');
                bElem.innerText = block[title];
                blockRow.appendChild(bElem);
            }
        });
        tbody.appendChild(blockRow);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    updateDemoDiv(table);
}


function extractData(){
    let data = this.responseText;
    data = JSON.parse(data);
    renderTable(data);
}

let initializeTable = () => {
    console.log('initializeTable');
    let url = 'https://api.myjson.com/bins/1furu3';
    let req = new XMLHttpRequest();
    req.addEventListener('load', extractData);
    req.open('GET', url);
    req.send();
}


let acceptForm = () => {
    console.log('Accepting form now !')
}

// initializeTable();