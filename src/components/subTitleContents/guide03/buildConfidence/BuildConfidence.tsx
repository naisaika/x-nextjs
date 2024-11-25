import React from 'react';
import styles from "./BuildConfidence.module.scss";
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { H3TitleType } from '@/data/data';
import Image from 'next/image';

const H3_TITLE: H3TitleType[] = [
    { id: 0, titleNum: "①", title: "面接当日のシミュレーションを行う" },
    { id: 1, titleNum: "②", title: "根拠のない自信を持つ" },
    { id: 2, titleNum: "③", title: "企業・業界研究を重ねる" },
]

export const BuildConfidence = () => {
  return (
    <div className={styles.contentsWrapper}>
        <div className={styles.imgContainer}>
            <Image src="/contents-img/guide03/confidence.png" 
                alt="コンテンツ画像" 
                width={560} height={320} priority
                className={styles.subImg}>
            </Image>
        </div>   
        <p className={styles.guideText}>
            面接に緊張はつきものです。誰しも少なからず不安や緊張を抱えて当日を迎えます。<br></br>
            少しでも緊張を和らげ自信を持てるようにするために事前の準備を念入りにすることが大切です。
        </p>
        {H3_TITLE.map((title) => {
            return (
                <div key={title.id}>
                    <ContentsTitle>
                        <span>{title.titleNum}</span>
                        <span>{title.title}</span>
                    </ContentsTitle>
                    <div className={styles.line}></div>
                    {title.id === 0? (
                        <p className={styles.listText}>
                            いきなり面接の当日に挑むのは、過度な緊張へ結びついてしまいます。<br></br>
                            事前に志望動機・自己PRなど面接官から質問された時をイメージしながら、答える練習をしましょう。<br></br>
                            何度も練習をする内に「失敗するかもしれない」「上手く答えられなかったらどうしよう」といった不安がなくなり、きちんと答えられるという自信に変えることができるようになります。
                        </p>
                    ): title.id === 1? (
                        <p className={styles.listText}>
                            面接に苦手意識のある人、人とのコミュニケーションが苦手な人は、「根拠のない自信」を持てるように心がけましょう。<br></br>
                            「不安も緊張もみんな同じだから大丈夫」と意識しましょう。<br></br>
                            自信のない状態は、面接当日も印象や態度へ現れてしまい、面接官へ伝わってしまいます。<br></br>
                            「大丈夫」という根拠のない自信を持つことで、前向きな気持ちで良い姿勢と表情で面接に挑むことができるようになります。<br></br>
                            面接官にも堂々と見えるようになるため、好印象を与えることができるようになります。
                        </p>
                    ): <p className={styles.listText}>
                            応募先の企業とその業界の研究をしっかりと行うことは、面接前に十分な準備ができているという自信へ結びつきます。<br></br>
                            面接で企業や業界に関する質問をされた時も、適切な答えを返せるようになるため、不安や緊張も緩和させることができます。<br></br>
                            また、面接官にも企業や業界についてきちんと理解できている印象を与えることができます。
                        </p>
                    }
                </div>
            )
        })}
    </div>
  )
}