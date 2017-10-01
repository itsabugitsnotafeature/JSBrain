'use strict'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ]
            break;

        case 'SET_VISIBILITY_FILTER':
            console.log("Triggered set visibility!")
            break;

        case 'TOGGLE_TODO':
            return state.map(eachTodo => {
                // if (eachTodo.id === action.id) {
                //     ...eachTodo,
                //     completed: !eachTodo.completed
                // }
                // Look into this dude
                (eachTodo.id === action.id) ? {...eachTodo, completed: !eachTodo.completed } : eachTodo
            })
            break;

        default:
            return state;
    }
}

export default todos;