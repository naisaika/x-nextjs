/*guide page-main-data */
export interface GuideDataType {
    id: number;
    title: string;
    description: string;
    img: string;
    topText: string;
    link: string;
}

export const GUIDE_DATA: GuideDataType[] = [
    { 
        id: 0, 
        title: "履歴書の書き方｜ポイント・ガイド",
        description: "就職・転職活動に欠かせない履歴書。どうやって書いたらいいの？何を書くべきなの？ポイントを解説。是非ご参考ください！",
        img: "/top-img/guide01-top.png",
        topText: "Step.01｜採用担当者に響く！履歴書の書き方",
        link: "/candidate/guide01"
    },
    { 
        id: 1, 
        title: "職務経歴書の書き方｜ポイント・ガイド",
        description: "就職・転職活動に欠かせない職務経歴書。どうやって書いたらいいの？何を書くべきなの？ポイントを解説。是非ご参考ください！",
        img: "/top-img/guide02-top.png",
        topText: "Step.02｜魅力的に伝える！職務経歴書の書き方",
        link: "/candidate/guide02"
    },
    { 
        id: 2, 
        title: "面接対策ガイド｜準備編",
        description: "内定を掴むためには、準備が何よりも大切！面接当日になって不安にならないためにもしっかりと準備を行いましょう。企業や自己の分析から持ち物や身だしなみのチェックリストまで解説しています。",
        img: "/top-img/guide03-top.png",
        topText: "Step.03｜準備編｜内定を勝ち取る！面接対策",
        link: "/candidate/guide03"
    },
    { 
        id: 3, 
        title: "面接対策ガイド｜当日編",
        description: "面接当日に自信を持って挑めるように、面接当日の流れや注意点のイメージを固めておきましょう。面接での受け答えのテクニックや面接官がどんな視点で評価をしているかを解説しています。",
        img: "/top-img/guide04-top.png",
        topText: "Step.04｜当日編｜内定を勝ち取る！面接対策",
        link: "/candidate/guide04"
    }
]

/*guide contents-title*/
export interface GuideSectionType {
    id: number;
    sectionTitle: string;
    contents: GuideContentsListType[];
}

export interface GuideContentsListType {
    id: number;
    contentsTitle: string;
    anchorlink: string;
}

export const GUIDE_SECTION_CONTENTS: GuideSectionType[] = [
    {
        id: 0,
        sectionTitle: "GUIDE01",
        contents: [
            { 
                id: 0, 
                contentsTitle: "履歴書とは？", 
                anchorlink: "resume"
            },
            { 
                id: 1, 
                contentsTitle: "履歴書の見本（サンプル）", 
                anchorlink: "resumeSample"
            },
            { 
                id: 2, 
                contentsTitle: "履歴書テンプレート（フォーマット）のダウンロード", 
                anchorlink: "resumeTemplate" 
            },
            { 
                id: 3,
                contentsTitle: "履歴書の書き方・ポイント" , 
                anchorlink: "resumeHowTo"
            },
            { 
                id: 4, 
                contentsTitle: "誤字や脱字の正しい修正方法", 
                anchorlink: "revisedResume"
            },
            { 
                id: 5, 
                contentsTitle: "採用担当者が重視するポイント", 
                anchorlink: "recruitPoint"
            },
            { 
                id: 6, 
                contentsTitle: "履歴書作成時に気を付けること", 
                anchorlink: "resumePoint"
            },
            { 
                id: 7, 
                contentsTitle: "履歴書に関するQ&A",
                anchorlink: "resumeQA"
            }
        ]
    },
    {
        id: 1,
        sectionTitle: "GUIDE02",
        contents: [
            { 
                id: 0,
                contentsTitle: "職務経歴書とは？",
                anchorlink: "workExperience"
            },
            { 
                id: 1,
                contentsTitle: "職務経歴書の見本（サンプル）" ,
                anchorlink: "workExperienceSample"
            },
            { 
                id: 2,
                contentsTitle: "職務経歴書テンプレート（フォーマット）のダウンロード",
                anchorlink: "workExperienceTemplate"
            },
            { 
                id: 3,
                contentsTitle: "手書きとパソコンどちらが適切？",
                anchorlink: "handOrInput"
            },
            { 
                id: 4,
                contentsTitle: "職務経歴書の作成のための事前準備" ,
                anchorlink: "PrepareWorkExperience"
            },
            { 
                id: 5, 
                contentsTitle: "職務経歴書の書き方・ポイント",
                anchorlink: "workExperiencePoint"
            },
            { 
                id: 6, 
                contentsTitle: "退職理由の書き方",
                anchorlink: "reasonResignation"
            },
            { 
                id: 7, 
                contentsTitle: "転職回数が多い場合",
                anchorlink: "careerChangeCount"
            },
            { 
                id: 8, 
                contentsTitle: "職歴に空白期間がある場合",
                anchorlink: "blanckCareer"
            },
            { 
                id: 9, 
                contentsTitle: "誤字や脱字の正しい修正方法", 
                anchorlink: "revisedWorkExperience"
            },
            { 
                id: 10, 
                contentsTitle: "採用担当者が重視するポイント", 
                anchorlink: "recruitPoint"
            },
            { 
                id: 11, 
                contentsTitle: "職務経歴書の送付方法",
                anchorlink: "howToSend"
            }
        ]
    },
    {
        id: 2,
        sectionTitle: "GUIDE03",
        contents: [
            { 
                id: 0, 
                contentsTitle: "企業・業界研究",
                anchorlink: "reseachCompany"
            },
            { 
                id: 1,
                contentsTitle: "自己分析",
                anchorlink: "reseachMyself"
            },
            { 
                id: 2, 
                contentsTitle: "提出書類の確認",
                anchorlink: "checkDocuments"
            },
            { 
                id: 3, 
                contentsTitle: "持ち物チェックリスト",
                anchorlink: "checkBelongings"
            },
            { 
                id: 4,
                contentsTitle: "身だしなみチェックリスト",
                anchorlink: "checkAppearance"
            },
            { 
                id: 5,
                contentsTitle: "自信を持つコツ",
                anchorlink: "buildConfidence"
            }
        ]
    },
    {
        id: 3,
        sectionTitle: "GUIDE04",
        contents: [
            { 
                id: 0, 
                contentsTitle: "面接当日の流れ",
                anchorlink: "flowInterview"
            },
            { 
                id: 1, 
                contentsTitle: "頻出質問への対策",
                anchorlink: "frequentQuestion"
            },
            { 
                id: 2, 
                contentsTitle: "面接テクニック",
                anchorlink: "technique"
            },
            { 
                id: 3,
                contentsTitle: "面接官の視点を理解する",
                anchorlink: "viewOfInterviewer"
            },
            { 
                id: 4, 
                contentsTitle: "振り返りと改善",
                anchorlink: "improvement"
            }
        ]
    }
];

