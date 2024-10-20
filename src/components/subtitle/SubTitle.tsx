import React from 'react';
import styles from "./SubTitle.module.scss";

interface childrenProps {
    children: React.ReactNode
}

export const SubTitle = ({children}: childrenProps) => {
  return (
    <h2 className={styles.subTitle}>{children}</h2>
  )
}
