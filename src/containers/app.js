'use strict'

import React from 'react'

import {TodoList} from '../components/todo-list'
import {AddTodo} from '../components/add-todo'
import {Footer} from '../components/footer'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from '../constants/action-types'

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

let nextId = 0

export default class TodoApp extends React.Component {
  render() {
    const { store } = this.props

    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibleTodos(todos, visibilityFilter)
    return (
      <div>
        <AddTodo onAddTodo={(text) =>
          store.dispatch({
            type:ADD_TODO,
            text,
            id: nextId++
          })
        }/>
        <TodoList
         todos={visibleTodos}
         onTodoClick={(id)=>
           store.dispatch({
             type:TOGGLE_TODO,
             id
           })
         }
        />
      <Footer
        currentFilter={visibilityFilter}
        onFilterClick={(filter) =>
          store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter
          })
        }
      />
    </div>
  )};
}
