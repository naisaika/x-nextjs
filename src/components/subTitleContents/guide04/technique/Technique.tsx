import React from 'react';
import styles from "./Technique.module.scss";
import { ContentsTitle } from '@/components/contentsTitle/ContentsTitle';
import { TECHNIQUE_TEXT } from './techniqueText/TechniqueText';

interface H3TitleType {
  id: number;
  title: string;
}

const H3_TITLE: H3TitleType[] = [
  { id: 0, title: "①話し方" },
  { id: 1, title: "②非言語コミュニケーション" },
  { id: 2, title: "③質問への応答" },
]

export const Technique = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
          面接は、コミュニケーションです。相手の話をきちんと聞き、気持ちを汲み取りながら共感が得られるように心がけましょう。<br></br>
          格好つけたり演技をしたりせず、ありのままの自分で自分の言葉で伝えることが大切です。
        </p>
        <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => {

              const techniqueText = TECHNIQUE_TEXT.find((text) => text.id === title.id);

              return (
                <li key={title.id}>
                    <ContentsTitle>{title.title}</ContentsTitle>
                    <div className={styles.line}></div>
                    
                    <div className={styles.textContainer}>{techniqueText?.text}</div>
                </li>
            )})}
        </ul>
    </div>
  )
}