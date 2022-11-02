import React from 'react'
import './pokemon-info.scss'

const PokemonInfo = ({ pokemon }) => {
    return (
        <div className='pokemon-info'>
            {
                pokemon.map(({ pokemons, index }) => (
                    <div index={index}>
                        <h2>{pokemons.name}</h2>
                        <div className='pokemon-info-content' style={{display: 'flex', flexDirection: 'row'}}>
                            <div>
                                <img src={pokemons.front} alt={pokemons.name} />
                            </div>
                            <div>
                                <img src={pokemons.back} alt={pokemons.name} />
                            </div>
                        </div>
                        <div className='pokemon-info-content-a'>
                            <span className='pokemon-info-style'>{pokemons.default_character}</span>
                            <span className='pokemon-info-style'>{pokemons.base_experience}</span>
                            <span className='pokemon-info-style'>{pokemons.height}</span>
                            <span className='pokemon-info-style'>{pokemons.weight}</span>
                            <span className='pokemon-info-style'>{pokemons.abilities.map((ability) => (
                                <span className='pokemon-info-space'>{ability.name}</span>
                            ))}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PokemonInfo