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
        link: "こちらの内容。",
        text2: "を参考にしてください。"
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

/* resume-point type*/

export interface ResumePointType {
    id: number;
    title: string;
    img: string;
    width: number;
    height: number;
}

export const RESUME_POINTS: ResumePointType[] = [
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