import Image from 'next/image';
import React from 'react';
import styles from "./FlagContentsContainer.module.scss";

interface FlagContentsProps {
    titles: {
        id: number;
        title: string;
    }[];
    text: {
        id: number;
        text: JSX.Element;
    }[];
}

export const FlagContentsContainer = ({titles, text}: FlagContentsProps) => {
  return (
    <div className={styles.pointSection}>
        {titles.map((title) => {
            const pointText = text.find((eachText) => eachText.id === title.id)
            return(
                <div key={title.id} className={styles.pointContainer}>
                    <div className={styles.pointTitleContainer}>
                        <Image src="/list-mark/flag.png" 
                            alt="フラグマーク画像" 
                            width={24} height={24} priority>
                        </Image> 
                        <span className={styles.pointTitle}>{title.title}</span>
                    </div>
                    <div className={styles.pointText}>{pointText?.text}</div>
                </div>
            )
        })}
    </div>
  )
}
