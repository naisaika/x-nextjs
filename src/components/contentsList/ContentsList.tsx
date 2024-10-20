"use client";

import React, { useEffect } from 'react';
import { GUIDE_SECTION_CONTENTS } from '@/data/data';
import { ListMarkNumber } from '@/components/listMark/listMarkNumber/ListMarkNumber';
import styles from "./ContentsList.module.scss";
import Link from 'next/link';

interface sectionIdProps {
  sectionId: number;
}

export const ContentsList = ({ sectionId }: sectionIdProps) => {

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

  const sectionList = GUIDE_SECTION_CONTENTS.find((list) => list.id === sectionId)

  return (
    <ul className={styles.list}>
      {sectionList?.contents.map((content) => (
        <li key={content.id} className={styles.liContents}>
          <ListMarkNumber>{content.id + 1}</ListMarkNumber>
          <Link href={`#${content.anchorlink}`} className={styles.link}>
            <p className={styles.liText}>{content.contentsTitle}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};