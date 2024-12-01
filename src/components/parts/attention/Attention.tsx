import Image from 'next/image';
import React from 'react';
import styles from "./Attention.module.scss";

interface ChildrenProps {
    children: React.ReactNode;
}

export const Attention = ({children}: ChildrenProps) => {
  return (
    <div className={styles.attentionContainer}>
        <Image src="/list-mark/attention.svg" 
            alt="注意マーク画像" 
            width={28} height={28} priority>
        </Image> 
        <p className={styles.attentionText}>{children}</p>
    </div>
  )
}