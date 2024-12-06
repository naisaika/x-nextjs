import React from 'react'
import { WORK_EXPERIENCE_POINTS } from '@/data/data'
import { WORK_EXPERIENCE_POINT_TEXT } from './prepareWorkExperienceText/PrepareWorkExperienceText'
import styles from './PrepareWorkExperience.module.scss'

export const PrepareWorkExperience = () => {
  return (
    <div className={styles.contentsWrapper}>

    <ul className={styles.contentsList}>
      {WORK_EXPERIENCE_POINTS.map((point) => {

        const resumePointText = WORK_EXPERIENCE_POINT_TEXT.find((text) => text.id === point.id);

        return (
          <li key={point.id} className={styles.pointItem}>
            <h3 className={styles.pointTitle}>{point.title}</h3>
            <div className={styles.line}></div>
              {resumePointText?.text}
          </li>
      )})}
    </ul>
</div>
  )
}
