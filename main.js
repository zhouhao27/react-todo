'use strict'

import React from 'react'
import { render } from 'react-dom'
import {combineReducers , createStore} from 'redux'

import TodoApp from './src/app'
import todos from './src/reducers/todos'
import visibilityFilter from './src/reducers/visibility-filter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(todoApp)

store.subscribe(render);

render(
  <TodoApp {...store.getState()}/>,
  document.getElementById('app')
)
