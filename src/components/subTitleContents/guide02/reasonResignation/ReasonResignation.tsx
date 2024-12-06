import React from 'react'
import styles from './ReasonResignation.module.scss'
import { FlagContentsContainer } from '@/components/parts/flagContentsContainer/FlagContentsContainer'
import { NumberList } from '@/components/parts/numberList/NumberList'
import { REASON_RESIGNATION } from '@/data/data'

export const ReasonResignation = () => {
  return (
    <div className={styles.contentsWrapper}>
    <div className={styles.resumeContainer}>
      <p className={styles.guideText}>
        職務経歴書には、基本的に退職理由は記載しませんが、やむを得ない事情や前向きな理由がある場合は記載することもあります。
      </p>
      <FlagContentsContainer
        title={"退職理由を記載した方が良いケース"}
        text={
          <NumberList list={REASON_RESIGNATION}></NumberList>
        }
      />
      <p className={styles.guideText}>
        特に転職回数が多い場合や前職を短期間で離職した場合など経歴の中で応募先の企業にマイナスイメージを与える可能性があるケースでは、
        退職理由を記載することで前向きな理由があったことをアピールできます。<br/>
        また、キャリアップやスキルアップなど応募先の企業へのアピールポイントとなる場合も退職理由を記載します。
      </p>
    </div>
  </div>
  )
}
