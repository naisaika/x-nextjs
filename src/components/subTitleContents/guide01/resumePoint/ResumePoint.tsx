import React from 'react'
import { RESUME_POINTS } from '@/data/data'
import { RESUME_POINT_TEXT } from './resumePointText/ResumePointText'
import styles from "./ResumePoint.module.scss"

export const ResumePoint = () => {
  return (
    <div className={styles.contentsWrapper}>

        <ul className={styles.contentsList}>
          {RESUME_POINTS.map((point) => {

            const resumePointText = RESUME_POINT_TEXT.find((text) => text.id === point.id);

            return (
              <li key={point.id} className={styles.resumePointItem}>
                <h3 className={styles.resumePointTitle}>{point.title}</h3>
                <div className={styles.line}></div>
                  <div className={styles.textContainer}>{resumePointText?.text}</div>
              </li>
          )})}
        </ul>
    </div>
  )
}
