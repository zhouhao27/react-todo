jest.unmock('../todos')

import todos from '../todos'
import {ADD_TODO} from '../../constants/action-types'

describe('todos reducer test',() => {
  it('add todo', () => {
    const stateBefore = []
    const action = {
      type: ADD_TODO,
      id: 0,
      text: 'My first todo',
    }
    const stateAfter = [
      {
        id: 0,
        text: 'My first todo',
        completed: false
      }
    ]

    expect(todos(stateBefore,action)).toEqual(stateAfter)
  })
})
