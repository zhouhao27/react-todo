'use strict'

import React from 'react'
import {FilterLink} from './filter-link'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'

export const Footer = ({
  store,
  currentFilter,
  onFilterClick
}) => {
  return (
    <p>
    Show:
    {' '}
    <FilterLink filter={SHOW_ALL} store={store}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter={SHOW_ACTIVE} store={store}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter={SHOW_COMPLETED} store={store}>
      Completed
    </FilterLink>
    </p>
  )
}
