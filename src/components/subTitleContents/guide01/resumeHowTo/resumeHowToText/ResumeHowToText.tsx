import React from 'react';
import styles from "./ResumeHowToText.module.scss"

export interface ResumePointTextType {
    id: number;
    text: JSX.Element;
}

export const RESUME_HOWTO_TEXT: ResumePointTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                基本情報欄は、採用担当者が一番最初に目を通す場所です。<br/>
                氏名・生年月日・住所など正しい情報を記載しましょう。<br/>
                丁寧な読みやすい文字で書かれているか？好印象を与える写真（表情・服装）を使用しているか？は、採用担当者に映る印象が大きく変わります。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>
                学校名や企業名は省略せずに正式名称で記入します。<br/>
                特に「高校」は「高等学校」となることに注意が必要です。<br/>
                入学・卒業や入社・退職の年月は正確な情報を記載します。<br/>
                最終行には、「現在に至る」と記入し、その下の行の右下には「以上」と記入することを忘れないようにしましょう。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <p className={styles.listText}>
              最初に「免許」を記入し、その後に「資格」を記入します。<br/>
              免許・資格は、全て正式名称で記載する必要があります。<br/>
              仕事に関連する免許や資格を必ず記入し、応募先企業へスキルのアピールをしましょう。
            </p>
        )
    },
    {
        id: 3,
        text: (
            <p className={styles.listText}>
                志望動機は、自らの経験に基づいた具体的な内容を記入します。<br/>
                応募先の企業で働きたい意欲や熱意が伝わるよう簡潔にポイントを絞ってまとめることが大切です。<br/>
                通勤時間は、片道の所要時間を記載します。<br/>
                公共交通機関を利用する場合は、自宅から駅までの移動時間を含めたトータル所要時間を記入しましょう。
            </p>
        )
    },
    {
        id: 4,
        text: (
            <p className={styles.listText}>
               本人希望欄には、絶対的な条件がない限りは「貴社の規定に従います」と記入します。<br/>
               ただし、応募職種が複数ある場合は、希望職種を記入しましょう。
            </p>
        )
    },
    {
        id: 5,
        text: (
            <p className={styles.listText}>
                趣味・特技欄は、応募者本人の印象を強く残すことができます。<br/>
                無理に目立たせる必要はありませんが、時には採用の最後の決め手になるかもしれません。<br/>
                箇条書きで簡潔に記入し、一目で内容が理解できるようにする必要があります。<br/>
                また、面接で質問されることもあります。話題として盛り上がることで、面接官との距離を縮めることもできます。
            </p>
        )
    }
]