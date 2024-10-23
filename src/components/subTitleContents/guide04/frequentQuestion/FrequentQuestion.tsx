import React from 'react';
import styles from "./FrequentQuestion.module.scss";
import Image from 'next/image';
import { ContentsTitle } from '@/components/contentsTitle/ContentsTitle';
import { QUESTION_TEXT } from './questionText/QuestionText';

interface H3TitleType {
  id: number;
  title: string;
}

const H3_TITLE: H3TitleType[] = [
  { id: 0, title: "①自己PR" },
  { id: 1, title: "②転職理由" },
  { id: 2, title: "③志望動機" },
  { id: 3, title: "④将来のビジョン" },
]

export const FrequentQuestion = () => {
  return (
    <div className={styles.contentsWrapper}>
        <div className={styles.imgContainer}>
            <Image src="/contents-img/guide04/question.png" 
                alt="コンテンツ画像" 
                width={560} height={320} priority
                className={styles.subImg}>
            </Image>
        </div>    
        <p className={styles.guideText}>
          面接では、「自己PR」「転職理由」「志望動機」「将来のビジョン」はよく聞かれる質問です。<br></br>
          事前にしっかりと準備し、自信を持って答えられるようにしましょう。
        </p>
        <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => {

              const questionText = QUESTION_TEXT.find((text) => text.id === title.id);

              return (
                <li key={title.id}>
                    <ContentsTitle>{title.title}</ContentsTitle>
                    <div className={styles.line}></div>
                    <div className={styles.textContainer}>{questionText?.text}</div>
                </li>
            )})}
        </ul>
    </div>
  )
}