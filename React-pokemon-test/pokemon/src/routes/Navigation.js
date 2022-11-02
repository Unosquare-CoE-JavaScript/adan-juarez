import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import PokemonCard from '../components/pokemon-card/PokemonCard'
import MainPokemonView from '../views/MainPokemonView.component'
import { PokemonView } from '../views/PokemonView'


const Navigation = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

  return (
    <Routes>
        <Route path="/" element={<MainPokemonView />} />
        <Route path="/pokemon/:pokemon" element={<PokemonView />} />
    </Routes>
  )
}

export default Navigation