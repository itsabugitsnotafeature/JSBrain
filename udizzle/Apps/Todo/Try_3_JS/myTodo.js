'use strict'

let LOCAL_STORAGE_TODO_KEY = 'MY_TODOS';
let AUTO_SAVE_DELAY = 2000;


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

let debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
        let context = this,
            args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

let _updateView = () => {
    let allCurrentTodos = _getAllCurrentTodos();

    let todosMarkup = '<ul>'
    for (let i = 0; i < allCurrentTodos.length; i++) {
        let listElement = "<li name='editable' contenteditable='true' > " + allCurrentTodos[i] + " <button id=" + i + " name='remove-item'> [ X ] </button></li>"
        todosMarkup += listElement;
    }
    todosMarkup += '</ul>'
    document.getElementById('todos').innerHTML = todosMarkup;

    let allRemoveButtons = document.getElementsByName('remove-item');
    allRemoveButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', removeTodoItem);
    });

    let allListItems = document.getElementsByName("editable");
    allListItems.forEach((todoItem) => {
        todoItem.addEventListener("input", _saveUpdatedTodo, false);
    });
}

let _saveUpdatedTodo = debounce((event) => {
    console.log("called _saveUpdatedTodo ");
    _updateList(event.target.children[0].id, event.target.innerText);
}, AUTO_SAVE_DELAY);

let _updateList = (id, todoValue) => {
    console.log("called _saveUpdatedTodo ");
    let closeButtonIndex = todoValue.indexOf(' [ X ]');
    todoValue = todoValue.substring(0, closeButtonIndex);

    console.log("Updateing \nitem number: " + id + "\nwith value " + todoValue + "\n");

    let allCurrentTodos = _getAllCurrentTodos();
    allCurrentTodos[id] = todoValue;
    _setAllCurrentTodos(allCurrentTodos);
    console.log("SAVE COMPLETE !");
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