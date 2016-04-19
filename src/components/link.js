'use strict'

import React from 'react'

// presentation component
export const Link = ({
  active,
  filter,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#' onClick={ e => {
      e.preventDefault();
      onClick(filter)
    }}
    >
      {children}
    </a>
  )
}
