import React from 'react'
import styles from './HandOrInput.module.scss'
import Image from 'next/image'
import { EditorSection } from '@/components/parts/editorSection/EditorSection'
import { EDITOR_COMMENTS } from '@/data/data'
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle'

interface pointTitleType {
  id: number;
  title: string;
}

interface tableListType {
  id: number;
  title: string;
  text: string;
}

const POINT_TITLE: pointTitleType[] = [
  { id: 0, title: "その他抑えるべきポイント" },
  { id: 1, title: "適切なページ数は？" },
]

const TABLE_LISTS: tableListType[] = [
  {
      id: 0, 
      title: "向き・サイズ",
      text: "A4用紙のタテが基本"
  },
  {
      id: 1, 
      title: "紙色",
      text: "白無地"
  },
  {
      id: 2, 
      title: "印刷",
      text: "片面に印刷する"
  },
  {
      id: 3, 
      title: "フォント（パソコンで作成する場合）",
      text: "フォントはWordやExcelで使用されている標準フォントを使用"
  },
  {
      id: 4, 
      title: "文字サイズ（パソコン）",
      text: "10.5～11pt"
  },
  {
    id: 5, 
    title: "文字サイズ（手書き）",
    text: "枠の8〜9割のサイズ"
  },
]

const comment = EDITOR_COMMENTS[2]

export const HandOrInput = () => {
  return (
   <div className={styles.contentsWrapper}>
    <div className={styles.imgContainer}>
        <Image src="/contents-img/guide02/hand-or-input.jpg" 
            alt="コンテンツ画像" 
            width={560} height={320} priority
            className={styles.subImg}>
        </Image>
    </div>    
    <p className={styles.guideText}>
      職務経歴書の作成に手書きとパソコンどちらが良いのか？の指定はありません。<br/>
      自分にとって作りやすい方法を選べば問題ありません。<br/>
      ただし、企業からの指定がある場合は指定された方法で作成する必要があります。<br/>
      手書きで作成する場合は、消えるボールペンを使用して書いてはいけません。<br/>
      文字の大きさを揃え、相手が読みやすくなるように丁寧に書くことを心がけましょう。<br/>
      パソコンで作成する場合は、漢字の変換ミスに注意しましょう。<br/>
    </p>
    <EditorSection comment={comment}/>  
      <ul className={styles.contentsList}>
            {POINT_TITLE.map((title) => {

              const questionText = QUESTION_TEXT.find((text) => text.id === title.id);

              return (
                <li key={title.id}>
                    <ContentsTitle>
                      <span>{title.titleNum}</span>
                      <span>{title.title}</span>
                    </ContentsTitle>
                    <div className={styles.line}></div>
                    <div className={styles.textContainer}>{questionText?.text}</div>
                </li>
            )})}
        </ul>
</div>
  )
}
