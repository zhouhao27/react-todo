'use strict'

import React from 'react'
import FilterLink from './filter-link'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'

export default class Footer extends React.Component {
  render() {
    return (
      <p>
      Show:
      {' '}
      <FilterLink
        filter={SHOW_ALL}
        currentFilter = {this.props.currentFilter}
        onClick={(f) => this.props.onFilterClick(f)}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter={SHOW_ACTIVE}
        currentFilter = {this.props.currentFilter}
        onClick={(f) => this.props.onFilterClick(f)}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter={SHOW_COMPLETED}
        currentFilter = {this.props.currentFilter}
        onClick={(f) => this.props.onFilterClick(f)}
      >
        Completed
      </FilterLink>
      </p>
    )
  }
}
