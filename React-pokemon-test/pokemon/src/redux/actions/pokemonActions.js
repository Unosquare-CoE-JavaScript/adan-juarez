import axios from "axios";
import { OBTENER_POKEMONES_EXITO, SIGUIENTE_POKEMONES_EXITO, ANTERIOR_POKEMONES_EXITO } from "../types/pokemon.actions";

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

  try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      console.log(res.data)
      dispatch({
          type: OBTENER_POKEMONES_EXITO,
          payload: res.data
      })
  } catch (error) {
      console.log(error)
  }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

  const {next} = getState().pokemones

  try {
      const res = await axios.get(next)
      dispatch({
          type: SIGUIENTE_POKEMONES_EXITO,
          payload: res.data
      })
  } catch (error) {
      console.log(error)
  }
}

export const anteriorPokemonAccion = () => async (dispatch, getState) => {

  const {previous} = getState().pokemones

  try {
      const res = await axios.get(previous)
      dispatch({
          type: SIGUIENTE_POKEMONES_EXITO,
          payload: res.data
      })
  } catch (error) {
      console.log(error)
  }
}