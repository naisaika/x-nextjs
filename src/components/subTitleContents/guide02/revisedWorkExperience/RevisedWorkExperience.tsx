import React from 'react'
import styles from './RevisedWorkExperience.module.scss'
import { RevisedSection } from '@/components/parts/revisedSection/RevisedSection'

export const RevisedWorkExperience = () => {
  return (
    <div className={styles.contentsWrapper}>
    <p className={styles.guideText}>
        職務経歴書に誤字・脱字があっても記載されている内容が最も重視されるため、必ずしも不採用となるわけではなりません。<br></br>
        ただし、信頼や誠実さが求められる金融業界や正確な管理や気配りが必要とされる事務や経理の業務など業界や業種によっては誤字・脱字がマイナスイメージへつながってしまうこともあります。
    </p>
    <RevisedSection/>
</div>
  )
}
