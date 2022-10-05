import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion } from '../redux/actions/pokemonActions'


const MainPokemonView = () => {
  const dispatch = useDispatch()

  const pokemones = useSelector(store => store.pokemones.results)
  console.log(pokemones)
  const next = useSelector(store => store.pokemones.next)
  const previous = useSelector(store => store.pokemones.previous)

  return (
    <div>
      {/* {
        pokemones.length === 0 && <button onClick={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
      } */}
      {
        next && <button onClick={() => dispatch(siguientePokemonAccion())} >Siguiente</button>
      }
      {
        previous && <button onClick={() => dispatch(anteriorPokemonAccion())} >Anterior</button>
      }
      <ul>
        {
          pokemones.map(item => (
            <li key={item.name} >{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default MainPokemonView;