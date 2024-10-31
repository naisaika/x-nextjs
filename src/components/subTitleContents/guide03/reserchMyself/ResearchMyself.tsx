import Image from 'next/image';
import React from 'react';
import styles from "./ResearchMyself.module.scss";
import { ContentsTitle } from '@/components/parts/contentsTitle/ContentsTitle';
import { H3TitleType } from '@/data/data';
import { FlagContentsContainer } from '@/components/parts/flagContentsContainer/FlagContentsContainer';

const H3_TITLE: H3TitleType[] = [
    { id: 0, titleNum: "①", title: "強み・弱み" },
    { id: 1, titleNum: "②", title: "志望動機の整理" },
]

export const ResearchMyself = () => {
  return (
    <div className={styles.contentsWrapper}>
    <div className={styles.imgContainer}>
        <Image src="/contents-img/guide03/research-myself.png" 
            alt="コンテンツ画像" 
            width={560} height={320} priority
            className={styles.subImg}>
        </Image>
    </div>    
    <p className={styles.guideText}>
        自己分析は、自分の特徴を理解し、どのような人間であるかを企業に伝えるために必要なものです。<br></br>
        これまでの経験や考え方を振り返って整理をし、自分の強みや価値観を深堀りして面接でアピールできるようにしましょう。
    </p>
    <ul className={styles.contentsList}>
        {H3_TITLE.map((title) => (
            <li key={title.id}>
                    <ContentsTitle>
                        <span>{title.titleNum}</span>
                        <span>{title.title}</span>
                    </ContentsTitle>
                <div className={styles.line}></div>
                {title.id === 0 && 
                    <p className={styles.contentsText}>
                        自分の強みや弱みは、過去の成功体験や失敗体験を基にすると見つけやすくなります。<br></br>
                        また、周りの人から客観的な意見を求めてみるのも良いでしょう。<br></br>
                        強みは、仕事を通じて習得したスキルや成果へ結びつけることのできるスキルの中で3～5つに絞り込みを行い、それぞれに紐づく経験や実績を用意してまとめます。<br></br>
                        一方で、弱みはただマイナスな印象を与えてしまうものを避け、ポジティブに捉えて変換ができるものを選びます。<br></br>
                        克服のために意識していることや具体的なエピソードを添えることで印象をアップさせることができます。<br></br>
                    </p> 
                }
                {title.id === 1 && 
                    <>
                        <p className={styles.contentsText}>
                            強みや弱みも踏まえ、応募先の企業で活用できるスキルや経験を過去や今後のビジョンと結びつけて具体的にアピールします。<br></br>
                            なぜその企業を応募したのか？を明確にし、入社をしたいという意思がしっかりと伝わるようにする必要があります。<br></br>
                            自分目線ではなく企業目線の立場でどんなことに貢献できるのかを盛り込み、企業の募集ニーズに応えられる内容にします。<br></br>
                            未経験の業界へ転職する場合は、その具体的理由を述べましょう。<br></br>
                            同業種への転職の場合は、前職を批判しないよう注意しましょう。<br></br>
                        </p> 
                        <FlagContentsContainer
                            title={"志望動機の例文"}
                            text={
                                <>
                                    <p>
                                        私はこれまで、〇〇業界で〇〇の職務に携わってきました。
                                        その中で培った計画的な進捗管理や、チームと連携したプロジェクト遂行能力を強みとしています。
                                        特に、品質管理やコスト効率を重視する姿勢は、製造業でも求められるスキルと確信しています。
                                        貴社が掲げる「〇〇の製品開発」「高品質な製品の安定供給」などの目標に向け、これまでの経験を活かしてプロセスの改善や効率化に貢献できると考えています。
                                    </p>
                                    <p>
                                        また、貴社を志望した理由は、〇〇技術に関する取り組みに深く共感したためです。
                                        特に、持続可能な生産体制の確立や、革新的な製品開発に注力されている点に強く魅力を感じました。
                                        これらは、今後の製造業界全体が直面する課題であり、私もその一端を担い、新たな挑戦に積極的に取り組みたいと考えています。
                                        未経験の製造業界への挑戦となりますが、これまでの〇〇業界で得た経験は、製造業でも十分に応用できるものだと確信しています。
                                    </p>
                                </>  
                                }
                            />
                        </>
                    }
                </li>
            ))}
        </ul>
    </div>
  )
}
