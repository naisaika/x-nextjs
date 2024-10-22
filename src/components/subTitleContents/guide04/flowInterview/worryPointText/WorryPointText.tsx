import React from 'react';
import styles from "./WorryPointText.module.scss";

interface WorryPointTextType {
    id: number;
    text: JSX.Element;
}

export const WORRY_POINT_TEXT: WorryPointTextType[] = [
    {
        id: 0,
        text: (
            <>
                <p className={styles.listText}>
                    挨拶は、背筋を伸ばして相手の目を見て明るく元気にしましょう。<br></br>
                    入室時の挨拶では30度の角度でお辞儀をし、着席前に自己紹介を求められた場合は、自己紹介をした後に45度の角度で深めのお辞儀をします。<br></br>
                </p>
                <p className={styles.listText}>
                    着席時には、「失礼いたします」と言ってから15度の浅いお辞儀をします。<br></br>
                    面接終了後は、「本日はお忙しい中お時間をいただきありがとうございました」と言い、45度の角度で深めのお辞儀をします。<br></br>
                    退室時は、30～45度でお辞儀をしてから退室をします。<br></br>
                </p>  
            </>
        )
    },
    {
        id: 1,
        text: (
            <>
                <p className={styles.listText}>
                    基本的に下座（部屋の入口に一番近い席）へ着席をします。<br></br>
                    長いソファーの場合は、入口の位置に関係なく一人席の方へ着席をします。
                </p>
                <p className={styles.listText}>
                    席を指定された場合は、上座・下座にこだわらず指定された席へと着席します。<br></br>
                    部屋へ案内されただけの場合は、着席をせずに下座の位置へ立ち、その場で待つのがマナーとなります。
                </p>  
            </>      
        )
    }
]