/* H3 title-type */

 export interface H3TitleType {
    id: number;
    titleNum?: string;
    title: string;
  }

/* check-list type */

export interface CheckListType {
    id: number;
    contents: string;
}

/* editor-comment type*/

export interface EditorCommentType {
    id: number;
    section: string;
    text: string;
    link?: string;
    text2?: string;
    anchorlink?: string;
}

export const EDITOR_COMMENTS: EditorCommentType[] = [
    { 
        id: 0, 
        section: "guide01",
        text: "書き方のポイントを押さえればどなたでも作成できます！"
    },
    { 
        id: 1, 
        section: "guide01",
        text: "今までの経験やスキルで募集要件とマッチしている内容は、欠かさず記載しましょう。"
    },
    { 
        id: 2, 
        section: "guide02",
        text: "職務経歴書は、通常A4用紙2枚となるケースが多いためパソコン作成の方が編集しやすく、誤字・脱字の修正も手早くできるためおすすめです！"
    },
    { 
        id: 3, 
        section: "guide02",
        text: "逆に社会人経験が浅い場合は、1枚でまとめても問題ありません。"
    },
    { 
        id: 4, 
        section: "guide02",
        text: "もし「転職回数が多い」「職歴の空白期間が多い」ことで悩む方は",
        link: "こちらの内容を参考",
        text2: "にしてください。",
        anchorlink: "careerChangeCount"
    },
    { 
        id: 5, 
        section: "guide02",
        text: "転職理由や目的について企業が不安にならないように前向きな内容を記載しましょう。"
    },
    { 
        id: 6, 
        section: "guide02",
        text: "経歴詐称とならないよう嘘はつかず、正直に正しい情報を記入することが大切です。"
    },
    { 
        id: 7, 
        section: "guide02",
        text: "採用担当者が「社風とマッチし、長く働いてくれそうだ」と感じてもらえるよう自己分析をしっかりと行い、企業の求める人材に合わせた強みを記載しましょう！"
    },
]

/* resume-howto type*/

export interface ResumeHowToType {
    id: number;
    title: string;
    img: string;
    width: number;
    height: number;
}

export const RESUME_HOW_TO: ResumeHowToType[] = [
    { 
        id: 0, 
        title: "1）基本情報欄の書き方",
        img: "/contents-img/guide01/resume1.jpg",
        width: 460,
        height: 292
    },
    { 
        id: 1, 
        title: "2）学歴・職歴欄の書き方",
        img: "/contents-img/guide01/resume2.jpg",
        width: 460,
        height: 393
    },

    { 
        id: 2, 
        title: "3）免許・資格欄の書き方",
        img: "/contents-img/guide01/resume3.jpg",
        width: 460,
        height: 232
    },

    { 
        id: 3, 
        title: "4）志望動機・通勤時間欄の書き方",
        img: "/contents-img/guide01/resume4.jpg",
        width: 460,
        height: 246
    },

    { 
        id: 4, 
        title: "5）本人希望欄の書き方",
        img: "/contents-img/guide01/resume5.jpg",
        width: 460,
        height: 131
    },
    { 
        id: 5, 
        title: "6）趣味・特技欄の書き方",
        img: "/contents-img/guide01/resume6.jpg",
        width: 460,
        height: 121
    }
]

