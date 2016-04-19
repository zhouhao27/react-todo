'use strict'

import React from 'react'
import {Link} from './link'
import {SET_VISIBILITY_FILTER} from '../constants/action-types'

// container component
export const FilterLink = (props,{store}) => {
  const state = store.getState()
  return (
    <Link
      active = {props.filter === state.visibilityFilter}
      onClick = { () =>
        store.dispatch({
          type: SET_VISIBILITY_FILTER,
          filter: props.filter
        })
      }
    >
    {props.children}
    </Link>
  )
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
