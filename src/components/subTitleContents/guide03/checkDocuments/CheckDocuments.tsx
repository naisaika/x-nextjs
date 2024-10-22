import React from 'react';
import styles from "./CheckDocuments.module.scss";
import Image from 'next/image';
import Link from 'next/link';

interface checkListType {
    id: number;
    title: string;
    img?: string;
    text: string;
    text2?: string;
    link?: string;
}

const CHECK_LISTS: checkListType[] = [
    { 
        id: 0, 
        title: "履歴書", 
        img: "/top-img/guide01-top.png", 
        text: "履歴書の書き方や確認のポイントは",
        text2: "こちら",
        link: "/candidate/guide01"
    },
    { 
        id: 1, 
        title: "職務経歴書", 
        img: "/top-img/guide02-top.png",
        text: "職務経歴書の書き方や確認のポイントは",
        text2: "こちら",
        link: "/candidate/guide02"
    },
    {
        id: 2,
        title: "その他書類",
        text: "企業から依頼されたその他の提出書類がある場合も必ず内容を確認し、忘れずに持参しましょう。"
    }
]

export const CheckDocuments = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
            面接当日に持参する提出書類の確認を忘れずに行いましょう。<br></br>
            事前に応募企業へ提出をしている場合でも、データでの送付は原紙の提出を求められるケースがあります。<br></br>
            原紙を持参する場合は、折り目や汚れがつかないようクリアファイルへ入れておきましょう。
        </p>
        <ul className={styles.list}>
            {CHECK_LISTS.map((list) => {
                return (
                    <li key={list.id}>
                        <h3 className={styles.listTitle}>{list.title}</h3>
                        {list.id === 0 || 1? (
                        <>
                            {list.img && list.link && (
                                <Link href={list.link}>
                                    <Image
                                        src={list.img}
                                        alt="持ち物確認サムネイル画像"
                                        width={298}
                                        height={184}
                                        priority
                                        className={styles.listImg}
                                    />
                                </Link>
                            )}
                            <p className={styles.listText}>
                                {list.text}
                                {list.link &&
                                    <Link href={list.link} className={styles.listText__link}>{list.text2}</Link>
                                }    
                            </p>
                        </>
                        ):( 
                            <>
                                <p>{list.title}</p>
                                <p>{list.text}</p>
                            </>
                        )}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
