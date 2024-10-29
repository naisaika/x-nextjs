import React from 'react';
import styles from "./CheckAppearance.module.scss";
import Image from 'next/image';
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { APPEARANCE_TEXT } from './appearanceText/AppearanceText';

interface appearanceType {
    id: number;
    title: string;
    img: string;
}

const APPEARANCE_LISTS: appearanceType[] = [
    { 
        id: 0, 
        title: "服装", 
        img: "/contents-img/guide03/fashion.png"
    },
    { 
        id: 1, 
        title: "髪型", 
        img: "/contents-img/guide03/hair.png"
    },
    {
        id: 2,
        title: "メイク", 
        img: "/contents-img/guide03/make.png"
    },
    {
        id: 3,
        title: "アクセサリー・ネイル", 
        img: "/contents-img/guide03/nail.png"
    }
]

export const CheckAppearance = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
            面接では、第一印象が大切です。<br></br>
            社会人として基本的なビジネスマナーを踏まえ、清潔感のある印象を与える身だしなみを心がけましょう。
        </p>
        {APPEARANCE_LISTS.map((list) => {

            const listText = APPEARANCE_TEXT.find((text) => text.id === list.id)

            return (
                <div key={list.id}>
                    <ContentsTitle>{list.title}</ContentsTitle>
                    <div className={styles.line}></div>
                    <div className={styles.listContents}>
                        <Image 
                            src={list.img} 
                            alt="身だしなみ画像" 
                            width={460} height={264} priority
                            className={styles.listImg}
                        >
                        </Image>
                        {listText?.text}
                    </div>
                </div>
            )
        })}
    </div>
  )
}
