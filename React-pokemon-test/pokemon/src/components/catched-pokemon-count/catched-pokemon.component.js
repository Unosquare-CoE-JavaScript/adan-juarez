import React from 'react'
import './catched-styles.styles.scss'

const CatchedPokemon = ({ pokemon }) => {
  return (
    <div>
       <h3>{pokemon.name}</h3>
       <img src={pokemon.imag} alt={pokemon.name}/> 
    </div>
  )
}

export default CatchedPokemon