import React from 'react';
import styles from "./ResumePointText.module.scss"

export interface ResumePointTextType {
    id: number;
    text: JSX.Element;
}

export const RESUME_POINT_TEXT: ResumePointTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                応募企業への提出日のギリギリになって作成すると記入漏れ・記入ミスが発生する確率が高まります。<br/>
                また、慌てて作成した履歴書は丁寧さに欠けるため、企業への第一印象を下げてしまいます。<br/>
                履歴書は、時間に余裕をもって、丁寧に心を込めて作成をしましょう。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>
                履歴書の形式は一つではありません。<br/>
                企業からの指定がない場合は、自分がアピールしやすい項目欄がある履歴書を使用するのがオススメです。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <p className={styles.listText}>
                履歴書は、手書きとPC入力の二通りの作成方法があります。<br/>
                手書きの場合は、文字が消えたり滲んだりすることを防ぐために、油性のペンやボールペンを使用しましょう。<br/>
                PC入力の場合は、文字サイズやフォントを統一して相手が読みやすいようにしましょう。<br/>
                履歴書をパソコンで作成する時のフォントサイズは、
                <span className={styles.listText__strong}>10pt～11pt</span>が最適です。<br/>
                名前などの大きな枠では、少し大きめの
                <span className={styles.listText__strong}>13pt～18pt</span>を採用します。<br/>
                余白のバランスを考えて文字の大きさを指定しましょう。<br/>
                手書きで作成する場合は、
                <span className={styles.listText__strong}>記入欄に対して文字の高さが8～9割</span>
                を占める文字の大きさとなるよう意識します。
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