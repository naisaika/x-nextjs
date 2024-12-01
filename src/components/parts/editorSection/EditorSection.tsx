import Image from 'next/image'
import React from 'react'
import styles from "./EditorSection.module.scss"
import { EditorCommentType } from '@/data/data';

interface commentProrps {
    comment: EditorCommentType;
}

export const EditorSection = ({comment}: commentProrps) => {
  return (
    <div className={styles.editorContainer}>
        <div className={styles.editorIconContainer}>
            <Image src="/contents-img/editor.png" alt="編集長アイコン" width={64} height={64} priority/>
            <span className={styles.editorIconText}>編集長</span>
        </div>
        <p className={styles.editorComment}>{comment.text}</p>
    </div>
  )
}
