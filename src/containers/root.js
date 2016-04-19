'use strict'

import React from 'react'
// import {TodoApp} from './app'
import TodoApp from './app'
import DevTools from './dev-tools'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <TodoApp/>
        <DevTools/>
      </div>
    )
  }
}
