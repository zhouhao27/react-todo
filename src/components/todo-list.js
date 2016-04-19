'use strict'

import React from 'react'
import {Todo} from './todo'

// presentation components
export const TodoList = ({todos,onTodoClick}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}
