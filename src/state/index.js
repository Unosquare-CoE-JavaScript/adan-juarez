import { createStore, compose, applyMiddleware, bindActionCreators } from 'redux'
import { reducer } from './reducer'

const initialState = {  value: 0 }

const enhancer = 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

                        // reducers, 
export const store = createStore(reducer, enhancer)

console.log(store)