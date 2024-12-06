import { EditorSection } from '@/components/parts/editorSection/EditorSection'
import { EDITOR_COMMENTS } from '@/data/data'
import React from 'react'
import styles from './CareerChangeCount.module.scss'

const comment = EDITOR_COMMENTS[5]

export const CareerChangeCount = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.container}>
        <p className={styles.guideText}>
          転職回数が多い人は、職務経歴書のフォーマット選びを工夫します。<br/>
          「編年体式」や「逆編年体式」のフォーマットではなく、「キャリア式」のフォーマットを選択することがおすすめです。<br/>
          キャリア式は、業務内容を中心にまとめることができるため、時系列の並びに左右されない職務経歴書を作成することができます。<br/>
          また、習得したスキルを分りやすく伝えられるようにし、取得した資格があれば積極的にアピールをすることで、キャリアアップに積極的な人物であるというイメージを与えることもできます。<br/>
          経歴が多くても省略はしてはいけません。<br/>
          経歴詐称を疑われないようにするために、正直に全て記載しましょう。<br/>
          「飽きっぽい」「定着性がない」「持続性がない」などと思われないようにするためにキャリアの一貫性を重視した内容にまとめることがポイントです。
        </p>
        <EditorSection comment={comment}/>
      </div>
    </div>
  )
}
