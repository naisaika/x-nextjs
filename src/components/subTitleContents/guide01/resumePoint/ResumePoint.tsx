import React from 'react'
import styles from "./ResumePoint.module.scss"
import { RESUME_POINTS } from '@/data/data'
import { RESUME_POINT_TEXT } from './resumePointText/ResumePointText'
import Image from 'next/image'

export const ResumePoint = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
            履歴書の各項目には、書き方のポイントがあります。<br/>
            それぞれのポイントを掴んで、作成して行きましょう！
        </p>
        {RESUME_POINTS.map((point) => {

          const pointText = RESUME_POINT_TEXT.find((text) => point.id === text.id)
          
          return (
            point.id === 1? (
              <div key={point.id} className={styles.resumePoint}>
              <h3 className={styles.resumePointTitle}>{point.title}</h3>
              <div className={styles.line}></div>
              <div className={styles.resumePointContainer}>
                <Image 
                  src={point.img} 
                  alt="履歴書画像" 
                  width={point.width} 
                  height={point.height} 
                  priority 
                  className={styles.pointImg}/>
                {pointText?.text}
              </div>
            </div>
            ) : (
              <div key={point.id} className={styles.resumePoint}>
              <h3 className={styles.resumePointTitle}>{point.title}</h3>
              <div className={styles.line}></div>
              <div className={styles.resumePointContainer}>
                <Image 
                  src={point.img} 
                  alt="履歴書画像" 
                  width={point.width} 
                  height={point.height} 
                  priority 
                  className={styles.pointImg}/>
                {pointText?.text}
              </div>
            </div>
            )
        )})}
    </div>
  )
}
