import Image from 'next/image';
import React from 'react';
import styles from "./ViewOfInterviewer.module.scss";
import { H3TitleType } from '@/data/data';
import { VIEW_OF_INTERVIEWER_TEXT } from './viewOfInterviewerText/ViewOfInterViewerText';
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';

const H3_TITLE: H3TitleType[] = [
  { id: 0, title: "①評価のポイント" },
  { id: 1, title: "②面接官の心理" }
]

export const ViewOfInterviewer = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.imgContainer}>
          <Image src="/contents-img/guide04/view.png" 
              alt="コンテンツ画像" 
              width={560} height={320} priority
              className={styles.subImg}>
          </Image>
      </div>    
      <p className={styles.guideText}>
        面接を通して企業は書類からでは分からない面接者の人柄やその人の本音を見ています。<br></br>
        一次面接と最終面接では面接官の視点も異なっています。<br></br>
        それぞれの面接に合わせてどのような所に注目しているのかを知り、面接当日に役立てましょう。
      </p>
      <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => {

              const questionText = VIEW_OF_INTERVIEWER_TEXT.find((text) => text.id === title.id);

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