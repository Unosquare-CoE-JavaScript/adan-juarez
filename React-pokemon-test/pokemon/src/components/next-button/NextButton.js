import React from 'react'

const NextButton = ({onClick, nextStateColor}) => {
  const nextAction = nextStateColor ? 'next-color-on' : 'next-color-off';

  return (
    <ul className={`next-color-style ${nextAction}`} onClick={onClick}>
        <li> Next »</li>
    </ul>
  )
}

export default NextButton