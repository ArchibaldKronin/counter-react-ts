import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectTodos, selectTodosObj } from '../../../store/todo-slice';

interface Todo {
    [key: string]: unknown;
    id: number;
    title: string
}

type Todos = [Todo];

export const TodoListList = () => {
    const dispatch = useAppDispatch();

    const todosListObj = useAppSelector(selectTodosObj);
    const todosList = useAppSelector(selectTodos);

    return (
        <ul>
            {todosList.map(todo =>
                <li key={todo.id.toString()}></li>)}
        </ul>
    )
}
