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
  title1: string;
  title2?: string;
  text: string;
}

const POINT_TITLE: pointTitleType[] = [
  { id: 0, title: "その他抑えるべきポイント" },
  { id: 1, title: "適切なページ数は？" },
]

const TABLE_LISTS: tableListType[] = [
  {
      id: 0, 
      title1: "向き・サイズ",
      text: "A4用紙のタテが基本"
  },
  {
      id: 1, 
      title1: "紙色",
      text: "白無地"
  },
  {
      id: 2, 
      title1: "印刷",
      text: "片面に印刷する"
  },
  {
      id: 3, 
      title1: "フォント",
      title2: "（パソコンで作成する場合）",
      text: "フォントはWordやExcelで使用されている標準フォントを使用"
  },
  {
      id: 4, 
      title1: "文字サイズ",
      title2: "（パソコン）",
      text: "10.5～11pt"
  },
  {
    id: 5, 
    title1: "文字サイズ",
    title2: "（手書き）",
    text: "枠の8〜9割のサイズ"
  },
]

const comment = EDITOR_COMMENTS[2]
const comment2 = EDITOR_COMMENTS[3]

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

              return (
                <li key={title.id}>
                    <ContentsTitle>
                      <span>{title.title}</span>
                    </ContentsTitle>
                    <div className={styles.line}></div>
                    {title.id === 0? (
                      <table >
                          <tbody className={styles.templateTable}>
                          {TABLE_LISTS.slice(0, 2).map((item) => (
                            <tr key={item.id} className={styles.tableRow}>
                                <th className={styles.tableTitle}>
                                    {item.title1}<br />
                                    {item.title2}
                                </th>
                                <td className={styles.tableContents}>
                                    {item.text}
                                </td>
                            </tr>
                            ))}
         
                            {TABLE_LISTS.slice(2, 4).map((item) => (
                            <tr key={item.id} className={styles.tableRow}>
                                <th className={styles.tableTitle}>
                                    {item.title1}<br />
                                    {item.title2}
                                </th>
                                <td className={styles.tableContents}>
                                    {item.text}
                                </td>
                            </tr>
                            ))}
                            {TABLE_LISTS.slice(4).map((item) => (
                            <tr key={item.id} className={styles.tableRow}>
                                <th className={styles.tableTitle}>
                                    {item.title1}<br />
                                    {item.title2}
                                </th>
                                <td className={styles.tableContents}>
                                  {item.text}
                                </td>
                            </tr>
                            ))}
                          </tbody>
                            
                    </table>
                    ): (
                      <>
                        <p className={styles.guideText}>
                          職務経歴書の枚数は、2枚でまとめると最適です。<br/>
                          3枚以上の職務経歴書は、採用担当者が内容を確認する負担が増えてしまいます。<br/>
                          転勤や異動が多い場合は、経験やスキルごとに整理してコンパクトにまとめましょう。<br/>
                          転職回数が多く2枚で収めることが難しい場合は、余白や行間のバランスを取り、
                          レイアウトを考慮しながら読みやすくまとめることができれば3枚以上となってしまっても問題ありません。
                        </p>
                        <EditorSection comment={comment2}/> 
                      </>
                    )}
                </li>
            )})}
        </ul>
      </div>
    )
  }
