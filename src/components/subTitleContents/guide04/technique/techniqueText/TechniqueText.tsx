import { FlagContentsContainer } from '@/components/flagContentsContainer/FlagContentsContainer';
import { NumberList } from '@/components/numberList/NumberList';
import React from 'react';
import styles from "./TechniqueText.module.scss";

interface TechniqueTextType {
    id: number;
    text: JSX.Element;
}

interface PointTitleType {
    id: number;
    title: string;
}

interface PointTextType {
    id: number;
    text: string;
}

const POINT_TITLE: PointTitleType[] = [
    { id: 0, title: "PREP法の流れ"},
    { id: 1, title: "STAR法の流れ"},
]

const POINT_TEXT: PointTextType = [
    {
      category: "PREP_TEXT",
      points: [
        { id: 0, text: "結論（自分の強みは何か）" },
        { id: 1, text: "理由（それが強みである理由）" },
        { id: 2, text: "具体例（強みを活かしたエピソード）" },
        { id: 3, text: "結論（入社後の活かし方）" },
      ],
    },
    {
      category: "STAR_TEXT",
      points: [
        { id: 0, text: "状況（エピソードの概要）" },
        { id: 1, text: "目標（掲げた目標や取り組んだ課題）" },
        { id: 2, text: "行動（目標達成のための行動）" },
        { id: 3, text: "結果（結果から学んだこと）" },
      ],
    }
];

export const TECHNIQUE_TEXT: TechniqueTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                面接官まで届くよう聞き取りやすい声量でハッキリと明るい声で話します。<br></br>
                早口にならないように話すスピードも意識しましょう。<br></br>
                癖のある話し方にならないよう敬語や丁寧語を使い、言葉遣いも配慮しましょう。
            </p> 
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>
                身振り手振りといった非言語コミュニケーションは、相手を引き付けて印象に残りやすくなります。<br></br>
                自分にとって大切だと思う所へ使うことで、熱意が伝わりやすくなったり、説得力が上がったりすることで面接官の理解度を高めることもできます。<br></br>
                また、体が動くことにより緊張がほぐれ、自分らしく話せるようになるメリットもあります。<br></br>
                一方で、オーバーな動きはわざとらしく見えてしまうので気を付けましょう。<br></br>
                過度に使うとかえって落ち着きのない印象を与えてしまうので注意が必要です。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <>
                <h4>PREP法</h4>
                <p className={styles.listText}>
                    質問への応答は、PREP（プレップ）法やSTAR法を用いるのがおすすめです。<br></br>
                    PREP法は、結論を重視して相手へ伝える方法で、短時間で相手に説得力を与えるのに効果的です。<br></br>
                    あるトピックについての立場や考えを明確に伝える際に利用されることが多く、自己PRの構成に最適とされています。
                </p>
                <FlagContentsContainer 
                    titles={POINT_TITLE}
                    text={[
                        {
                        id: 0,
                        text: (
                            <NumberList list={POINT_TEXT}></NumberList>
                            )
                        }
                    ]}>
                </FlagContentsContainer>
                <p>このように構成を組み立てることで正確に面接官へ自分のアピールポイントを伝えることができます。</p>
            </>
        )
    }
]