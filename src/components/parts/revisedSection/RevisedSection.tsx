import React from 'react'
import styles from "./RevisedSection.module.scss"
import Image from 'next/image';

interface revisedListType {
    id: number;
    title: string;
    img: string;
    img2: string;
    text: string;
    text2?: string;
}

const REVISED_LISTS: revisedListType[] = [
    { 
        id: 0, 
        title: "作り直しがベスト", 
        img: "/contents-img/revised-mark1.png", 
        img2: "/contents-img/revised1.jpg",
        text: "他の応募者がいる場合は比較対象とされて不利となってしまう可能性もあります。",
        text2: "やむを得ない事情がない限りは、一から書き直しをすることをおすすめします。"
    },
    { 
        id: 1, 
        title: "時間がない時は訂正印", 
        img: "/contents-img/revised-mark2.png",
        img2: "/contents-img/revised2.png",
        text: "時間に余裕がない状況で訂正が必要な場合は、二重線を定規を使って引いて訂正印を押し、正しい内容を二重線の上に記載します。"
    },
    {
        id: 2,
        title: "修正液・修正テープはNG",
        img: "/contents-img/revised-mark3.png",
        img2: "/contents-img/revised3.jpg",
        text: "誤字・脱字を修正する場合は、修正液や修正テープを使用してはいけません。",
        text2: "それらの使用は、第三者による内容の改ざんを疑われる原因となります。"
    }
]

export const RevisedSection = () => {
  return (
    <ul className={styles.list}>
        {REVISED_LISTS.map((list) => {
            return (
                <li key={list.id} className={styles.listContents}>
                    <h3 className={styles.listTitle}>{list.title}</h3>
                    <Image src={list.img} alt="判定画像" width={80} height={80} priority></Image>
                    <Image src={list.img2} alt="修正例画像" width={160} height={120} priority></Image>
                    <div>
                        <p className={styles.listText}>{list.text}</p>
                        <p className={styles.listText}>{list.text2}</p>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}