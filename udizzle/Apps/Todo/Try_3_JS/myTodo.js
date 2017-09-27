'use strict'

let LOCAL_STORAGE_TODO_KEY = 'MY_TODOS';
let AUTO_SAVE_DELAY = 2000;


let addTodo = () => {
    let todoItem = document.getElementById('todo-item').value;
    if (todoItem === '') {
        alert("Enter Valid Value Please !");
        return;
    }
    console.log('Adding Value: ' + todoItem);

    let itemToAdd = {
        todo: todoItem,
        isCompleted: false
    }

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
    if (!allCurrentTodos) {
        console.log("Nothing to update in view!");
        return;
    }

    let todosMarkup = '<ul>'
    for (let i = 0; i < allCurrentTodos.length; i++) {
        let listElement;
        if (allCurrentTodos[i].isCompleted) {
            listElement =
                " <li name='editable' contenteditable='true' id=" + i + "> " +
                "<input type='checkbox' name='todo-checkbox' checked >" +
                allCurrentTodos[i].todo + " <button id=" + i +
                " name='remove-item'> [ X ] </button></li>";

        } else {
            listElement =
                " <li name='editable' contenteditable='true' id=" + i + "> " +
                "<input type='checkbox' name='todo-checkbox'>" +
                allCurrentTodos[i].todo + " <button name='remove-item'> [ X ] </button></li>";
        }

        todosMarkup += listElement;
    }
    todosMarkup += '</ul>'
    document.getElementById('todos').innerHTML = todosMarkup;

    let allRemoveButtons = document.getElementsByName('remove-item');
    allRemoveButtons.forEach((removeButton) => {
        removeButton.addEventListener('click', _removeTodoItem);
    });

    let allListItems = document.getElementsByName("editable");
    allListItems.forEach((todoItem) => {
        todoItem.addEventListener("input", _saveUpdatedTodo, false);
    });

    let allCheckBoxes = document.getElementsByName("todo-checkbox");
    allCheckBoxes.forEach((checkbox) => {
        checkbox.addEventListener("click", _markedTodoCheckbox, false);
    });
}

let _markedTodoCheckbox = debounce((event) => {
    console.log("called _saveUpdatedTodo ");
    _updateCheckedList(event.target.parentElement.id, event.target.checked);
}, AUTO_SAVE_DELAY);

let _updateCheckedList = (id, isChecked) => {
    console.log("called _updateCheckedList ");

    console.log("Updateing \nitem number: " + id + "\nwith checked value set to " + isChecked + ".\n");

    let allCurrentTodos = _getAllCurrentTodos();
    allCurrentTodos[id].isCompleted = isChecked;
    _setAllCurrentTodos(allCurrentTodos);
    console.log("_updateCheckedList: SAVE COMPLETE !");
}

let _saveUpdatedTodo = debounce((event) => {
    console.log("called _saveUpdatedTodo ");
    _updateTodoList(event.target.id, event.target.innerText);
}, AUTO_SAVE_DELAY);

let _updateTodoList = (id, todoValue) => {
    console.log("called _saveUpdatedTodo ");
    let closeButtonIndex = todoValue.indexOf('[ X ]');
    todoValue = todoValue.substring(0, (closeButtonIndex - 1));

    console.log("Updateing \nitem number: " + id + "\nwith value " + todoValue + "\n");

    let allCurrentTodos = _getAllCurrentTodos();
    allCurrentTodos[id].todo = todoValue;
    _setAllCurrentTodos(allCurrentTodos);
    console.log("_updateTodoList: SAVE COMPLETE !");
}

let _removeTodoItem = () => {
    let id = event.target.parentElement.id;
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