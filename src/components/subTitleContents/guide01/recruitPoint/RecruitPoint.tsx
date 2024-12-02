import React from 'react'
import styles from "./RecruitPoint.module.scss"
import { EDITOR_COMMENTS } from '@/data/data'
import { EditorSection } from '@/components/parts/editorSection/EditorSection'

export const RecruitPoint = () => {
  return (
    <div className={styles.contentsWrapper}>
        <div className={styles.recruitPointContainer}>
            <p className={styles.guideText}>
                採用担当者は、履歴書から応募者の簡単な人物像をつかもうとします。<br/>
                丁寧に見やすく記載されているか？など読み手を意識した文書作成を心がけ、日付が最新の状態になっているか？のようなビジネス文書としての気配りも忘れないようにしましょう。<br/>
                転職回数や勤続年数も重視するポイントとなりますので、嘘の情報は書かずに正確な内容を書きましょう。<br/>
                また、募集要件を満たしたスキルや経験、資格などを所有しているか？も確認ポイントとなります。<br/>
            </p>
            <EditorSection comment={EDITOR_COMMENTS[1]}/>
        </div>
    </div>
  )
}
