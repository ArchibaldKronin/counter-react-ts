import React from 'react';
import styles from './content.module.css';

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.content}>{children}</div>
  )
}
