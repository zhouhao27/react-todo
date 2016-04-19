'use strict'

import React from 'react'
import TodoApp from './app'

export default class Root extends React.Component {
  render() {
    const { store } = this.props
    return (
      <div>
        <TodoApp {...store.getState()} store={store}/>
        {/*<DevTools />*/}
      </div>
    )
  }
}
