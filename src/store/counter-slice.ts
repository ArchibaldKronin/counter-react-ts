import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CounterSlice {
    value: number,
}

const initialState: CounterSlice = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { //Почему не спрашивает какого типа аргумент state
            state.value += 1
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value; // Что такое рутСтейт?

export default counterSlice.reducer;