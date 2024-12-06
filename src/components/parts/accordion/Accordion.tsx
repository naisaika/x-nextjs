"use client";

import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import Image from "next/image";

type AccordionProps = {
  items: { id: number; question: string; answer: string | JSX.Element }[]; 
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {

  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

  const toggleAnswer = (id: number) => {
    setIsOpen((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

  return (
    <div className={styles.accordionWrapper}>
      <ul className={styles.accordionList}>
        {items.map((item) => {
          const isItemOpen = isOpen[item.id] || false; 

          return (
            <li key={item.id} className={styles.accordionItem}>
              <p
                className={styles.accordionQuestion}
                aria-label="button"
                onClick={() => toggleAnswer(item.id)} // クリックで開閉をトグル
              >
                <span>{`Q： ${item.question}`}</span>
                {isItemOpen ? (
                  <Image
                    src="/list-mark/accordion-open.svg"
                    alt="アコーディオンアイコン"
                    width={20}
                    height={20}
                    priority
                  />
                ) : (
                  <Image
                    src="/list-mark/accordion-close.svg"
                    alt="アコーディオンアイコン"
                    width={20}
                    height={20}
                    priority
                  />
                )}
              </p>
              <div
                className={
                  isItemOpen
                    ? styles.accordionAnswerContainer__open
                    : styles.accordionAnswerContainer
                }
                aria-label="button"
                onClick={() => toggleAnswer(item.id)} 
              >
                <span className={styles.answerMark}>A：</span>
                {item.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};