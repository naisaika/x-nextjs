/*guide page-main-data */
export interface GuideDataType {
    id: number;
    title: string;
    description: string;
    img: string;
}

export const GUIDE_DATA: GuideDataType[] = [
    { 
        id: 0, 
        title: "履歴書の書き方｜ポイント・ガイド",
        description: "就職・転職活動に欠かせない履歴書。どうやって書いたらいいの？何を書くべきなの？ポイントを解説。是非ご参考ください！",
        img: "/top-img/guide01-top.png"
    },
    { 
        id: 1, 
        title: "職務経歴書の書き方｜ポイント・ガイド",
        description: "就職・転職活動に欠かせない職務経歴書。どうやって書いたらいいの？何を書くべきなの？ポイントを解説。是非ご参考ください！",
         img: "/top-img/guide02-top.png"
    },
    { 
        id: 2, 
        title: "面接対策ガイド｜準備編",
        description: "内定を掴むためには、準備が何よりも大切！面接当日になって不安にならないためにもしっかりと準備を行いましょう。企業や自己の分析から持ち物や身だしなみのチェックリストまで解説しています。",
         img: "/top-img/guide03-top.png"
    },
    { 
        id: 3, 
        title: "面接対策ガイド｜当日編",
        description: "面接当日に自信を持って挑めるように、面接当日の流れや注意点のイメージを固めておきましょう。面接での受け答えのテクニックや面接官がどんな視点で評価をしているかを解説しています。",
        img: "/top-img/guide04-top.png"
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
                contentsTitle: "履歴書作成時に気を付けること", 
                anchorlink: "resumePoint"
            },
            { 
                id: 5, 
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
                contentsTitle: "職務経歴書の作成のための事前準備" ,
                anchorlink: "workExperiencePrepare"
            },
            { 
                id: 4, 
                contentsTitle: "職務経歴書の書き方・ポイント",
                anchorlink: "workExperiencePoint"
            },
            { 
                id: 5, 
                contentsTitle: "職務経歴書の送付方法",
                anchorlink: "workExperienceSend"
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