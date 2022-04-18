import { createSlice, nanoid } from "@reduxjs/toolkit";

const createTask = title => ({
    id: nanoid(),
    title,
    completed: false,
    assignedTo: ""
})

const initialState = [
    createTask('Order more energy drinks'),
    createTask('Water the plans')
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    //reducers
    add: (state, action) => {
        state.push(createTask(action.payload))
       
    }
})