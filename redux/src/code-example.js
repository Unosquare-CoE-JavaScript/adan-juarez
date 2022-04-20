import { create } from 'domain'
import { createStore, compose, applyMiddleware, bindActionCreators } from 'redux'

// a function that attach redux things, allows you to take a set of functions.
const makeLouder = string = string.toUpperCase()
const repeatThreeTimes = string => string.repeat(3)
const embolden = string => string.bold()

const makeLouderRepeatThreeTimesAndEmbolden = string => embolden(repeatThreeTimes(makeLoader(string)))

console.log(makeLouderRepeatThreeTimesAndEmbolden('hello'))

compose(embolder, repeatThreeTimes, makeLouder)

// reducer
const initialState = { value: 0 }
const INCREMENT = 'INCREMENT' // do this to avoid mispelling
const ADD = 'ADD'
//redux dev-tools do counter/increment, this is other form to write it
const incrementAction = { type: INCREMENT }

// take it into account if the app will increase in size
const increment = () => ({ type: INCREMENT })
const add = (amount) => ({ type: INCREMENT, payload: amount })

// 2nd syntax, state = initialState
const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        const value = state.value + 1
        return { value }
    }

    if (action.type === ADD) {
        return {
            value: state.value + action.payload
        }
    }
    return state
}
// reducers, initialState
const store = createStore(reducer)

const subscriber = () => console.log('SUBSCRIBER', store.getState())
store.subscribe(subscriber)
//object you want to bind, what you want that binded to
const actions = bindActionCreators({ increment, add }, store.dispatch)
// take athe action and passing inmediately

//bind do this
const [dispatchIncrement, dispatchAdd] = [increment, add].map(fn =>
    compose(store.dispatch, fn))

//take all, use this in react. React do much of the redux bindActionCreators do for us
const dispatchAdd = compose(store.dispatch, add)

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(add(1000))

actions.add(1000)
actions.increment()

console.log(actions)
//console.log(store)
//console.log(store.getState())


/* Combine Reducers */
const initialState2 = {
    users: [
        {
            id: 1, name: "Steve"
        },
        {
            id: 2, name: "Eric"
        }
    ],
    tasks: [
        {
            title: 'File the TPS report'
        },
        {
            title: 'Order more energy drinks'
        }
    ]
}

const ADD_USER = "ADD_USER"
const ADD_TASK = "ADD_TASK"

// reducers
const addTask = (title) => ({ type: ADD_TASK, payload: title })
const addUser = (name) => ({ type: ADD_USER, payload: name })

const userReducer = (users = initialState.users, action) => {
    if (action.type === ADD_USER) {
        return [
            ...users,
            action.payload
        ]
    }
    // puth what you want to return as this return sth, if theres noting after the condition, it returns nothing and 
    // marks an error
    return users
}

const taskReducer = (tasks = initialState.tasks, action) => {
    if (action.type === ADD_TASK) {
        return [
            ...tasks,
            action.payload
        ]
    }

    return tasks
}

const Reducer = combineReducers({
    users: userReducer,
    tasks: taskReducer
})

const storeWithCombineReducers = createStore(Reducer)

// applyMiddleware
const reducer = state => state

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
        const start = performance.now()
        const newState = reducer(state, action)
        const end = performance.now()
        const diff = Math.round(end - start)
        console.log(diff)

        return newState
    }
    return createStore(monitoredReducer, initialState, enhancer)
}

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const logReducer = (state, action) => {
        console.log('old state' + state)
        const newState = (state, action) 
        console.log('new state', newState, action)

        return newState
    }

    return createStore(logReducer, initialState, enhancer)
}

const store = createStore(reducer, logEnhancer)
// reducer is mandatory, the other params are optional
//const store = createStore(reducer,  monitorEnhancer)

store.dispatch({ type: "Hello" })