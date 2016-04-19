'use strict'

import React from 'react'
import {TodoList} from './todo-list'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'
import {TOGGLE_TODO} from '../constants/action-types'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
}

// container component
export const VisibleTodoList = (props,{store}) => {

  return(
    <TodoList
      todos={getVisibleTodos(store.getState().todos, store.getState().visibilityFilter)}
      onTodoClick={(id)=>
       store.dispatch({
         type:TOGGLE_TODO,
         id
       })
     }
    />
  )
}
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}
