'use strict'

function createCloseButton() {
    // Create a "close" button and append it to each list item
    let myNodelist = document.getElementsByTagName("li");

    for (let i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

function deleteTodo(elem) {
    elem.style.display = "none";
}

// Create a new list item when clicking on the "Add" button
function newElement() {

    // Add a "DELETE" symbol on the RHS
    let li = document.createElement("li");
    let inputValue = document.getElementById("todoItem").value;
    let t = document.createTextNode(inputValue);

    // Add a "checked" symbol when clicking on a list item
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName.toLowerCase() === 'li') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
        console.error("You must write something!");
    } else {
        document.getElementById("myTodoList").appendChild(li);
    }

    document.getElementById("todoItem").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00A0\u00A0 \u00D7 \u00A0\u00A0");

    span.className = "close";
    span.appendChild(txt);
    span.onclick = function() {
        deleteTodo(this.parentElement);
    }

    li.appendChild(span);
}