"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import styles from "./EditorSection.module.scss"
import { EditorCommentType } from '@/data/data';
import Link from 'next/link';

interface commentProrps {
    comment: EditorCommentType;
}

export const EditorSection = ({comment}: commentProrps) => {

  useEffect(() => {

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach((scrollLink) => {
      scrollLink.addEventListener("click", (e) => {
        e.preventDefault();
        
        const hrefLink = scrollLink.getAttribute("href");
        if (!hrefLink) return;  
  
        const targetContent = document.getElementById(hrefLink.replace("#", ""));
        if (!targetContent) return; 
  
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.scrollY;
        const target = rectTop + positionY;
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className={styles.editorContainer}>
        <div className={styles.editorIconContainer}>
            <Image src="/contents-img/editor.png" alt="編集長アイコン" width={64} height={64} priority/>
            <span className={styles.editorIconText}>編集長</span>
        </div>
        <p className={styles.editorComment}>
          {comment.text}
          <Link href={`#${comment.anchorlink}`}>
            <span className={styles.editorLink}>{comment.link}</span>
          </Link>
          {comment.text2}
        </p>
    </div>
  )
}