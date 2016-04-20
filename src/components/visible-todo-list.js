'use strict'

import React from 'react'
import {TodoList} from './todo-list'
import {connect} from 'react-redux'

import {toggleTodo} from '../actions/todo-action'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'

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

const mapStatesToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : (id)=> {
      dispatch(toggleTodo(id))
    }
  }
}

export const VisibleTodoList = connect(
  mapStatesToProps,
  mapDispatchToProps
)(TodoList)
