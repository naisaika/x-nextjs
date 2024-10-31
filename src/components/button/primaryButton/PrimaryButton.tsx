import React from 'react';
import styles from "./PrimaryButton.module.scss";
import Link from 'next/link';

interface ChildrenProps {
  link: string;
  children: React.ReactNode;
}

export const PrimaryButton = ({link = "#", children}: ChildrenProps) => {
  return (
    <Link href={link} className={styles.link} prefetch={true}>
      <button type="button" className={styles.primaryBtn}>{children}</button>
    </Link>
  )
}
