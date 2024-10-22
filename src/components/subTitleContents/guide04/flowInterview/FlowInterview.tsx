import React from 'react';
import styles from "./FlowInterview.module.scss";
import Image from 'next/image';
import { ContentsTitle } from '@/components/contentsTitle/ContentsTitle';
import { ListMarkNumber } from '@/components/listMark/listMarkNumber/ListMarkNumber';
import { WORRY_POINT_TEXT } from './worryPointText/WorryPointText';

interface H3TitleType {
    id: number;
    title: string;
}

interface FlowListType {
    id: number;
    text: string;
}

interface PointTitleType {
    id: number;
    title: string;
}

const H3_TITLE: H3TitleType[] = [
    { id: 0, title: "①入室から退室までをイメージしましょう" },
    { id: 1, title: "②面接で気になるあれこれ" },
]

const FLOW_LISTS: FlowListType[] = [
    { 
        id: 0, 
        text: "書類確認やスマートフォン操作をせず、姿勢を正して静かに待つ"
    },
    { 
        id: 1, 
        text: "面接開始時間となったらドアを3回ノックし、面接官の「お入りください」の返答を受けてから、「失礼いたします」と言って入室" 
    },
    { 
        id: 2, 
        text: "入室後は一度ドアの方へ向き直り静かに扉を閉め、再度面接官へ向き直り「よろしくお願いいたします」と挨拶し、お辞儀をする" 
    },
    { 
        id: 3, 
        text: "椅子の横まで進んで姿勢を正して立ち、面接官から着席の指示を受けてから椅子へ座る" 
    },
    { 
        id: 4, 
        text: "面接が終了したら、椅子に座ったままお礼を伝えて一礼した後に立ち上がり、再度椅子の横で一礼" 
    },
    { 
        id: 5, 
        text: "ドアの前へ移動して面接官へ一礼をし、「失礼いたします」と挨拶をしてからドアを静かに閉める" 
    },
]

const POINT_TITLE: PointTitleType[] = [
    { id: 0, title: "挨拶の正しい仕方は？"},
    { id: 1, title: "着席位置は？"},
]

export const FlowInterview = () => {
  return (
    <div className={styles.contentsWrapper}>
        <div className={styles.imgContainer}>
            <Image src="/contents-img/guide04/flow.png" 
                alt="コンテンツ画像" 
                width={560} height={320} priority
                className={styles.subImg}>
            </Image>
        </div>    
        <p className={styles.guideText}>
            面接は、企業が書類からでは分からない応募者の人間性や本音を知るための場です。<br></br>
            配属先で周りと上手く仕事をできそうなのか、企業に対しての理解や共感は十分であるのかなど会話を通して確認し、採用するにふさわしいかどうかを見極める判断材料となります。<br></br>
            入社後の自分をイメージしてポジティブな気持ちで挑みましょう。<br></br>
        </p>
        <ul className={styles.contentsList}>
            {H3_TITLE.map((title) => (
                <li key={title.id}>
                    <ContentsTitle>{title.title}</ContentsTitle>
                    <div className={styles.line}></div>
                    {title.id === 0 && 
                        <>
                            <ol className={styles.list}>
                            {FLOW_LISTS.map((list) => (
                                <li key={list.id} className={styles.listContents}>
                                    <ListMarkNumber>{list.id + 1}</ListMarkNumber>
                                    <p className={styles.liText}>{list.text}</p>
                                </li>
                            ))}  
                            </ol>
                            <div className={styles.attentionContainer}>
                                <Image src="/list-mark/attention.png" 
                                    alt="注意マーク画像" 
                                    width={24} height={24} priority>
                                </Image> 
                                <p className={styles.attentionText}>
                                    着席時は、椅子の背もたれにはもたれかからず、浅く腰掛けるようにしましょう。<br></br>
                                    また、面接中に貧乏ゆすりや腕組み、顔や髪を必要以上に触るなど普段の癖が出ないように注意してくださいね。
                                </p>
                            </div>
                        </>
                    }
                    {title.id === 1 && 
                        <div className={styles.pointSection}>
                            {POINT_TITLE.map((point) => {
                                const pointText = WORRY_POINT_TEXT.find((text) => text.id === point.id)
                                return(
                                    <div key={point.id} className={styles.pointContainer}>
                                        <div className={styles.pointTitleContainer}>
                                            <Image src="/list-mark/flag.png" 
                                                alt="フラグマーク画像" 
                                                width={24} height={24} priority>
                                            </Image> 
                                            <span className={styles.pointTitle}>{point.title}</span>
                                        </div>
                                        <div className={styles.pointText}>{pointText?.text}</div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </li>
            ))}
      </ul>
    </div>
  )
}