'use strict'

function get_todos() {
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    // Convert String array to real Object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    let task = document.getElementById('task').value;
    if (task === '') {
        alert("Enter ToDo Item to add to list ");
        return;
    }

    // Add item to TODO's stored in local storage
    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    // Reset Input field and REFRESH View
    document.getElementById('task').value = '';
    refreshView();
    return false;
}

function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();

    // Splice(start, deleteCount) actually removes the element from the array:    
    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));
    refreshView();
    return false;
}

function refreshView() {
    let todos = get_todos();

    // Create List for each TODO item
    let allTodoMarkup = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        // Add todo Item along with DELETE Todo Button
        allTodoMarkup += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    allTodoMarkup += '</ul>';

    // Assign todo list to marent markup
    document.getElementById('todos').innerHTML = allTodoMarkup;

    // Add event listener to each 'delete todo button'
    let buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

let refreshList = () => {
    localStorage.clear('todo')
    refreshView();
}

// Initialize Event Listeners once PAGE LOAD Completes.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', add);
    document.getElementById('refreshList').addEventListener('click', refreshList);
    refreshView();
}, false);