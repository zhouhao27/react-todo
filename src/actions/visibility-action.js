import {SET_VISIBILITY_FILTER} from '../constants/action-types'

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
