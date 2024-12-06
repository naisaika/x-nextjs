import React from 'react'
import { WORK_EXPERIENCE_HOW_TO } from '@/data/data'
import styles from './WorkExperiencePoint.module.scss'
import Image from 'next/image'
import { FlagContentsContainer } from '@/components/parts/flagContentsContainer/FlagContentsContainer'
import { WORK_EXPERIENCE_HOWTO_TEXT } from './workExperiencePointText/WorkExperiencePointText'
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle'

export const WorkExperiencePoint = () => {
  return (
    <div className={styles.contentsWrapper}>
    <p className={styles.guideText}>
        履歴書の各項目には、書き方のポイントがあります。<br/>
        それぞれのポイントを掴んで、作成して行きましょう！
    </p>
    {WORK_EXPERIENCE_HOW_TO.filter(point => point.id !== 2).map((point) => {

      const pointText = WORK_EXPERIENCE_HOWTO_TEXT.find((text) => point.id === text.id)

      const flagSection = WORK_EXPERIENCE_HOW_TO.find((item) => item.id === 2);
      return (
        point.id === 1? (
          <div key={point.id} className={styles.point}>
            <ContentsTitle>{point.title}</ContentsTitle>
            <div className={styles.line}></div>
            <div className={styles.pointContainer}>
              <Image 
                src={point.img} 
                alt="職務経歴書画像" 
                width={point.width} 
                height={point.height} 
                priority 
                className={styles.pointImg}/>
              {pointText?.text}
            </div>
            {flagSection && (
              <FlagContentsContainer
                title={"現職についての書き方"}
                text={
                    <div className={styles.pointContainer}>
                      <Image 
                        src={flagSection.img} 
                        alt="職務経歴書画像" 
                        width={flagSection.width} 
                        height={flagSection.height} 
                        priority 
                        className={styles.pointImg}
                      />
                      <p>
                        職務経歴書の現職の欄には、在職中であることを示す表記が必要です。<br/>
                        「期間」には「〇〇年×月～現在」と記載し、「現在も就業中である」ことを分かるようにします。<br/>
                        「業務内容」には、「現在に至る」と「以上」を記載して締めることで、
                        同様に「現在も就業中である」ことと「記載が終わりである」ということを分かるようにします。<br/>
                        既に退職が決定しており、有休消化中の場合も「在職中」と同じ扱いになります。<br/>
                        退職日が決まっている場合は、「現在に至る（〇月×日付けで退職予定）」と「以上」を記載し、
                        退職日も併せて記載をすれば問題ありません。  
                      </p>
                  </div>
                }
              />
            )}
          </div>
        ) : (
          <div key={point.id} className={styles.point}>
            <h3 className={styles.pointTitle}>{point.title}</h3>
            <div className={styles.line}></div>
            <div className={styles.pointContainer}>
              <Image 
                src={point.img} 
                alt="職務経歴書画像" 
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
