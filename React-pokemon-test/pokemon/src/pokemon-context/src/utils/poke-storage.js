import { POKEMON } from '../constants/constants'

export const pokeCatch = () => { 
    JSON.parse(window.localStorage.getItem(POKEMON));
}

export const pokeCatched = (update) => { 
    window.localStorage.setItem(POKEMON, JSON.stringify(update));
}

export const pokeLeave = () => {
     window.localStorage.removeItem(POKEMON);
}
