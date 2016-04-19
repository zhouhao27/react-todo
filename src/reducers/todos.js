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
const todo = (state, action) => {
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

      //TODO: ES7, doesn't work
      // const newState = {
      //   ...state,
      //   completed: !state.completed
      // }
      const newState = {
        id: state.id,
        text: state.text,
        completed: !state.completed
      }

      return newState

    default:
      return state
  }
}
