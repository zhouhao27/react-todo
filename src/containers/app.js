'use strict'

import React from 'react'

import {VisibleTodoList} from '../components/visible-todo-list'
import {AddTodo} from '../components/add-todo'
import {Footer} from '../components/footer'

export default class TodoApp extends React.Component {
  componentDidMount() {
    const {store} = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnMount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer />
      </div>
    )
  }
}
TodoApp.contextTypes = {
  store: React.PropTypes.object
}
