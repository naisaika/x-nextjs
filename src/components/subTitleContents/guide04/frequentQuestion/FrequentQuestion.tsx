import React from 'react';
import styles from "./FrequentQuestion.module.scss";
import Image from 'next/image';
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { QUESTION_TEXT } from './questionText/QuestionText';
import { H3TitleType } from '@/data/data';

const H3_TITLE: H3TitleType[] = [
  { id: 0, titleNum: "①", title: "自己PR" },
  { id: 1, titleNum: "②", title: "転職理由" },
  { id: 2, titleNum: "③", title: "志望動機" },
  { id: 3, titleNum: "④", title: "将来のビジョン" },
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
                    <ContentsTitle>
                      <span>{title.titleNum}</span>
                      <span>{title.title}</span>
                    </ContentsTitle>
                    <div className={styles.line}></div>
                    <div className={styles.textContainer}>{questionText?.text}</div>
                </li>
            )})}
        </ul>
    </div>
  )
}