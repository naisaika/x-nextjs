import React from 'react'
import styles from './WorkExperienceTemplate.module.scss'
import { DownloadButton } from '@/components/button/downloadButton/DownloadButton';
import { NumberList } from '@/components/parts/numberList/NumberList';

interface downloadListType {
  id: number;
  title1: string;
  title2: string;
  fileUrl: string;
  fileTitle: string;
}

interface formatListType {
  id: number;
  text: string;
}

const DOWNLOAD_LISTS: downloadListType[] = [
  {
      id: 0, 
      title1: "編年体式　", 
      title2: "Word形式", 
      fileUrl: "/download-file/resumeA4.docx", 
      fileTitle: "職務経歴書（編年体式）.docx"
  },
  {
      id: 1, 
      title1: "編年体式　", 
      title2: "Excel形式", 
      fileUrl: "/download-file/resumeA4.docx",
      fileTitle: "職務経歴書（編年体式）.xlsx"
  },
  {
      id: 2, 
      title1: "逆編年体式", 
      title2: "Word形式", 
      fileUrl: "/download-file/resumeA4.xlsx",
      fileTitle: "職務経歴書（逆編年体式）.docx"
  },
  {
      id: 3, 
      title1: "逆編年体式", 
      title2: "Excel形式", 
      fileUrl: "/download-file/resumeA4.xlsx",
      fileTitle: "職務経歴書（逆編年体式）.xlsx"
  },
  {
      id: 4, 
      title1: "キャリア式", 
      title2: "Word形式", 
      fileUrl: "/download-file/resumeA4.pdf",
      fileTitle: "職務経歴書（キャリア式）.docx"
  },
  {
    id: 5, 
    title1: "キャリア式", 
    title2: "Excel形式", 
    fileUrl: "/download-file/resumeA4.pdf",
    fileTitle: "職務経歴書（キャリア式）.xlsx"
  },
]

const FORMAT_LISTS: formatListType[] = [
  {
      id: 0, 
      text: "編年体式：時系列に沿って経歴をまとめる形式です。転職を初めてする方にオススメです。"
  },
  {
      id: 1, 
      text: "逆編年体式：現在から過去に遡って経歴をまとめる形式です。直近の経験や実績、スキルをアピールしたい方にオススメです。"
  },
  {
      id: 2, 
      text: "キャリア式：共通の業務経験ごとにまとめる形式です。キャリアチェンジをした方や転職回数が多い方にオススメです。"
  }
]

export const WorkExperienceTemplate = () => {
  return (
    <div className={styles.contentsWrapper}>
        <p className={styles.guideText}>職務経歴書のテンプレートには主に3つのタイプがあります。</p>
        <NumberList list={FORMAT_LISTS}></NumberList>
        <table className={styles.templateTable}>
            <thead className={styles.tableRow}>
                {DOWNLOAD_LISTS.slice(0, 2).map((item) => (
                <tr key={item.id} className={styles.tableContainer}>
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
