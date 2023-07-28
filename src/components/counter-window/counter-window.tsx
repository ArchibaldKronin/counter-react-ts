import React from 'react';
import styles from './counter-window.module.css';

interface CounterWindowProps {
    children: React.ReactNode;
}

export const CounterWindow = ({ children }: CounterWindowProps) => {
    return (
        <div className={styles.counterWindow}>
            {children}
        </div>
    )
}
