import React, { useState } from 'react';
import styles from './counter-container.module.css'
import { CounterWindow } from '../counter-window/counter-window';
import { ButtonsContainer } from '../buttons-container/buttons-container';
import { Button } from '../button/button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { increment, selectCount } from '../../store/counter-slice';
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'


export const CounterContainer = () => {

    // const [counter, setCounter] = useState<number>(0);

    // const incrCounter = (): void => setCounter(counter + 1);

    // const decrCounter = (): void => setCounter(counter - 1);

    const counter: number = useAppSelector(selectCount);
    const dispath = useAppDispatch();

    // const incrCounterDoesntWork = (): void => dispath(increment); // Его подсказки абсолютно не очевидны
    const incrCounter = (): ActionCreatorWithoutPayload => dispath(increment);

    return (
        <div className={styles.counterContainer}>
            <CounterWindow>
                {counter}
            </CounterWindow>
            <ButtonsContainer>
                <Button onClick={incrCounter}>INCR</Button>
                {/* <Button onClick={decrCounter}>DECR</Button> */}
            </ButtonsContainer>
        </div>
    )
}
