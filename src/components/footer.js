'use strict'

import React from 'react'
import {FilterLink} from './filter-link'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/states'

export const Footer = () => {
  return (
    <p>
    Show:
    {' '}
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter={SHOW_COMPLETED}>
      Completed
    </FilterLink>
    </p>
  )
}
