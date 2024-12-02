import React from 'react';
import styles from "./CheckBelongings.module.scss";
import Image from 'next/image';

interface belongingsListType {
    id: number;
    title: string;
    img: string;
    text: string;
    text2?: string;
}

const BELONGINGS_LISTS: belongingsListType[] = [
    { 
        id: 0, 
        title: "応募企業への提出書類", 
        img: "/contents-img/guide03/documents.png", 
        text: "履歴書・職務経歴書、その他企業に提出を求められている書類など一式をきちんと揃えましょう。"
    },
    { 
        id: 1, 
        title: "応募書類・求人情報のコピー", 
        img: "/contents-img/guide03/copy-document.png",
        text: "面接前に応募書類に記載した内容と応募した求人情報の内容を最終確認するために使います。",
        text2: "面接で書類や募集情報の内容と食い違ったことを話さないためにも直前に内容確認できるよう持参しましょう。"
    },
    {
        id: 2,
        title: "筆記用具・スケジュール/メモ帳",
        img: "/contents-img/guide03/note.png",
        text: "面接時に企業から今後の予定を踏まえて日程調整などを求められることもあります。",
        text2: "すぐにメモしたり直近のスケジュールを確認できるよう準備しておきましょう。"
    },
    {
        id: 3,
        title: "スマートフォン・携帯電話",
        img: "/contents-img/guide03/phone.png",
        text: "交通機関の遅延など面接の時間に間に合わなくなるような万が一の時ため、緊急連絡用として必要です。",
        text2: "事前に充電も行い、応募企業の採用担当者の連絡先も登録しておきましょう。"
    },
    {
        id: 4,
        title: "現金・交通費",
        img: "/contents-img/guide03/money.png",
        text: "面接会場までに必要な交通費が不足しないように準備しましょう。",
        text2: "ICカードへのチャージが足りない時や不具合で利用できない時のために現金も持ち歩くようにしましょう。"
    },
    {
        id: 5,
        title: "腕時計",
        img: "/contents-img/guide03/clock.png",
        text: "面接会場に到着後、スマートフォンや携帯電話の操作は緊張感が足りていない印象を与えてしまい好ましくありません。",
        text2: "時間を確認したい時には、腕時計で確認するようにしましょう。"
    },
    {
        id: 6,
        title: "ハンカチ・ティッシュ",
        img: "/contents-img/guide03/handkerchief.png",
        text: "社会人マナーとして必需品となります。",
        text2: "身だしなみの一環として持参しましょう。"
    },
    {
        id: 7,
        title: "身分証明書・印鑑",
        img: "/contents-img/guide03/id.png",
        text: "企業によってはセキュリティ管理が厳しく、身分証明書を提示しないと入れない所もあります。",
        text2: "また、交通費の清算で領収書に印鑑が必要なケースもありますので、持参するとよいでしょう。"
    },
    {
        id: 8,
        title: "鏡・ヘアブラシ",
        img: "/contents-img/guide03/mirror.png",
        text: "面接前に身だしなみを最終チェックするために使います。",
        text2: "風の強い日や雨の日、夏の暑い日など身だしなみが崩れやすい時にも直前に身だしなみを整えられるようにしましょう。"
    },
    {
        id: 9,
        title: "折り畳み傘",
        img: "/contents-img/guide03/umbrella.png",
        text: "面接会場に向かうまでに天候が崩れる可能性もあります。",
        text2: "突然の雨によって身だしなみが乱れることのないよう折り畳み傘を持参しましょう。"
    }
]

export const CheckBelongings = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
            面接当日に必要な持ち物の一覧です。<br></br>
            前日までにきちんと準備し、当日は忘れ物のないように出かけましょう。
        </p>
        <ul className={styles.list}>
            {BELONGINGS_LISTS.map((list) => {
                return (
                    <li key={list.id} className={styles.listContents}>
                        <h3 className={styles.listTitle}>{list.title}</h3>
                        <Image src={list.img} alt="持ち物画像" width={120} height={90} priority></Image>
                        <div>
                            <p className={styles.listText}>{list.text}</p>
                            <p className={styles.listText}>{list.text2}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
