import React from 'react';
import styles from "./ResumeQAText.module.scss"

export interface ResumePointTextType {
    id: number;
    text: JSX.Element;
}

export const RESUME_QA_TEXT: ResumePointTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                履歴書には印鑑の欄があるものとないものがありますが、どちらの形式でも選考には影響はありません。<br/>
                印鑑の欄があるフォーマットの場合は、不備があると思われないよう忘れずに印鑑を押しましょう。<br/>
                また、募集要項に「印鑑必須」の記載があるなど企業から印鑑を求められた場合は、印鑑の欄がなくても印鑑を押します。<br/>
                印鑑は、認印（印鑑登録をしていないもの）を使用し、インクが内蔵された簡易的な印鑑の使用は避けます。<br/>
                押印をする時は、滲み・掠れ・欠け・二重押印・向きに注意しましょう。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>
                履歴書のサイズに指定はありませんが、市販の履歴書はB4を二つ折りにしたB5サイズが一般的です。<br/>
                企業の採用担当者が見やすく読みやすい履歴書であれば、B5サイズでも職務経歴書に合わせたA4サイズでも問題ありません。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <p className={styles.listText}>
                手書きの履歴書とPC・スマートフォンの履歴書のどちらが正解かは、採用担当者の着眼点によって異なります。<br/>
                基本的にどちらの方法で作成しても問題はありません。<br/>
                ただし、企業が形式を指定している場合は、指定通りの履歴書を提出しないとマイナスの印象を与えることとなりますので、注意しましょう。
            </p>
        )
    },
    {
        id: 3,
        text: (
            <p className={styles.listText}>
                履歴書の日付は、提出する日の日付を記入・入力します。<br/>
                郵送であれば「投函日」、持参であれば「持参日」となります。
            </p>
        )
    },
    {
        id: 4,
        text: (
            <p className={styles.listText}>
                「御社」と「貴社」は、相手の企業を敬う時に使用する言葉です。<br/>
                「御社」は、話し言葉の時に使用し、「貴社」は、書き言葉で使用します。<br/>
                履歴書は書類となるため、書き言葉の「貴社」を使用することになります。
            </p>
        )
    },
    {
        id: 5,
        text: (
            <p className={styles.listText}>
                賞罰の「賞」とは、表彰・受賞歴のことです。<br/>
                「罰」は、犯罪歴のことを指します。<br/>
                賞罰がない場合は、「賞罰なし」と記入します。<br/>
                賞罰に記入する表彰・受賞歴の基準は、全国・国際規模の大会における入賞の経験や国・都道府県からの表彰となります。<br/>
                また、賞罰に記入する犯罪歴は、裁判で有罪判決が下り刑罰が科された時となります。<br/>
                そのため、誤認逮捕や示談と言った逮捕歴はあるが前科がついていないものについては、記入する必要はありません。
            </p>
        )
    },
    {
        id: 6,
        text: (
            <p className={styles.listText}>
                略歴書とは、今までの学歴や経歴を簡単に短くまとめたものです。<br/>
                履歴書には、学歴・職歴の記入欄があるため、略歴の記入は必要ありません。<br/>
                職務経歴書のようなフォーマット指定がない書類の場合は、概要を簡単に把握するために略歴が必要となります。
            </p>
        )
    }
]