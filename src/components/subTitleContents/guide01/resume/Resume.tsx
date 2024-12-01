import React from 'react'
import styles from "./Resume.module.scss"
import { EditorSection } from '@/components/parts/editorSection/EditorSection'
import { EDITOR_COMMENTS } from '@/data/data'

const comment = EDITOR_COMMENTS[0]

export const Resume = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.resumeContainer}>
        <p className={styles.guideText}>
            履歴書とは、求職者が企業の求人へ応募をする際に提出する書類です。<br></br>
            企業は、応募して来た求職者の履歴書からその人の人物像を大まかに把握するために使用します。<br></br>
            履歴書は、基本的に記載内容が決まっているため、一度作成経験があればその後大きく悩むことはありません。
        </p>
        <EditorSection comment={comment}/>
      </div>
    </div>
  )
}
