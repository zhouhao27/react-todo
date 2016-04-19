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
        this.props.onClick(this.props.filter)
      }}
      >
        {this.props.children}
      </a>
    )
  }
}
