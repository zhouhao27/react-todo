'use strict'

import React from 'react'
import {Link} from './link'
import {connect} from 'react-redux'

import {setVisibilityFilter} from '../actions/visibility-action'

// container component
const mapStatesToProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}
export const FilterLink = connect(
  mapStatesToProps,
  mapDispatchToProps
)(Link)
