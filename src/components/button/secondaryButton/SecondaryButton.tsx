import React from 'react';
import styles from "./SecondaryButton.module.scss";

interface ChildrenProps {
    children: React.ReactNode;
}

export const SecondaryButton = ({children}: ChildrenProps) => {
  return (
        <button type="button" className={styles.secondaryBtn}>{children}</button>
    )
}
