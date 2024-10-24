import Image from 'next/image';
import React from 'react';
import styles from "./Imporovement.module.scss";
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { H3TitleType } from '@/data/data';

const H3_TITLE: H3TitleType[] = [
  { id: 0, title: "①自己評価" },
  { id: 1, title: "②次回への準備" }
]

export const Imporovement = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.imgContainer}>
          <Image src="/contents-img/guide04/improvement.png" 
              alt="コンテンツ画像" 
              width={560} height={320} priority
              className={styles.subImg}>
          </Image>
      </div>    
      <p className={styles.guideText}>
        面接が終わった後に振り返りを行い、次回に向けて改善することは大切です。<br></br>
        同じ失敗を繰り返ししないように、上手くできたところはより良くできるようにするために、是非振り返りと改善を行い、面接の精度を上げて行きましょう。
      </p>
      <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => {

              // const questionText = VIEW_OF_INTERVIEWER_TEXT.find((text) => text.id === title.id);

              return (
                <li key={title.id}>
                    <ContentsTitle>{title.title}</ContentsTitle>
                    <div className={styles.line}></div>
                    {/* <div className={styles.textContainer}>{questionText?.text}</div> */}
                </li>
            )})}
        </ul>
    </div>
  )
}