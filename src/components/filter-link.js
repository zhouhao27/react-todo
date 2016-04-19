'use strict'

import React from 'react'
import {Link} from './link'
import {SET_VISIBILITY_FILTER} from '../constants/action-types'

// container component
export class FilterLink extends React.Component {
  render() {
    const {store} = this.props
    const state = store.getState()

    return (
      <Link
        active = {this.props.filter === state.visibilityFilter}
        onClick = { () =>
          store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: this.props.filter
          })
        }
      >
      {this.props.children}
      </Link>
    )
  }
}
