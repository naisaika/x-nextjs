import React from 'react'
import styles from "./ResumeHowTo.module.scss"
import { RESUME_HOW_TO } from '@/data/data'
import { RESUME_HOWTO_TEXT } from './resumeHowToText/ResumeHowToText'
import Image from 'next/image'
import { FlagContentsContainer } from '@/components/parts/flagContentsContainer/FlagContentsContainer'
import { PrimaryButton } from '@/components/button/primaryButton/PrimaryButton'

export const ResumeHowTo = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
            履歴書の各項目には、書き方のポイントがあります。<br/>
            それぞれのポイントを掴んで、作成して行きましょう！
        </p>
        {RESUME_HOW_TO.map((point) => {

          const pointText = RESUME_HOWTO_TEXT.find((text) => point.id === text.id)
          
          return (
            point.id === 1? (
              <div key={point.id} className={styles.resumePoint}>
              <h3 className={styles.resumePointTitle}>{point.title}</h3>
              <div className={styles.line}></div>
              <div className={styles.resumePointContainer}>
                <Image 
                  src={point.img} 
                  alt="履歴書画像" 
                  width={point.width} 
                  height={point.height} 
                  priority 
                  className={styles.pointImg}/>
                {pointText?.text}
              </div>
              <FlagContentsContainer
                title={"年度の書き方にルールはある？"}
                text={
                  <>
                    <p>
                      履歴書の年度の書き方に指定はありません。西暦でも和暦でもどちらでも問題ありませんが、統一して書く必要があります。<br/>
                      西暦と和暦が混在した記載は、読み手が時系列を把握しにくくなるため非推奨です。<br/>
                      和暦で書く場合は、元号をアルファベット表記で省略せず、「平成」「令和」など正式な表記で書きます。<br/>
                      また、年号の最初の年は「1年」ではなく、「元年」と記載しましょう。<br/>
                      パソコンで作成する場合は、数字の全角と半角を混在しないように注意しましょう。<br/>
                      卒業年月日の算出は、「年度早見表」を活用すると正確な年月日を素早く入手できます。
                    </p>
                    <PrimaryButton link="https://www.jcb.co.jp/processing/share/wareki.html">
                      <Image src="/contents-img/guide01/link.svg" alt="linkアイコン" width={24} height={24} priority/>
                      <p>
                        <span>年度早見表</span>
                        <span>はこちら</span>
                      </p>
                    </PrimaryButton>
                  </>
                }
                />
            </div>
            ) : (
              <div key={point.id} className={styles.resumePoint}>
              <h3 className={styles.resumePointTitle}>{point.title}</h3>
              <div className={styles.line}></div>
              <div className={styles.resumePointContainer}>
                <Image 
                  src={point.img} 
                  alt="履歴書画像" 
                  width={point.width} 
                  height={point.height} 
                  priority 
                  className={styles.pointImg}/>
                {pointText?.text}
              </div>
            </div>
            )
        )})}
    </div>
  )
}
