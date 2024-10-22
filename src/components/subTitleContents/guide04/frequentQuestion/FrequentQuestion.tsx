import React from 'react';
import styles from "./FrequentQuestion.module.scss";
import Image from 'next/image';

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
          事前にしっかりと準備し、自信を持って答えられるようにしましょう。<br></br>
        </p>
    </div>
  )
}