/* resume-points type */

export interface ResumePointType {
    id: number;
    title: string;
}

export const RESUME_POINTS: ResumePointType[] = [
    { 
        id: 0, 
        title: "POINT.01｜時間に余裕をもって作成する"
    },
    { 
        id: 1, 
        title: "POINT.02｜自分に適した履歴書のテンプレート（フォーマット）を選択する"
    },
    { 
        id: 2, 
        title: "POINT.03｜文字サイズやフォントは統一する"
    },
    { 
        id: 3, 
        title: "POINT.04｜応募企業に沿った履歴書内容にする"
    },
    { 
        id: 4, 
        title: "POINT.05｜提出前に見直しをする"
    }
]

/* resume-Q&A type */

export interface ResumeQAType {
    id: number;
    title: string;
}

export const RESUME_QA_TITLE: ResumeQAType[] = [
    { 
        id: 0, 
        title: "印鑑は必要？"
    },
    { 
        id: 1, 
        title: "履歴書のサイズは、どれが良いの？"
    },
    { 
        id: 2, 
        title: "手書きの履歴書とPC・スマートフォン入力の履歴書どちらが良いの？"
    },
    { 
        id: 3, 
        title: "履歴書の日付はいつにすれば良いの？"
    },
    { 
        id: 4, 
        title: "履歴書で使用するのは「御社」と「貴社」どっち？"
    },
    { 
        id: 5, 
        title: " 履歴書の「賞罰」は何を書けばいいの？"
    },
    { 
        id: 6, 
        title: " 略歴書との違いは？"
    }
]

/* work-experience-points type */

export interface WorkExperiencePointType {
    id: number;
    title: string;
}

export const WORK_EXPERIENCE_POINTS: WorkExperiencePointType[] = [
    { 
        id: 0, 
        title: "STEP.01｜今までの職務経験を書き出す"
    },
    { 
        id: 1, 
        title: "STEP.02｜応募先企業と自身の経歴の共通点を探す"
    },
    { 
        id: 2, 
        title: "STEP.03｜記載する内容を整理する"
    }
]

/* work-experience-howto type*/

export interface WorkExperienceHowToType {
    id: number;
    title?: string;
    img: string;
    width: number;
    height: number;
}

export const WORK_EXPERIENCE_HOW_TO: WorkExperienceHowToType[] = [
    { 
        id: 0, 
        title: "1）タイトル・職務要約の書き方",
        img: "/contents-img/guide02/work-experience1.jpg",
        width: 460,
        height: 203
    },
    { 
        id: 1, 
        title: "2）職務経歴の書き方",
        img: "/contents-img/guide02/work-experience2.jpg",
        width: 460,
        height: 337
    },
    { 
        id: 2, 
        img: "/contents-img/guide02/work-experience3.jpg",
        width: 420,
        height: 247
    },
    { 
        id: 3, 
        title: "3）スキル・資格の書き方",
        img: "/contents-img/guide02/work-experience4.jpg",
        width: 460,
        height: 237
    },

    { 
        id: 4, 
        title: "4）自己PRの書き方",
        img: "/contents-img/guide02/work-experience5.jpg",
        width: 460,
        height: 169
    }
]

/* work-experience-Q&A type */

export interface WorkExperienceQAType {
    id: number;
    title: string;
}

export const WORK_EXPERIENCE_QA_TITLE: WorkExperienceQAType[] = [
    { 
        id: 0, 
        title: "写真は必要？"
    },
    { 
        id: 1, 
        title: "印鑑は必要？"
    },
    { 
        id: 2, 
        title: "アルバイトは職歴に含める？"
    },
    { 
        id: 3, 
        title: "社内異動は書く？"
    }
]

/* reason-Resignation type */

export interface reasonResignationType {
    id: number;
    text: string;
}

export const REASON_RESIGNATION: reasonResignationType[] = [
    { 
        id: 0, 
        text: "倒産や人員整理といった会社都合による退職をした場合"
    },
    { 
        id: 1, 
        text: "転職回数が多い場合"
    },
    { 
        id: 2, 
        text: "前職を短期間で離職してしまった場合"
    }
]

/* blank-career-points type */

export interface BlanckCareerPointType {
    id: number;
    title: string;
}

