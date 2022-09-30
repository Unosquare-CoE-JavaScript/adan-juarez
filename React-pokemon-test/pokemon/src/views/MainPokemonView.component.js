import React from 'react'
import { Container, PokemonContainer } from '../components/container/container.component';
import PokemonItem from '../components/pokemon-item/PokemonItem.component';
import PokemonMarkCount from '../components/pokemon-mark-count/pokemon-mark-count.component';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemonList } from '../redux/pokemon/pokemon.action';

const MainPokemonView = () => {
  const dispatch = useDispatch()
  const PokemonList = useSelector((state) => state.PokemonList)

  return (
    <Container>
      <PokemonMarkCount
        initialCount={0}
        totalCount={1400}
      />
      <PokemonContainer>
        <PokemonItem name="Bulbasaur" />
        <PokemonItem name="Bulbasaur" />
        <PokemonItem name="Bulbasaur" />
        <PokemonItem name="Bulbasaur" />
        <PokemonItem name="Bulbasaur" />
        <PokemonItem name="Bulbasaur" />
      </PokemonContainer>
      <PokemonMarkCount />
    </Container>
  )
}

export default MainPokemonView;