import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface TodoState {
    [key: number | string]: TodoElement
}

export interface TodoElement {
    [key: string]: unknown;
    id: number;
    title: string
}

const initialState: TodoState = {
    1: {
        id: 1,
        title: 'Example task'
    }
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
            reducer: (state, action: PayloadAction<TodoElement>) => {
                state[action.payload.id] = action.payload
            }
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            delete state[action.payload];
        },
        editTask: (state, action: PayloadAction<TodoElement>) => {
            state[action.payload.id] = action.payload
        }

    }
})

export const { addTask, deleteTask, editTask } = todoSlice.actions;

export const selectTodosObj = (state: RootState) => state.todo;

export const selectTodos = createSelector(selectTodosObj, todos => Object.values(todos));

export default todoSlice.reducer;