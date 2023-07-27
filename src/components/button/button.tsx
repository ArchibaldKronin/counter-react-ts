import React from 'react';
import styles from './button.module.css'
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

export const Button = ({ children, onClick }: { children: string, onClick: () => ActionCreatorWithoutPayload }) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {children}
        </div>
    )
}
