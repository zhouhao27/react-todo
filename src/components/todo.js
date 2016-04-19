'use strict'

import React from 'react'

export const Todo = ({
  completed,
  onClick,
  text
}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
    </li>
  )
}
