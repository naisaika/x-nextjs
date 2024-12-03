"use client";

import React, { useState } from 'react'
import { RESUME_QA_TITLE } from '@/data/data';
import styles from "./ResumeQA.module.scss"
import { RESUME_QA_TEXT } from "./resumeQAText/ResumeQAText"
import Image from 'next/image';

export const ResumeQA = () => {

    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

    const openAnswer = (id: number) => {
        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    }

    return (
        <div className={styles.contentsWrapper}>
    
            <ul className={styles.contentsList}>
              {RESUME_QA_TITLE.map((title) => {
    
                const resumePointText = RESUME_QA_TEXT.find((text) => text.id === title.id);
                const checkOpen = isOpen[title.id] || false;
    
                return (
                  <li key={title.id} className={styles.resumeQAItem}>
                    <p className={styles.resumeQATitle} aria-label='button' onClick={() => openAnswer(title.id)}>
                        <span>{`Q: ${title.title}`}</span>
                        { checkOpen?
                            <Image src="/list-mark/accordion-open.svg" alt="アコーディオンアイコン" width={20} height={20} priority/>:
                            <Image src="/list-mark/accordion-close.svg" alt="アコーディオンアイコン" width={20} height={20} priority/>
                        }
                    </p>
                    <div className={checkOpen? styles.resumeQATextContainer__open : styles.resumeQATextContainer}>
                        <span className={styles.answerMark}>A:</span>
                        {resumePointText?.text}
                    </div>
                  </li>
              )})}
            </ul>
        </div>
    )
}
