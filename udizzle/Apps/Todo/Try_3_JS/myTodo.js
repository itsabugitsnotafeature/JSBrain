'use strict'

let LOCAL_STORAGE_TODO_KEY = 'MY_TODOS';

let addTodo = () => {
    let itemToAdd = document.getElementById('todo-item').value;
    if (itemToAdd === '') {
        alert("Enter Valid Value Please !");
        return;
    }

    console.log('Adding Value: ' + itemToAdd);
    let allCurrentTodos = _getAllCurrentTodos() || [];
    allCurrentTodos.push(itemToAdd);
    _setAllCurrentTodos(allCurrentTodos);
    document.getElementById('todo-item').value = '';
}

let _updateView = () => {
    let allCurrentTodos = _getAllCurrentTodos();

    let todosMarkup = '<ul>'
    for (let i = 0; i < allCurrentTodos.length; i++) {
        let listElement = "<li> " + allCurrentTodos[i] + " <button id=" + i + " name='remove-item'> [ X ] </button></li>"
        todosMarkup += listElement;
    }
    todosMarkup += '</ul>'
    document.getElementById('todos').innerHTML = todosMarkup;

    let allRemoveButtons = document.getElementsByName('remove-item');
    allRemoveButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', removeTodoItem);
    })
}

let removeTodoItem = () => {
    let id = event.target.getAttribute('id');
    let allTodos = _getAllCurrentTodos();
    allTodos.splice(id, 1);
    _setAllCurrentTodos(allTodos);
}

let _getAllCurrentTodos = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY));
}

let _setAllCurrentTodos = (todos) => {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
    _updateView();
}

let clerAllTodos = () => {
    console.log('clerAllTodos Called !');
    _setAllCurrentTodos([]);
}


document.getElementById('add-todo').addEventListener('click', addTodo);
document.getElementById('clear-all-todos').addEventListener('click', clerAllTodos);
_updateView();