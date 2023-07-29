import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoSlice {
    id: number;
    title: string
}

const initialState: TodoSlice = {
    id: 1,
    title: 'Example task'
}

export const todoSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: {
            prepare: (title: string) => {
                return {
                    payload: {
                        id: Date.now(),
                        title
                    }
                }
            },
            reducer: (state, action:PayloadAction<TodoSlice>) => (state[action.payload.id] = action.payload)
        }

        // deleteTask: (state, action: PayloadAction<string>) => {
        //     delete state[action.payload];
        // }

        // editTask: 

    }
})