import { createStore, compose, applyMiddleware, bindActionCreators, combineReducers } from 'redux'
import { reducer } from './reducer'
import { reducerItems } from './items/reducer'
import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './counter/taskSliceReducer'
import { humanSlice } from './counter/humansSlice'
import { charactersSlice } from './characters/charactersSlice'

const initialState = {  value: 0 }

const rootReducer = combineReducers({
    reducer: reducer,
    reducerItems: reducerItems
})

const enhancer = 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

                        // reducers, 
export const store = createStore(reducer, enhancer)

console.log(store)

/* store with redux toolkit */

export const storeReuxToolkit = configureStore({
    reducer: {
        tasks: taskSlice.reducer,
        humans: humanSlice.reducer
    }
})

export const storeCharacters = configureStore({
    reducer: {
        characters: charactersSlice.reducer
    }
})