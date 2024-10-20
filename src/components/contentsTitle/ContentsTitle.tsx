import React from 'react';
import styles from "./ContentsTitle.module.scss";

interface childrenProps {
    children: React.ReactNode;
}

export const ContentsTitle = ({children}: childrenProps) => {
  return (
    <h3 className={styles.contentsTitle}>{children}</h3>
  )
}
