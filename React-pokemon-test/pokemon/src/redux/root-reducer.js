import { combineReducers } from 'redux';
import PokemonListReducer from './reducers/PokemonListReducer';
//import PokemonMultipleReducer from './reducers/PokemonMultipleReducer';

export const rootReducer = combineReducers({
   // pokemon: pokemonReducer,
    PokemonList: PokemonListReducer,
    //Pokemon: PokemonMultipleReducer
});