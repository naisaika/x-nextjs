import React from 'react';
import styles from "./PrepareWorkExperienceText.module.scss"

export interface ResumePointTextType {
    id: number;
    text: JSX.Element;
}

export const WORK_EXPERIENCE_POINT_TEXT: ResumePointTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                今までの自分の職務経験を全て書き出すところから始めます。<br/>
                フォーマットや書き方などは気にせず、思いつく限りの過去の職務経験を洗い出ししましょう。<br/>
                「所属」「期間」「業務内容」「成果」「規模」「体制」など具体的内容を追加していきましょう。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>
                書き出した職務経験から、自分のスキルや得意分野をピックアップします。<br/>
                次に応募企業が求めている人材や募集業務内容との共通点を見つけ、企業にとって「採用したい」と思える人物像へ近づけて行きましょう。<br/>
                応募企業のWebサイトや求人の募集要項、採用サイトなどを参考にしながら、自分が活躍しているところをイメージしてみましょう。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <p className={styles.listText}>
                記載する内容を整理して行きます。<br/>
                内容が応募企業の募集要件を満たしているか？自分のスキルや実績がアピールできているか？を確認しましょう。
            </p>
        )
    }
]