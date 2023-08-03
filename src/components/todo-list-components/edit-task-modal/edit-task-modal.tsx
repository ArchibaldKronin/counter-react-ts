import React, { ChangeEvent, useState } from 'react';
import styles from './edit-task-modal.module.css';
import { useAppDispatch } from '../../../hooks';
import { Button } from '../../button/button';
import { editTask } from '../../../store/todo-slice';
import type { TodoElement } from '../../../store/todo-slice';

export const EditTaskModal = ({ todo, onClose }: { todo: TodoElement, onClose: () => void }) => {
    const dispatch = useAppDispatch();

    const [task, setTask] = useState(todo);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            title: e.target.value
        })
    }

    const handleSaveButtonClick = () => {
        dispatch(editTask(task));
        onClose();
    }



    return (
        <div className={styles.container}>
            <input type="text" value={task.title} onChange={handleChange} />
            <Button onClick={handleSaveButtonClick}>Сохранить</Button>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    )
}
