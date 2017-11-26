'use strict'



function activateTableView(){}


function renderTable(userData){
    let tableParent = document.querySelector('.user-table');

    let table = document.createElement('table');
    let tHead = document.createElement('thead');
    let tBody = document.createElement('tbody');

    let headerItems = Object.keys(userData[0]);

    // Populate Header to tHead
    let tr = document.createElement('tr');
    headerItems.forEach((item)=>{
        let td = document.createElement('td');
        td.innerText = item;
        tr.appendChild(td);
    });
    tHead.appendChild(tr);
    
    /*  
    {
        "id": 99,
        "first_name": "Gusti",
        "last_name": "Ferrarese",
        "email": "gferrarese2q@abc.net.au",
        "gender": "Female",
        "image": "http://dummyimage.com/183x183.png/ff4444/ffffff"
    }
    */

    userData.forEach((record)=>{
        let tr = document.createElement('tr');

        headerItems.forEach((item)=>{
            let td = document.createElement('td');
            td.innerText = record[item];
            tr.appendChild(td);
        });
        tBody.appendChild(tr);
    });




    table.appendChild(tHead);
    table.appendChild(tBody);
    tableParent.appendChild(table);
}

function displayTableData(){
    let userData = JSON.parse(this.responseText);
    console.log("Received Data => " + JSON.stringify(userData, null, 2) );
    renderTable(userData);
}

function getData(url) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', displayTableData);
    xhr.open('GET', url);
    xhr.send();
}

function getFormData(){
    let form = document.querySelector('#user-form-fill')
    let formData = {
        firstName: form.fistName.value,
        lastName: form.lastName.value,
        password: form.password.value,
        userUrl: form.userUrl.value
    }
    console.log("Got Data : " + JSON.stringify( formData, null, 2 ));
    let displayBlock = document.createElement('textbox');
    displayBlock.innerText = JSON.stringify( formData, null, 2 );
    let parent = document.querySelector('#form-display');
    parent.appendChild(displayBlock);
    
    console.log("did it work ");
    event.preventDefault();

    setTimeout( function(url){
        console.log("Initializing view with URL => " + url);
        getData(url);
    },2000, form.userUrl.value);

}



function leftPanelClicked(e) {
    switch(e.target.value){
        case 0:
            console.log("Clicked Value 0 with text => " + e.target.innerText);
            activateTableView();
            break;
        case 1:
            console.log("Clicked Value 1 with text => " + e.target.innerText);
            getFormData();
            break;
        default:
            console.error("Not sure what got clicked ");
            break;
    }
    e.stopImmediatePropagation();
}



console.log('hello world');

window.onload = function(){
    let navPanel = document.querySelector('#left-options')
    navPanel.addEventListener('click', leftPanelClicked);
    console.log("Left Panel initialized!");
}