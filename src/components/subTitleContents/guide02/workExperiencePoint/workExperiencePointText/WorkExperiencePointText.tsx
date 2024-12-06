import React from 'react';
import styles from './WorkExperiencePointText.module.scss'
import { Accordion } from '@/components/parts/accordion/Accordion';
import { EDITOR_COMMENTS, WORK_EXPERIENCE_QA_TITLE } from '@/data/data';
import { EditorSection } from '@/components/parts/editorSection/EditorSection';

export interface WorkExperiencePointTextType {
    id: number;
    text: JSX.Element;
}

const comment = EDITOR_COMMENTS[4]

export const WORK_EXPERIENCE_QA_TEXT: WorkExperiencePointTextType[] = [
    {
        id: 0,
        text: (
            <p className={styles.listText}>
                職務経歴書に証明写真の添付は不要です。<br/>
                基本的に職務経歴書を提出するときには履歴書もセットで提出するケースがほとんどです。<br/>
                特定のフォーマット形式が存在しない職務経歴書ですが、証明写真については取り扱う必要はありません。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.listText}>    
                職務経歴書に印鑑は基本的に不要ですが、企業からの指定や企業独自のフォーマットに印鑑の欄がある場合には押印をします。<br/>
                もし、企業から印鑑の指定があった場合で印鑑の欄がない時は、氏名の横へ押印します。<br/>
                印鑑は、「認印（印鑑登録をしていないもの）」を使用します。<br/>
                押印をする時は、にじみ・掠れ・欠け・二重押印・向きに注意しましょう。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <p className={styles.listText}>
                <span>
                    アルバイトは、3か月以上の経験がある場合には職務経歴書へ記載するのが一般的です。<br/>
                    記載をしないと企業から「空白期間」と捉えらえてしまい、マイナスイメージへつながってしまう可能性があります。<br/>
                    アルバイトを職歴として記載する際は、会社名の横に「アルバイト」と記載をするのを忘れないようにしましょう。<br/>
                </span>
                <span>例）株式会社〇〇入社（アルバイト）</span>
                <span>
                    応募した企業と直接関連のないアルバイトをしていた場合は、職務経歴書の最後に「退職後について」のセクションを作成し、
                    アルバイト経験について簡潔にまとめて記載をします。<br/>
                    短期間のアルバイト経験の場合は基本的に記載をしませんが、面接で「空白期間」として質問された場合は、
                    「短期間のため記載をしておりませんが、アルバイトをしておりました。」と説明をすれば問題ありません。<br/>
                    その際には、なぜアルバイトをしたのか？の理由や経緯について説明できるようにしておくことが大切です。<br/>
                    学生時代のアルバイトについても記載をしないのが基本ですが、応募先企業でアピールポイントとなる場合は記載しましょう。<br/>
                    また、卒業後に就業経験がなく、アルバイト経験のみの場合は職歴としてアルバイトについて具体的に記載しましょう。
                </span> 
            </p>
        )
    },
    {
        id: 3,
        text: (
            <p className={styles.listText}>
                <span>
                    社内異動で異動歴がある場合は、異動先の部署名・在籍期間・役職を記載します。<br/>
                    全国に事業所があり、転勤による異動歴が多い場合は、同じ業務に携わっているのであれば
                    一行に簡潔にまとめて記載しても問題ありません。<br/>
                </span>
                <span>例）〇〇株式会社入社　営業として○○・△△・□□の支店に勤務</span>
                <span>
                    異動歴が多い場合は、応募先企業が「何か問題のある人物ではないか？」と不安を抱える可能性もあります。<br/>
                    異動理由や背景なども併せて記載をし、理解をしてもらえるように工夫をしましょう。<br/>
                    また、不本意な異動や事業縮小・撤退などによる異動についても正直に記載をしましょう。
                </span>
            </p>
        )
    }
]

const data = WORK_EXPERIENCE_QA_TITLE.map((title) => ({
    id: title.id,
    question: title.title,
    answer: WORK_EXPERIENCE_QA_TEXT.find((text) => text.id === title.id)?.text || "",
  }));

export const WORK_EXPERIENCE_HOWTO_TEXT: WorkExperiencePointTextType[] = [
    {
        id: 0,
        text: (
            <div className={styles.pointTextContainer}>
                <p className={styles.listText}>
                    タイトルとして「職務経歴書」と記入します。<br/>
                    日付・氏名は、右寄せにしましょう。<br/>
                    職務要約は、今までの職務経歴のあらすじとなります。<br/>
                    文字数の目安は、250文字前後（3～4行程度）となります。簡潔にわかりやすくまとめましょう。
                </p>
                <Accordion items={[data[0]]} />
                <Accordion items={[data[1]]} />
            </div>
        )
    },
    {
        id: 1,
        text: (
            <div className={styles.pointTextContainer}>
                <p className={styles.listText}>
                    初めに会社概要として法人格（会社名）・事業内容・所属期間・資本金・従業員数と言った企業の情報を記載します。<br/>
                    応募先の採用担当者に自身が勤めて来た企業の規模や企業概要を伝えましょう。次に職務経歴を具体的に記入します。<br/>
                    所属期間や部署、担当業務・エリア、実績など自分が何をし、どんな成果を上げたのか？を相手がイメージしやすくなるよう詳細に記入しましょう。
                </p>
                <EditorSection comment={comment}/>
                <Accordion items={[data[2]]} />
                <Accordion items={[data[3]]} />
            </div>
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