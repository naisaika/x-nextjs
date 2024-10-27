import React from 'react';
import styles from "./ListMarkNumber.module.scss"

interface childrenProps {
    children: React.ReactNode;
    className?: string;
}

export const ListMarkNumber = ({children, className = ''}: childrenProps) => {
  return (
    <span className={`${styles.listMark__number} ${className}`}>{children}</span>
  )
}
