import { configureStore } from '@redux-devtools/core';
import favoritesReducer from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
    },
});