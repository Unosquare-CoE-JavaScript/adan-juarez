import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({children}) => {
    const [favoritemealIds, setFavoritMealsIds] = useState([])

    function addFavorite(id) {
                            //prev state        //new state
        setFavoritMealsIds((currentFavIds) => [...currentFavIds, id])
    }

    function removeFavorite(id){
        setFavoritMealsIds((currentFavIds) => currentFavIds.filter(
            mealId => mealId !== id
        ))
    }

    const values = {
        ids: favoritemealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={values}>{children}</FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;
