// "use client";

import React from 'react';
import { GUIDE_DATA, GUIDE_SECTION_CONTENTS } from '@/data/data';
import styles from "./Guidetop.module.scss";
import Image from 'next/image';
import { SubTitle } from '@/components/parts/subtitle/SubTitle';
// import { ListMarkNumber } from '@/components/parts/listMark/listMarkNumber/ListMarkNumber';
import { PrimaryButton } from '@/components/button/primaryButton/PrimaryButton';
// import TopTitle from '@/components/parts/topTitle/TopTitle';
import dynamic from 'next/dynamic';
// import { Suspense } from "react"

// export const experimental_ppr = true

export interface PageLinkType {
  id: number;
  img: string;
  text: string;
  text2: string;
  anchorlink: string;
}

const PAGE_LINKS: PageLinkType[] = [
  { id: 0, 
    img: "/contents-img/guidetop/document.png", 
    text:"履歴書", 
    text2:"書き方", 
    anchorlink: "resume-top"},
  { id: 1, 
    img: "/contents-img/guidetop/bag.png",
    text:"職務",
    text2:"経歴書",
    anchorlink: "workExperience-top"},
  { id: 2,
    img: "/contents-img/guidetop/person.png",
    text:"面接",
    text2:"対策",
    anchorlink: "interview-top"}
]

// const TopTitleContainer = dynamic(() => import("../../../components/parts/topTitle/TopTitle"), {
//   ssr: false,
// });

const TopTitleContainer = dynamic(() => import("../../../components/parts/topTitle/TopTitle"));

const GuideTop = () => {
  return (
    <section className={`${styles.section} ${styles.sectionBackground}`}>
      {/* <Suspense fallback="loading"> */}
        <TopTitleContainer pageLinks={PAGE_LINKS}/>
      {/* </Suspense> */}
      {/* <TopTitle pageLinks={PAGE_LINKS}/> */}
      <div className={`${styles.wrapper} ${styles.topMargin}`}>
        {GUIDE_DATA.map((data) => {
          const link = PAGE_LINKS.find((link) => link.id === data.id);
            return (
            <div id={link?.anchorlink} className={styles.contentsSection} key={data.id}>
              <SubTitle>{data.topText}</SubTitle>
              {data.id === 0 && (
                <p className={styles.listText}>
                  履歴書とは、求職者が企業の求人へ応募をする際に提出する書類です。
                  企業は、応募して来た求職者の履歴書からその人の人物像を大まかに把握するために使用します。
                  履歴書は、基本的に記載内容が決まっているため、一度作成経験があればその後大きく悩むことはありません。
                </p>
              )}
              {data.id === 1 && (
                <p className={styles.listText}>
                  職務経歴書とは、仕事に関する経験やスキル、自己PRをまとめた書類です。
                  応募者のプロフィール情報を記載し、形式がほとんど決められている履歴書と異なり、
                  職務経歴書は、自身の経歴に合わせて自由な形式と表現で作成することができます。
                </p>
              )}
              {data.id === 2 && (
                <p className={styles.listText}>
                  内定を掴むためには、準備が何よりも大切！
                  面接当日になって不安にならないためにもしっかりと準備を行いましょう。
                  企業や自己の分析から持ち物や身だしなみのチェックリストまで解説しています。
                </p>
              )}
              {data.id === 3 && (
                <p className={styles.listText}>
                  面接当日に自信を持って挑めるように、面接当日の流れや注意点のイメージを固めておきましょう。
                  面接での受け答えのテクニックや面接官がどんな視点で評価をしているかを解説しています。
                </p>
              )}
              <div className={styles.detailContainer}>
                <Image 
                  src={data.img} 
                  alt="セクショントップ画像" 
                  width={460} height={285} 
                  priority
                  className={styles.topSectionImg}
                >
                </Image>
                <div className={styles.detailText}>
                  <h3 className={styles.detailTitle}>こんなポイントを押さえています！</h3>
                  <div className={styles.line}></div>
                  <ol className={styles.list}>
                    {GUIDE_SECTION_CONTENTS[data.id].contents.map((content, index) => (
                      <li key={content.id} className={styles.listText}>
                        <span className={styles.listMark__number}>{index + 1}</span>
                        {/* <ListMarkNumber className={styles.adjustMargin}>{index + 1}</ListMarkNumber> */}
                        <span className={styles.contentText}>{content.contentsTitle}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <PrimaryButton link={data.link || "#"}>
                <span className={styles.buttonText}>{data.topText}</span>
                <Image src="/list-mark/right.png" alt="ボタンアイコン" width={24} height={24} priority></Image>
              </PrimaryButton>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default GuideTop