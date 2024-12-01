"use client";

import Image from 'next/image'
import React from 'react'
import styles from "./DownloadButton.module.scss"

interface downloadButtonProps {
    fileURL: string;
    fileTitle: string;
}

export const DownloadButton = ({fileURL, fileTitle}:downloadButtonProps) => {

    const fileDownload = (fileURL:string, fileTitle:string) => {
        const a = document.createElement("a");
        a.href = fileURL;
        a.download = fileTitle;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

  return (
    <button type="button" className={styles.primaryBtn} onClick={()=>fileDownload(fileURL, fileTitle)}>
        <Image src="/contents-img/download.svg" alt="ダウンロードアイコン" width={24} height={24} priority />
        <span className={styles.btnText}>ダウンロード</span>
    </button>
  )
}