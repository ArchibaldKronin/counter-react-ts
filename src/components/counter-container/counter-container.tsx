import React, { useState } from 'react';
import { CounterWindow } from '../counter-window/counter-window';
import { ButtonsContainer } from '../buttons-container/buttons-container';
import { Button } from '../button/button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { decrement, increment, selectCount } from '../../store/counter-slice';
import styles from './counter-container.module.css'

export const CounterContainer = () => {

    const counter: number = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    const incrCounter = () => dispatch(increment());

    const decrCounter = () => dispatch(decrement(1));


    return (
        <div className={styles.counterContainer}>
            <CounterWindow>
                {counter}
            </CounterWindow>
            <ButtonsContainer>
                <Button onClick={incrCounter}>INCR</Button>
                <Button onClick={decrCounter}>DECR</Button>
            </ButtonsContainer>
        </div>
    )
}