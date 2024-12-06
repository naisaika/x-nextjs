import { EditorSection } from '@/components/parts/editorSection/EditorSection'
import React from 'react'
import { EDITOR_COMMENTS } from '@/data/data'
import styles from './RecruitPoint.module.scss'

export const RecruitPoint = () => {
  return (
    <div className={styles.contentsWrapper}>
    <div className={styles.recruitPointContainer}>
        <p className={styles.guideText}>
          採用担当者は、職務経歴書から経験やスキルが募集内容に合致しているかどうか？を判断します。<br/>
          内容がきちんと伝わるように読み手を意識して、今までの経歴を分かりやすく簡潔にまとめましょう。<br/>
          また、自身の強みについてのアピールは、企業が求めている人材に対して正しく理解できているかどうか？を測るポイントにもなります。
        </p>
        <EditorSection comment={EDITOR_COMMENTS[7]}/>
    </div>
</div>
  )
}
