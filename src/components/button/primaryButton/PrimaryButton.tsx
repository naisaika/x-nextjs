import React from 'react';
import styles from "./PrimaryButton.module.scss";

interface ChildrenProps {
    children: React.ReactNode;
}

export const PrimaryButton = ({children}: ChildrenProps) => {
  return (
    <button type="button" className={styles.primaryBtn}>{children}</button>
  )
}
