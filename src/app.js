'use strict'

import React from 'react'
import FilterLink from './components/filter-link'
import TodoList from './components/todo-list'

let nextId = 0

const getVisibleTodos = (todos, filter) => {
  console.log(`getVisibleTodos: todos=${todos} filter=${filter}`);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

export default class TodoApp extends React.Component {
  render() {

    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibleTodos(todos, visibilityFilter)
    return (
      <div>
        <input type="text" ref={node =>
          this.input = node
        } />
        <button onClick={() => {
          store.dispatch({
            type:'ADD_TODO',
            text: this.input.value,
            id: nextId++
          });
          this.input.value = '';
        }}>Add a Todo</button>
        <TodoList
           todos={visibleTodos}
           onTodoClick={(id)=>
             store.dispatch({
               type:'TOGGLE_TODO',
               id
            })
           }
        >
        </TodoList>
      <p>
      Show:
      {' '}
      <FilterLink
        filter='SHOW_ALL'
        currentFilter = {visibilityFilter}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter = {visibilityFilter}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter = {visibilityFilter}
      >
        Completed
      </FilterLink>
      </p>
    </div>
  )};
}
