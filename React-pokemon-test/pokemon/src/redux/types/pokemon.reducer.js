import { LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    LOAD_POKE_REQUEST,
    LOAD_POKE_SUCCESS,
    LOAD_POKE_FAILURE
                       } from "./pokemon.actionTypes";

export const POKE_KEY = 'pokeStore'

let initialState = {
    data: [],
    loading:false,
    errorMessage:'',
     pokeUrlData:{}
}

export const pokeReducer = (state = initialState, action) =>{
    let {type, payload} = action
    switch(type){
         
        case LOAD_DATA_REQUEST:
            return{
                ...state,
                loading:true
            }
            case LOAD_DATA_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    data:payload
                }

                 
                case LOAD_DATA_FAILURE:
                    return{
                        ...state,
                        errorMessage:payload
                    }

                    // poke section
                    case LOAD_POKE_REQUEST:
                        return{
                            ...state,
                            loading:true
                        }
                        case LOAD_POKE_SUCCESS:
                            return{
                                ...state,
                                loading:false,
                                pokeUrlData:payload
                            }
            
                             
                            case LOAD_POKE_FAILURE:
                                return{
                                    ...state,
                                    errorMessage:payload
                                }
                    default: return state
    }

}
