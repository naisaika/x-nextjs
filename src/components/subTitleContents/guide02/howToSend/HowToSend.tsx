import React from 'react'
import { SEND_POINTS, SEND_TEXT } from '@/data/data'
import Image from 'next/image'
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle'
import styles from './HowToSend.module.scss'

export const HowToSend = () => {
  return (
    <div>
      <ul className={styles.contentsList}>
        {SEND_POINTS.map((point) => {
          const textContents = SEND_TEXT.find((content) => point.id === content.id);

          return (
            <li key={point.id}>
              <ContentsTitle>{point.title}</ContentsTitle>
              <div className={styles.line}></div>
              <div className={styles.contentsContainer}>
                <div className={styles.imgWrapper}>
                  <div className={styles.imgContainer}>
                    <Image src={point.img} alt="送付画像" width={460} height={point.height} priority className={styles.pointImg}/>
                    <small>{point.imgtitle}</small>
                  </div>
                  {point.img2 && (
                    <div className={styles.imgContainer}>
                      <Image src={point.img2} alt="送付画像" width={460} height={point.height2} priority className={styles.pointImg} />
                      <small>{point.imgtitle2}</small>
                    </div>
                  )}
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.textTitle}>{textContents?.title}</p>
                  <ul className={styles.list}>
                      {textContents?.detail.map((list) => (
                        <li key={list.id} className={styles.listItem}>
                          <Image 
                            src="/list-mark/check.png"
                            alt="チェックマーク画像"
                            width={24}
                            height={24}
                            priority>
                          </Image>
                          <p className={styles.sendTextList}>
                            <span>{list.flow}</span>
                            <span className={styles.textDetail}>{list.text}</span>
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};