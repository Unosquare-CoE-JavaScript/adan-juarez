import React from 'react'
import NextButton from '../next-button/NextButton'
import PokemonCounter from '../pokemon-counter/PokemonCounter'
import PreviousButton from '../previous-button/PreviousButton'
import './counter-container.styles.scss'

const PokemonMarkCount = () => {
  return (
    <div className='counter-container'>
        <PreviousButton prevStateColor={false} />
        <PokemonCounter /> 
        <NextButton nextStateColor />
    </div>
  )
}

export default PokemonMarkCount