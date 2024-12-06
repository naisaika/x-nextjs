import React from 'react'
import { EditorSection } from '@/components/parts/editorSection/EditorSection'
import { BLANK_CAREER_POINTS, EDITOR_COMMENTS } from '@/data/data'
import styles from './BlankCareer.module.scss'
import { BLANK_CAREER_TEXT } from './blankCareerText/BlankCareerText'

const comment = EDITOR_COMMENTS[6]

export const BlankCareer = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.container}>
        <p className={styles.guideText}>
          職歴に空白期間がある場合、3か月程度の期間であれば「転職活動期間」として捉えられるため職務経歴書へ記載する必要はありません。<br/>
          半年以上の空白期間がある場合は、働く意欲や健康面、人間性においての懸念点となる可能性があるため、職務経歴書への記載をします。<br/>
          空白期間を記載する時には、何をしていたのかについて理由も説明できるようにしておきましょう。
        </p>
        <EditorSection comment={comment}/>
      </div>
      <ul className={styles.contentsList}>
      {BLANK_CAREER_POINTS.map((point) => {

        const resumePointText = BLANK_CAREER_TEXT.find((text) => text.id === point.id);

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