export const BLANK_CAREER_POINTS: BlanckCareerPointType[] = [
    { 
        id: 0, 
        title: "CASE.01｜転職活動が長引き、空白期間が生まれた"
    },
    { 
        id: 1, 
        title: "CASE.02｜空白期間に何もしていなかった"
    },
    { 
        id: 2, 
        title: "CASE.03｜空白期間にアルバイトをしていた"
    },
    { 
        id: 3, 
        title: "CASE.04｜親の介護や自身の病気などやむを得ない事情があった"
    },
    { 
        id: 4, 
        title: "CASE.05｜資格取得や職業訓練、語学留学などをしていた"
    }
]

/* send-points type */

export interface SendPointType {
    id: number;
    title: string;
    img: string;
    img2?: string;
    height: number;
    height2?: number;
    imgtitle: string;
    imgtitle2?: string;
}

export const SEND_POINTS: SendPointType[] = [
    { 
        id: 0, 
        title: "CASE.01｜メールでの送付",
        img: "/contents-img/guide02/email.jpg",
        height: 535,
        imgtitle: "メールの例"
    },
    { 
        id: 1, 
        title: "CASE.02｜郵送での送付",
        img: "/contents-img/guide02/post1.jpg",
        img2: "/contents-img/guide02/post2.jpg",
        height: 632,
        height2: 291,
        imgtitle: "送付状サンプル",
        imgtitle2: "封筒のサンプル",
    },
    { 
        id: 2, 
        title: "CASE.03｜手渡しをする",
        img: "/contents-img/guide02/post3.jpg",
        height: 318,
        imgtitle: "封筒のサンプル",
    }
]

/* send-text type */

export interface SendTextType {
    id: number;
    title: string;
    detail: SendTextDetailType[];
}

export interface SendTextDetailType {
    id: number;
    flow: string;
    text: string;
}

export const SEND_TEXT: SendTextType[] = [
    { 
        id: 0, 
        title: "メール送付のポイント！",
        detail: [
            { 
                id: 0, 
                flow: "応募書類はPDF形式で送付",
                text: "PDFファイルは相手の閲覧環境に左右されません！"
            },
            { 
                id: 1, 
                flow: "応募書類にはパスワードをかける",
                text: "個人情報保護のために設定しましょう！"
            },
            { 
                id: 2, 
                flow: "件名には用件と氏名を入力",
                text: "相手が件名を見ただけで内容を把握できます！"
            },
            { 
                id: 3,
                flow: "個人の宛名は「〇〇様」／部署の宛名は「〇〇課御中」",
                text: "間違えないように注意しましょう！"
            },
            { 
                id: 4, 
                flow: "メール本文は「宛名」→「あいさつ」→「内容」→「締め」→「署名」で構成",
                text: "メール文の一般的な基本構成を使いましょう！"
            },
        ]
    },
    { 
        id: 1, 
        title: "郵送のポイント！",
        detail: [
            { 
                id: 0, 
                flow: "送付状を用意する",
                text: "あいさつ状としての役割なので忘れずに！"
            },
            { 
                id: 1, 
                flow: "応募書類はクリアファイルに入れる",
                text: "折曲がったり濡れたりしないように保護しましょう！"
            },
            { 
                id: 2, 
                flow: "封入の順番は上から「送付状」→「履歴書」→「職務経歴書」→「その他書類」",
                text: "順番を間違えないように注意しましょう！"
            },
            { 
                id: 3,
                flow: "封筒は「角型2号」または「角型A4号」を選ぶ",
                text: "A4サイズの書類がぴったり入る大きさです！"
            },
            { 
                id: 4, 
                flow: "封筒の表面に「応募書類在中」と赤色で書く",
                text: "文字がにじまないよう油性ペンを使いましょう！"
            },
        ]
    },
    { 
        id: 2, 
        title: "手渡しのポイント！",
        detail: [
            { 
                id: 0, 
                flow: "応募書類はクリアファイルに入れる",
                text: "折曲がったり濡れたりしないように保護しましょう！"
            },
            { 
                id: 1, 
                flow: "封入の順番は上から「履歴書」→「職務経歴書」→「その他書類」",
                text: "順番を間違えないように注意しましょう！"
            },
            { 
                id: 2, 
                flow: "封筒は「角型2号」または「角型A4号」を選ぶ",
                text: "A4サイズの書類がぴったり入る大きさです！"
            },
            { 
                id: 3,
                flow: "封筒表面の宛先記入は不要",
                text: "封筒裏面の自分の氏名と住所の記入は忘れずに！"
            },
            { 
                id: 4, 
                flow: "封筒の表面は「応募書類在中」と赤色で書く",
                text: "文字がにじまないよう油性ペンを使いましょう！"
            },
            { 
                id: 5, 
                flow: "封筒の封はしない",
                text: "すぐに中身を取り出せるようにしておきましょう！"
            },
        ]
    }
]