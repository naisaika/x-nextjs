import { Attention } from '@/components/parts/attention/Attention'
import Image from 'next/image'
import React from 'react'
import styles from './WorkExperience.module.scss'
import { CheckListType } from '@/data/data';

const CHECK_LISTS: CheckListType[] = [
  { id: 0, contents: "内容が簡潔にまとまっているか？" },
  { id: 1, contents: "提出書類として不備（誤字脱字の有無・記入漏れ・写真忘れなど）がないか？" }
]

export const WorkExperienceSample = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.sampleContainer}>
        <div className={styles.sampleImgContainer}>
          <div className={styles.sampleImg}>
            <Image src="/contents-img/guide02/workexperience-sample1.jpg" alt="職務経歴書サンプル" width={440} height={540} priority/>
            <Image src="/contents-img/guide02/workexperience-sample2.jpg" alt="職務経歴書サンプル" width={440} height={540} priority/>
          </div>
          <Attention>
            履歴書は、応募者の「顔」。正しい情報の記載と見やすさを心がけて！
          </Attention>
        </div>
        <p className={styles.guideText}>
          履歴書は、企業の採用担当者にとって応募者の「顔」となります。<br></br>
          そのため、採用担当者が手にした時に「読みたい」と感じるように作成する必要があります。
        </p>
        <ul className={styles.list}>
          {CHECK_LISTS.map((list) => (
          <li key={list.id} className={styles.listItem}>
            <Image 
              src="/list-mark/check.png"
              alt="チェックマーク画像"
              width={24}
              height={24}
              priority>
            </Image>
            <span>{list.contents}</span>
          </li>
        ))}
        </ul>
        <p className={styles.guideText}>これらのことに注意しながら作成しましょう。</p>
      </div>
    </div>
  )
}
