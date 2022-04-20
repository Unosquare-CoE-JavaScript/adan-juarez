import produce from 'immer';
import { ITEM_ADDED, ITEM_REMOVED, ITEM_PRICE_UPDATE, ITEM_QUANTITY_UPDATE } from './action'
import { selectItem } from './selectors';

let id = 1

export const initialItems = [
    { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
    { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
]
// Adding the produce function, notice the reduction code

export const reducerItems = produce((state = initialItems, action) => {
    if (action.type === ITEM_ADDED) {
        const item = { uuid: id++, quantity: 1, ...action.payload }
        state.push(item)
        //return [...state, item]
    }

    /* with item_added with immer
    if (action.type === ITEM_ADDED) {
        //this function launch immer
        produce(state, (draftState) => {
            const item = { uuid: id++, quantity: 1, ...action.payload }
            draftState.push(item)
        })
    }
    */

    if (action.type === ITEM_REMOVED) {
        //delete over an array
        // mutate the array
        return state.filter(item => item.uuid !== action.payload.uuid)
    }

    if (action.type === ITEM_PRICE_UPDATE) {
        // with immer produce function
        return produce(state /*(draftState)*/ => {
            const item = state.find(item => item.uuid === action.payload.uuid)
            item.price = parseInt(action.payload.uuid, 10)
        })
        /*  return state.map(item => {
             //check the uuid and if theres and update
             if(item.uuid === action.payload.uuid) {
 
                 return {...item, price: action.payload.price}
             }
         }) */
    }

    if (action.type === ITEM_QUANTITY_UPDATE) {
                // with immer produce function
        return produce(state, (draftState) => {
            const item = state.find((item) => item.uuid === action.payload.uuid)
            item.quantity = parseInt(action.payload.uuid, 10)
        })
       /*  return state.map(item => {
            //check the uuid and if theres and update
            if (item.uuid === action.payload.uuid) {

                return { ...item, quantity: action.payload.quantity }
            }
        }) */
    }
    //return state
}, initialItems )

export default reducerItems