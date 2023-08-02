import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface TodoSlice {
    [key: string]: unknown;
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

export const { addTask } = todoSlice.actions;

export const selectTodosObj = (state: RootState) => state.todo;

export const selectTodos = createSelector(selectTodosObj, todos => Object.values(todos));

export default todoSlice.reducer;