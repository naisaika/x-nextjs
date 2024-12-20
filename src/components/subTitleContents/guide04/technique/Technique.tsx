import React from 'react';
import styles from "./Technique.module.scss";
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { TECHNIQUE_TEXT } from './techniqueText/TechniqueText';
import Image from 'next/image';
import { H3TitleType } from '@/data/data';

const H3_TITLE: H3TitleType[] = [
  { id: 0, titleNum: "①", title: "話し方" },
  { id: 1, titleNum: "②", title: "非言語コミュニケーション" },
  { id: 2, titleNum: "③", title: "質問への応答" },
  { id: 3, titleNum: "④", title: "逆質問の準備" },
]

export const Technique = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.imgContainer}>
        <Image src="/contents-img/guide04/technique.png" 
            alt="コンテンツ画像" 
            width={560} height={320} priority
            className={styles.subImg}>
        </Image>
      </div>    
        <p className={styles.guideText}>
          面接は、コミュニケーションです。相手の話をきちんと聞き、気持ちを汲み取りながら共感が得られるように心がけましょう。<br></br>
          格好つけたり演技をしたりせず、ありのままの自分で自分の言葉で伝えることが大切です。
        </p>
        <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => {

              const techniqueText = TECHNIQUE_TEXT.find((text) => text.id === title.id);

              return (
                <li key={title.id}>
                    <ContentsTitle>
                      <span>{title.titleNum}</span>
                      <span>{title.title}</span>
                    </ContentsTitle>
                    <div className={styles.line}></div>
                    <div className={styles.textContainer}>{techniqueText?.text}</div>
                </li>
            )})}
        </ul>
    </div>
  )
}