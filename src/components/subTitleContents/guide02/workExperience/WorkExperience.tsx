import React from 'react'
import styles from './WorkExperience.module.scss'

export const WorkExperience = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.resumeContainer}>
        <p className={styles.guideText}>
          職務経歴書とは、仕事に関する経験やスキル、自己PRをまとめた書類です。<br/>
          応募者のプロフィール情報を記載し、形式がほとんど決められている履歴書と異なり、職務経歴書は、自身の経歴に合わせて自由な形式と表現で作成することができます。<br/>
          企業の採用担当者は、職務経歴書で応募者が企業の求めている人材とマッチしているのかを確認しています。<br/>
          また、書類選考時だけでなくその後の面接でも使用される重要書類となるので、応募先の企業がより詳しく掘り下げて知りたいと思うような経験や実績、自己PRを記載する必要があります。<br/>
        </p>
      </div>
    </div>
  )
}
