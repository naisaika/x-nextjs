import Image from 'next/image';
import React from 'react';
import styles from "./RelativePageSection.module.scss";
import Link from 'next/link';

interface SectionIdProps {
    sectionId: number;
}

interface RelativePageType {
    id: number;
    img: string;
    title: string;
    text: string;
    text2: string;
    text3?: string;
    link: string;
}

const RELATIVE_PAGE: RelativePageType[] = [
    {
        id: 0,
        img: "/top-img/guide02-top.png",
        title: "魅力的に伝える！職務経歴書の書き方",
        text: "職務経歴書とは、仕事に関する経験やスキル、自己PRをまとめた書類です。",
        text2: "応募者のプロフィール情報を記載し形式がほとんど決められている履歴書と異なり、職務経歴書は、自身の経歴に合わせて自由な形式と表現で作成することができます。",
        link: "/candidate/guide02"
    },
    {
        id: 1,
        img: "/top-img/guide03-top.png",
        title: "準備編｜面接対策ガイド",
        text: "内定を掴むためには、準備が何よりも大切！",
        text2: "面接当日になって不安にならないためにもしっかりと準備を行いましょう。",
        text3: "企業や自己の分析から持ち物や身だしなみのチェックリストまで解説しています。",
        link: "/candidate/guide03"
    },
    {
        id: 2,
        img: "/top-img/guide04-top.png",
        title: "当日編｜面接対策ガイド",
        text: "面接当日に自信を持って挑めるように、面接当日の流れや注意点のイメージを固めておきましょう。",
        text2: "面接での受け答えのテクニックや面接官がどんな視点で評価をしているかを解説しています。",
        link: "/candidate/guide04"
    },
    {
        id: 3,
        img: "/top-img/guide03-top.png",
        title: "準備編｜面接対策ガイド",
        text: "内定を掴むためには、準備が何よりも大切！",
        text2: "面接当日になって不安にならないためにもしっかりと準備を行いましょう。",
        text3: "企業や自己の分析から持ち物や身だしなみのチェックリストまで解説しています。",
        link: "/candidate/guide03"
    },
]

export const RelativePageSection = ({sectionId}: SectionIdProps) => {

    const matchedId = RELATIVE_PAGE.find((page) => page.id === sectionId);

    if (!matchedId || !matchedId.link) {
        return null;
    }

  return (
    <Link href={matchedId?.link} className={styles.link}>
        <div className={styles.relativeSection}>
            {matchedId?.img && 
                <Image src={matchedId.img} alt="ガイドサムネイル画像" width={160} height={99} priority></Image>
            }
            <div>
                <p className={styles.relativeTitle}>{matchedId?.title}</p>
                <p className={styles.relativeText}>
                    {matchedId?.text}<br></br>
                    {matchedId?.text2}<br></br>
                    {matchedId?.text3}
                </p>
            </div>
        </div>
    </Link>
  )
}
