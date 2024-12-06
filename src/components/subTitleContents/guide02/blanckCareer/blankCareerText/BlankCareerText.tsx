import React from 'react';
import styles from './BlankCareerText.module.scss'

export interface ResumePointTextType {
    id: number;
    text: JSX.Element;
}

export const BLANK_CAREER_TEXT: ResumePointTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                時には、自分に最適な企業を見つけるために時間がかかることもあります。<br/>
                その際には、応募企業へ「時間をかけて自分に合う企業を探していた」など空白期間を前向きに捉えられる理由を伝えましょう。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>
               何もしていなかったとしても、正直に伝えるとあまり良いイメージを与えられません。<br/>
               応募した企業と関連のある趣味や経験についてエピソードを記載し、少しでもアピールへつなげられるようにしまょう。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <p className={styles.listText}>
                空白期間にアルバイトをしていた場合は、その理由や経緯について記載をします。<br/>
                また、アルバイト経験で得たことが応募企業へのアピールポイントとなる場合は、具体的な内容も記載しましょう。
            </p>
        )
    },
    {
        id: 3,
        text: (
            <p className={styles.listText}>
               やむを得ない事情による空白期間については、その内容を正直にそのまま記載します。<br/>
                大切なのは、今は落ち着いており問題なく働けることを伝えることです。<br/>
                仕事に支障がないことを応募企業へ理解してもらえるようにはっきりと伝えましょう。
            </p>
        )
    },
    {
        id: 4,
        text: (
            <p className={styles.listText}>
                スキルアップや未経験の業種への挑戦など積極的な姿勢であることをアピールできるため、具体的な内容を記載します。<br/>
                資格やスキルを取得するに至った目的や背景を説明し、何ができるようになったのか、向上したのかについてしっかりと伝えましょう。
            </p>
        )
    }
]