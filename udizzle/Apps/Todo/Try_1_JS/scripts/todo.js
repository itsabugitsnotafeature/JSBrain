'use strict'

function deleteTodo(elem) {
    elem.style.display = "none";
}

function initializeList() {
    // Add listener to mark as checked todo item
    // Added one listener to parent DOM 
    // EVENT DELIGATION
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName.toLowerCase() === 'li') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    // Get Todo Item entered by user
    let inputValue = document.getElementById("todoItem").value;

    if (inputValue === '') {
        // Return if empty
        alert("You must write something!");
        return;
    }

    // Create Text Node From user input
    let textNode = document.createTextNode(inputValue);
    // Create Delete Todo element to
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00A0\u00A0 \u00D7 \u00A0\u00A0");

    span.appendChild(txt);
    span.className = "close";
    span.onclick = function() {
        deleteTodo(this.parentElement);
    }

    // Create List Element 'li'
    let li = document.createElement("li");
    li.appendChild(textNode);
    li.appendChild(span);

    document.getElementById("myTodoList").appendChild(li);

    // Reset Text inbox
    document.getElementById("todoItem").value = "";
}

// Initialize Page once PAGE LOAD Completes.
document.addEventListener('DOMContentLoaded', function() {
    // your code here
    initializeList();
}, false);