import React from 'react';
import styles from "./ListMarkNumber.module.scss"

interface childrenProps {
    children: React.ReactNode;
}

export const ListMarkNumber = ({children}: childrenProps) => {
  return (
    <span className={styles.listMark__number}>{children}</span>
  )
}
