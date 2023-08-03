import React, { useState } from 'react';
import { CounterWindow } from '../counter-window/counter-window';
import { ButtonsContainer } from '../buttons-container/buttons-container';
import { Button } from '../button/button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment, selectCount } from '../../store/counter-slice';
import styles from './counter-container.module.css'
import { TodoListList } from '../todo-list-components/todo-list-list/todo-list-list';
import { addTask } from '../../store/todo-slice';
import { AddTaskModal } from '../todo-list-components/add-task-modal/add-task-modal';

export const CounterContainer = () => {

    const counter: number = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    const incrCounter = () => dispatch(increment());

    const decrCounter = () => dispatch(decrement(1));

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddModalOpen = () => {
        setIsAddModalOpen(true);
    }

    const handleAddModalClose = () => {
        setIsAddModalOpen(false);
    }

    // const handleAddTask = () => dispatch(addTask())


    return (
        <div className={styles.counterContainer}>
            <CounterWindow>
                {counter}
            </CounterWindow>
            <ButtonsContainer>
                <Button onClick={incrCounter}>INCR</Button>
                <Button onClick={decrCounter}>DECR</Button>
            </ButtonsContainer>
            Задачи:
            <Button onClick={handleAddModalOpen}>Добавить задачу</Button>
            {isAddModalOpen && <AddTaskModal onClose={handleAddModalClose} />}
            <TodoListList />
        </div>
    )
}