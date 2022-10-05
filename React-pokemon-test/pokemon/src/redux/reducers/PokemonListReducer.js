import { OBTENER_POKEMONES_EXITO, SIGUIENTE_POKEMONES_EXITO, ANTERIOR_POKEMONES_EXITO } from "../types/pokemon.actions";


const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0,
    next: null,
    previous: null,
    results: [],
    offset: 0
  };
  
function PokemonListReducer(state = DefaultState, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case ANTERIOR_POKEMONES_EXITO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

  
  export default PokemonListReducer