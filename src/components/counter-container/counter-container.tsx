import React, { useState } from 'react';
import styles from './counter-container.module.css'
import { CounterWindow } from '../counter-window/counter-window';
import { ButtonsContainer } from '../buttons-container/buttons-container';
import { Button } from '../button/button';

export const CounterContainer = () => {

    const [counter, setCounter] = useState<number>(0);

    const incrCounter = (): void => setCounter(counter + 1);

    const decrCounter = (): void => setCounter(counter - 1);

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
