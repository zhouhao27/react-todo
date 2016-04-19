'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers , compose, createStore} from 'redux'
import {Provider} from 'react-redux'

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

ReactDOM.render(
  <Provider store={createStore(todoApp,enhancer)}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
