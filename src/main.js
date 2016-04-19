'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers , createStore} from 'redux'

import Root from './containers/root'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const store = createStore(todoApp)

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}
render()

store.subscribe(render)

/*
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

let nextId = 0

render(
  <TodoApp {...store.getState()}
    onAddTodo={(text) => {
      alert(text)
      store.dispatch({
        type:'ADD_TODO',
        id: nextId++,
        text
      })
    }
    }
  />,
  document.getElementById('app')
)
*/
