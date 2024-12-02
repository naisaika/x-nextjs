import Image from 'next/image';
import React from 'react';
import styles from "./FlagContentsContainer.module.scss";

interface FlagContentsProps {
    id: string;
    title: string;
    text: JSX.Element;
}

export const FlagContentsContainer = ({id, title, text}: FlagContentsProps) => {
  return (
    <div className={styles.pointSection}>
        <div className={styles.pointContainer}>
            <div className={styles.pointTitleContainer}>
                <Image src="/list-mark/flag.png" 
                    alt="フラグマーク画像" 
                    width={24} height={24} priority>
                </Image> 
                <span className={id === "black"? styles.pointTitle__black : styles.pointTitle__primary}>{title}</span>
            </div>
            <div className={styles.pointText}>{text}</div>
        </div>
    </div>
  )
}
