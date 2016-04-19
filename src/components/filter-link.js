'use strict'

import React from 'react'

export default class FilterLink extends React.Component {

  render() {
    if (this.props.filter === this.props.currentFilter) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a href='#' onClick={ e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
      >
        {this.props.children}
      </a>
    )
  }
}

/*
const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {

  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a href='#' onClick={ e => {
      e.preventDefault();
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
      })
    }}
    >
  {children}
    </a>
  )
}
*/
