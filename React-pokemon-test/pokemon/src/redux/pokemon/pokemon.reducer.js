import { POKEMON_ACTION_TYPES } from './pokemon.types'

export const POKEMON_INITIAL_STATE = {
    isCatched: false,
    pokemon: [],
    loading: false,
    errorMsg: "",
    count: 0,
}

export const pokemonReducer = (
        state = POKEMON_INITIAL_STATE, 
        action = {}
    ) => {
    const { type, payload } = action;

    switch(type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "POKEMON_LIST_SUCCES":
            return {
                ...state,
                loading: false,
                data: payload.results,
                errorMsg: "",
                count: payload.count
            }
        default:
            return state;
    }
}