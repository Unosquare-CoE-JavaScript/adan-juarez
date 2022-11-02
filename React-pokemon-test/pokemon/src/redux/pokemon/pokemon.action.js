import axios from "axios";

export const GetPokemonList = (page) => async (dispatch) => {
    try {
        dispatch({
            type: "POKEMON_LIST_LOADING",
        })
        
    const perPage = 20;
    const offset = page * perPage - perPage;

    const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    )
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAILED"
        })
    }
}

export const GetPokemon = pokemon => async(dispatch) => {
    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING",
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL",
            payload: res.data,
            pokemonName: pokemon,
        })
    } catch(e) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL"
        })
    }
}