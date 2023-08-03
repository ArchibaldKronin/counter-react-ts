import React, { useState } from 'react';
import { addTask, type TodoElement } from '../../../store/todo-slice'
import { useAppDispatch } from '../../../hooks';
import type { ChangeEvent } from 'react';
import { Button } from '../../button/button';
import styles from './add-task-modal.module.css';


export const AddTaskModal = ({ onClose }: { onClose: () => void }) => {
    const [task, setTask] = useState('');

    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleAddButtonClick = () => {
        dispatch(addTask(task));
        onClose();
    }


    return (
        <div className={styles.container}>
            <input id='task' value={task} onChange={handleChange}></input>
            <Button onClick={handleAddButtonClick}>Добавить</Button>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    )
}
