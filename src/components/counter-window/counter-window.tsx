import React from 'react';
import styles from './counter-window.module.css';

export const CounterWindow = ({ children }: { children: number }) => {
    return (
        <div className={styles.counterWindow}>
            {children}
        </div>
    )
}
