'use strict'

import React from 'react'
import {FilterLink} from './filter-link'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'

export const Footer = ({
  currentFilter,
  onFilterClick
}) => {
  return (
    <p>
    Show:
    {' '}
    <FilterLink
      filter={SHOW_ALL}
      currentFilter = {currentFilter}
      onClick={(f) => onFilterClick(f)}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter={SHOW_ACTIVE}
      currentFilter = {currentFilter}
      onClick={(f) => onFilterClick(f)}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter={SHOW_COMPLETED}
      currentFilter = {currentFilter}
      onClick={(f) => onFilterClick(f)}
    >
      Completed
    </FilterLink>
    </p>
  )
}
