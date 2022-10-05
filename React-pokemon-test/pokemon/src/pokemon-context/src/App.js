import React from 'react'
import './static/styles/styles.scss';

import Routes from './navigation/Routes';
import PokemonProvider from './state/context/PokeContext';


const AppPokemon = () => {
    return (
            <PokemonProvider>
                <Routes />
            </PokemonProvider>
    )
}

export default AppPokemon
