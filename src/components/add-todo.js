'use strict'

import React from 'react'

export const AddTodo = ({onAddTodo}) => {
  let input
  return (
    <div>
      <input type="text" ref={node =>
        input = node
      } />
      <button onClick={ () => {
          onAddTodo(input.value)
          input.value = ''
        }
      }>
        Add a Todo
      </button>
    </div>
  )
}
