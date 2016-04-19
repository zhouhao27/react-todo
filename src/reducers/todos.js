'use strict'

import { ADD_TODO, TOGGLE_TODO } from '../constants/action-types';

export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      const nextState = [
        ...state,
        todo(undefined,action)
      ];
      return nextState
    case TOGGLE_TODO:
      return state.map(t => todo(t,action))
    default:
      return state
  }
}

// todo reducer which is called composition reducer
function todo(state, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      // ES7
      const newState = {
        ...state,
        completed: !state.completed
      }

      return newState

    default:
      return state
  }
}
