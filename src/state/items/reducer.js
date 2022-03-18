let id = 1

export const initialState = [
    { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
    { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
]

export const reducer = (state = initialState, action) => {
    return state
}

export default reducer