import React from 'react'
import './prev-button.scss'

const PreviousButton = ({onClick, prevStateColor}) => {
  const prevAction = prevStateColor ? 'prev-color-on' : 'prev-color-off';
  return (
    <ul className={`prev-color-style ${prevAction}`} onClick={onClick}>
        <li>« Previous</li>
    </ul>
  )
}

export default PreviousButton