import React from 'react';
import styles from "./SecondaryButton.module.scss";
import Link from 'next/link';

interface ChildrenProps {
    link: string;
    children: React.ReactNode;
}

export const SecondaryButton = ({link = "#", children}: ChildrenProps) => {
  return (
    <Link href={link} className={styles.link}>
        <button type="button" className={styles.secondaryBtn}>{children}</button>
    </Link>
    )
}