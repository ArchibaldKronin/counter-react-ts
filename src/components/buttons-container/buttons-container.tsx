import React, { memo } from 'react';
import styles from './buttons-container.module.css';

export const ButtonsContainer = memo(({ children }: { children: React.ReactNode, }) => {
    return (
        <div className={styles.buttonsContainer}>
            {children}
        </div>
    )
})
