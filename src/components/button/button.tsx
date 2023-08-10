import React, { memo } from 'react';
import styles from './button.module.css'
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export const Button = memo(({ children, onClick }: ButtonProps) => {
    return (
        <div className={styles.button} onClick={onClick}>
            {children}
        </div>
    )
})
