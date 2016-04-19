'use strict'

import React from 'react'
import TodoApp from './app'
import DevTools from './dev-tools'

export default class Root extends React.Component {
  render() {
    const { store } = this.props
    return (
      <div>
        <TodoApp {...store.getState()} store={store}/>
        <DevTools store={store}/>
      </div>
    )
  }
}
