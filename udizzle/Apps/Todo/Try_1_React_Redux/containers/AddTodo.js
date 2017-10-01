'use strict '

import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!imput.value.trim()){
                        return
                    }
                    dispatch(addTodo(imput.value))
                    imput.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo 
                </button>
            </form>
        </div>
    )
}


AddTodo = connect()(AddTodo)

export default AddTodo
