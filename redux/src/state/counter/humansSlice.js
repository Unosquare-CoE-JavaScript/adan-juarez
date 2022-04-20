import { createSlice, nanoid } from "@reduxjs/toolkit";

const createHuman = title => ({
    id: nanoid(),
    name,
    taskIds: []
})

const initialState = [createHuman('Steve'),
    createHuman('Velocity'),
    createHuman('Steve')
]

export const humanSlice = createSlice({
    name: 'humans',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(createHumank(action.payload))
           
        }
    }
})