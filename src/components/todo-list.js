'use strict'

import React from 'react'
import Todo from './todo'

// presentation components
export default class TodoList extends React.Component {
  render() {
    return (

      <ul>
        {this.props.todos.map(todo =>
          <Todo key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    )
  }
}
