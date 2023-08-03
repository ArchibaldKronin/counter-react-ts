import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { deleteTask, selectTodos, selectTodosObj } from '../../../store/todo-slice';
import { Button } from '../../button/button';
import styles from './todo-list-list.module.css';
import { EditTaskModal } from '../edit-task-modal/edit-task-modal';

export const TodoListList = () => {
    const dispatch = useAppDispatch();

    const todosListObj = useAppSelector(selectTodosObj);
    const todosList = useAppSelector(selectTodos);

    const [isEditOpen, setIsEditOpen] = useState(false);

    const [editOpenSettings, setEditOpenSettings] = useState(0)

    const handleDeleteClick = (id: number) => {
        dispatch(deleteTask(id));
    }

    const handleEditOpen = (id: number) => {
        setEditOpenSettings(id);
        setIsEditOpen(true);
    }

    const handleEditClose = () => {
        setIsEditOpen(false);
    }

    return (

        <ul>
            {todosList.map(todo =>
                <li className={styles.li} key={todo.id}>
                    {todo.title}
                    <Button onClick={() => handleEditOpen(todo.id)}>Изменить задачу</Button>
                    {isEditOpen && editOpenSettings===todo.id && <EditTaskModal todo={todo} onClose={handleEditClose} />}
                    {!isEditOpen && <Button onClick={() => handleDeleteClick(todo.id)}>Удалить задачу</Button>}
                </li>)}
        </ul>
    )
}
