import Image from 'next/image';
import React from 'react';
import styles from "./Attention.module.scss";

interface ChildrenProps {
    children: React.ReactNode;
}

export const Attention = ({children}: ChildrenProps) => {
  return (
    <div className={styles.attentionContainer}>
        <Image src="/list-mark/attention.png" 
            alt="注意マーク画像" 
            width={24} height={24} priority>
        </Image> 
        <p className={styles.attentionText}>{children}</p>
    </div>
  )
}