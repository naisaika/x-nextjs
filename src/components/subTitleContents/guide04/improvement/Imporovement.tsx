import Image from 'next/image';
import React from 'react';
import styles from "./Imporovement.module.scss";
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { H3TitleType } from '@/data/data';
import { CheckListType } from '@/data/data';

const H3_TITLE: H3TitleType[] = [
  { id: 0, titleNum: "①", title: "自己評価" },
  { id: 1, titleNum: "②", title: "次回への準備" }
]

const CHECK_LISTS: CheckListType[] = [
  { id: 0, contents: "ビジネスマナーや身だしなみは問題ないか？" },
  { id: 1, contents: "コミュニケーション方法に問題はないか？" },
  { id: 2, contents: "業界や企業の研究が不足していないか？" },
  { id: 3, contents: "社風にマッチしていたかどうか？" },
  { id: 4, contents: "志望動機は明瞭であったか？" },
  { id: 5, contents: "積極的なアピールはできていたか？" },
]

export const Imporovement = () => {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.imgContainer}>
          <Image src="/contents-img/guide04/improvement.png" 
              alt="コンテンツ画像" 
              width={560} height={320} priority
              className={styles.subImg}>
          </Image>
      </div>    
      <p className={styles.guideText}>
        面接が終わった後に振り返りを行い、次回に向けて改善することは大切です。<br></br>
        同じ失敗を繰り返ししないように、上手くできたところはより良くできるようにするために、是非振り返りと改善を行い、面接の精度を上げて行きましょう。
      </p>
      <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => {

              return (
                <li key={title.id}>
                    <ContentsTitle>
                        <span>{title.titleNum}</span>
                        <span>{title.title}</span>
                    </ContentsTitle>
                    <div className={styles.line}></div>
                    {title.id === 0 &&
                    <>
                      <p className={styles.listText}>今回の面接で良かった点と悪かった点の洗い出しをしてみましょう。</p>
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
                      <p className={styles.listText}>
                        自分の発言や態度、面接の一通りの流れ、面接官の反応を思い出しながら振り返りをしましょう。<br></br>
                        忘れない内にメモを残しておくことで注意点や改善点が明確となり、次回の面接では改善することができます。
                      </p>
                    </>
                    }
                    {title.id === 1 &&
                      <p className={styles.listText}>
                        自己評価で洗い出しをした反省点を改善できるように行動をしてみましょう。<br></br>
                        面接の応答が上手く行かなかった場合は、面接の練習を繰り返してスムーズな受け答えができるようにしましょう。<br></br>
                        ビジネスマナーや身だしなみが良くない場合は、礼儀や敬語を意識したり、身だしなみを整えたりしましょう。<br></br>
                        業界や企業研究が不足していた場合は、前回の面接で質問された内容も踏まえて不足部分を掘り下げて研究しましょう。<br></br>
                        更に志望動機や自身の強みについても再度整理をして、しっかりとアピールできるようにしましょう。
                      </p>
                    }
                </li>
            )})}
        </ul>
    </div>
  )
}