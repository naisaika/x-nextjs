import React from 'react'
import styles from "./ResumeTemplate.module.scss"
import { DownloadButton } from '@/components/button/downloadButton/DownloadButton';

interface downloadListType {
    id: number;
    title1: string;
    title2: string;
    fileUrl: string;
    fileTitle: string;
}

const DOWNLOAD_LISTS: downloadListType[] = [
    {
        id: 0, 
        title1: "Word形式", 
        title2: "（A4サイズ）", 
        fileUrl: "/download-file/resumeA4.docx", 
        fileTitle: "履歴書(A4).docx"
    },
    {
        id: 1, 
        title1: "Word形式", 
        title2: "（B4サイズ）", 
        fileUrl: "/download-file/resumeA4.docx",
        fileTitle: "履歴書(B4).docx"
    },
    {
        id: 2, 
        title1: "Excel形式", 
        title2: "（A4サイズ）", 
        fileUrl: "/download-file/resumeA4.xlsx",
        fileTitle: "履歴書(A4).xlsx"
    },
    {
        id: 3, 
        title1: "Excel形式", 
        title2: "（B4サイズ）", 
        fileUrl: "/download-file/resumeA4.xlsx",
        fileTitle: "履歴書(B4).xlsx"
    },
    {
        id: 4, 
        title1: "PDF形式", 
        title2: "（A4サイズ）", 
        fileUrl: "/download-file/resumeA4.pdf",
        fileTitle: "履歴書(A4).pdf"
    },
]

export const ResumeTemplate = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>
            厚生労働省が推奨している履歴書のテンプレート（フォーマット）になります。<br></br>
            就職、転職からアルバイト・パートまで使えるJIS標準の履歴書となっております。
        </p>
        <table className={styles.templateTable}>
            <thead className={styles.tableRow}>
                {DOWNLOAD_LISTS.slice(0, 2).map((item) => (
                <tr key={item.id}>
                    <th className={styles.tableTitle}>
                        {item.title1}<br />
                        {item.title2}
                    </th>
                    <td className={styles.tableContents}>
                        <DownloadButton fileURL={item.fileUrl} fileTitle={item.fileTitle}/>
                    </td>
                </tr>
                ))}
            </thead>
            <tbody className={styles.tableRow}>
                {DOWNLOAD_LISTS.slice(2, 4).map((item) => (
                <tr key={item.id}>
                    <th className={styles.tableTitle}>
                        {item.title1}<br />
                        {item.title2}
                    </th>
                    <td className={styles.tableContents}>
                        <DownloadButton fileURL={item.fileUrl} fileTitle={item.fileTitle}/>
                    </td>
                </tr>
                ))}
            </tbody>
            <tfoot className={styles.tableRow}>
                {DOWNLOAD_LISTS.slice(4).map((item) => (
                <tr key={item.id} className={styles.lastTable}>
                    <th className={styles.tableTitle}>
                        {item.title1}<br />
                        {item.title2}
                    </th>
                    <td className={styles.tableContents}>
                        <DownloadButton fileURL={item.fileUrl} fileTitle={item.fileTitle}/>
                    </td>
                </tr>
                ))}
            </tfoot>
        </table>
    </div>
  )
}
