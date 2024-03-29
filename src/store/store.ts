import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import todosReducer from './todo-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todosReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;