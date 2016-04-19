'use strict'

import React from 'react'

export default class AddTodo extends React.Component {

  render() {
    let input
    return (
      <div>
        <input type="text" ref={node =>
          input = node
        } />
        <button onClick={ () => {
            this.props.onAddTodo(input.value)
            input.value = ''
          }
        }>
          Add a Todo
        </button>
      </div>
    )
  }
}
