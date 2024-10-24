import Image from 'next/image';
import React from 'react';
import styles from "./ResearchCompany.module.scss";
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { FlagContentsContainer } from '@/components/parts/flagContentsContainer/FlagContentsContainer';
import { H3TitleType } from '@/data/data';

interface checkListType {
    id: number;
    contents: string;
}

const H3_TITLE: H3TitleType[] = [
    { id: 0, title: "①企業理解を深める" },
    { id: 1, title: "②職場の雰囲気を知る" },
]

const CHECK_LISTS: checkListType[] = [
    { id: 0, contents: "企業のホームページや求人情報をきちんと見る" },
    { id: 1, contents: "ビジネス雑誌や四季報、業界地図などを用いて業界での位置づけや競合他社との差別化・優位性などを知る" },
    { id: 2, contents: "実際に企業の製品やサービスを利用し、自分の考え方との接点を見つけてみる" },
]

export const ResearchCompany = () => {
  return (
    <div className={styles.contentsWrapper}>
        <div className={styles.imgContainer}>
            <Image src="/contents-img/guide03/research-company.png" 
                alt="コンテンツ画像" 
                width={560} height={320} priority
                className={styles.subImg}>
            </Image>
        </div>    
        <p className={styles.guideText}>
            企業研究は、入社後のミスマッチを避けたり選考通過率を上げたりするために欠かせないものです。<br></br>
            応募企業の業界や特徴を把握し、理解を深めることで自分の納得できる企業選びや求人探しをしましょう。
        </p>
        <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => (
                <li key={title.id}>
                    <ContentsTitle>{title.title}</ContentsTitle>
                    <div className={styles.line}></div>
                    {title.id === 0 && 
                        <>
                            <p className={styles.contentsText}>
                                応募先企業の概要や理念、経営方針を知ることは、志望動機や活かせる経験・スキルなどのアピールに結びつきます。<br></br>
                                また、企業が求める方向性と自分のビジョンが一致しているかどうかを確認することもできるため、アンマッチな企業への転職も防ぐことができます。
                            </p> 
                            <FlagContentsContainer
                                titles={[{ id: 0, title: "企業への理解の深め方" }]}
                                text={[
                                    {
                                    id: 0,
                                    text: (
                                        <ul>
                                            {CHECK_LISTS.map((list) => (
                                                <li key={list.id}>
                                                <Image
                                                    src="/list-mark/check.png"
                                                    alt="チェックマーク画像"
                                                    width={24}
                                                    height={24}
                                                    priority
                                                />
                                                <span>{list.contents}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        )
                                    }
                                ]}
                            />
                        </>
                    }
                    {title.id === 1 && 
                        <p className={styles.contentsText}>
                            社内の雰囲気や労働環境を知ることも転職成功のカギとなります。<br></br>
                            入社後に「想像と違っていた」「こんなはずではなかった」とミスマッチを起こさないようにするためにも、転職フェアに参加して実際に働いている人の意見を聞いたり、口コミサイトの投稿を閲覧したりして、入社後の自分のイメージと相違がないことを確認しましょう。
                        </p> 
                    }
                </li>
            ))}
      </ul>
    </div>
  )
}