'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers , compose, createStore} from 'redux'

import DevTools from './containers/dev-tools'
import Root from './containers/root'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibility-filter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

const enhancer = compose(
  DevTools.instrument()
)

const store = createStore(todoApp,enhancer)

const render = () => {
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}
render()

store.subscribe(render)
