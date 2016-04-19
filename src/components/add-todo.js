'use strict'

import React from 'react'
import {ADD_TODO} from '../constants/action-types'

let nextId = 0

// presentation and container component
export const AddTodo = (props,{store}) => {
  let input
  return (
    <div>
      <input type="text" ref={node =>
        input = node
      } />
      <button onClick={ () => {
        store.dispatch({
          type:ADD_TODO,
          text:input.value,
          id: nextId++
        })
        input.value = ''
      }}>
        Add a Todo
      </button>
    </div>
  )
}
AddTodo.contextTypes = {
  store: React.PropTypes.object
}
