import React from 'react'
import './container.styles.scss'

export const Container = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export const PokemonContainer = ({children}) => {
    return (
        <div className='poke-container'>
            {children}
        </div>
    )
}