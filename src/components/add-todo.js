'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/todo-action'

// presentation and container component
export let AddTodo = ({dispatch}) => {
  let input
  return (
    <div>
      <input type="text" ref={node =>
        input = node
      } />
      <button onClick={ () => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        Add a Todo
      </button>
    </div>
  )
}
AddTodo = connect()(AddTodo)
