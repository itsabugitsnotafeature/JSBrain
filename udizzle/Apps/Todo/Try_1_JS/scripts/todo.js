'use strict'


function addTodo() {
    let todoList = document.getElementById('todo-list');
    let todoItem = document.getElementById('todo-item').value;
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(todoItem));
    todoList.appendChild(entry);
};

