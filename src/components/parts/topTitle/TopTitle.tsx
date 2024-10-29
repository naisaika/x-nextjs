"use client";

export const dynamic = "force-dynamic";

import Image from 'next/image';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import styles from "./TopTitle.module.scss";
import Link from 'next/link';
import { PageLinkType } from '@/app/candidate/guide-top/page';

interface PageLinksProps {
  pageLinks: PageLinkType[];
}

const TopTitle = ({ pageLinks }: PageLinksProps) => {
  const [isResponsive, setIsResponsive] = useState<boolean>(true);

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

  useLayoutEffect(() => {
    const checkResponsive = () => {
      setIsResponsive(window.innerWidth <= 900);
    };
    
    if (typeof window !== "undefined") {
      checkResponsive();
      window.addEventListener("resize", checkResponsive);
    }

    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  return (
    <div className={styles.topTitleContainer}>
    {isResponsive? (
      <>
        <div className={styles.topTitlebox}>
          <p className={styles.beginnerContainer}>
            <Image 
              src="/contents-img/guidetop/beginner.png" 
              alt="初心者マーク画像" 
              width={40} height={40}
              priority
              className={styles.beginnerImg}
            >
            </Image>
            <span className={styles.beginnerText}>これでまるごと安心</span>
          </p>
          <p className={styles.topTitle__sub}>
            <span className={styles.slash}>＼</span>
            <span className={styles.subText}>内定を掴み取る！</span>
            <span className={styles.slash}>／</span>
          </p>
          <h1 className={styles.topTitle}>就活完全ガイド</h1>
        </div>
        <div className={styles.topImgContainer}>
          <Image 
            src="/contents-img/guidetop/man.png" 
            alt="男性画像"
            width={200}
            height={230}
            priority
            className={styles.topImg__Left}
          >
          </Image>
          <Image 
            src="/contents-img/guidetop/woman.png" 
            alt="女性画像" 
            width={200} 
            height={204} 
            priority
            className={styles.topImg__Right}
          >
          </Image>
        </div>
        <ul className={styles.pageLinkList}>
          {pageLinks.map((link) => (
            <li key={link.id} className={styles.pageLinkItem}>
              <Link href={`#${link.anchorlink}`} className={styles.link} >
                <Image src={link.img} alt="アイコン画像" width={24} height={24} priority></Image>
                <p className={styles.itemText}>
                  <span>{link.text}</span>
                  <span>{link.text2}</span>
                </p>
                <Image src="/contents-img/guidetop/down.png" alt="アイコン画像" width={24} height={24} priority></Image>
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <>
        <Image 
          src="/contents-img/guidetop/man.png" 
          alt="男性画像"
          width={200}
          height={230}
          priority
          className={styles.topImg__LeftPC}
        >
        </Image>
        <div className={styles.topTitlebox}>
          <p className={styles.beginnerContainer}>
            <Image 
              src="/contents-img/guidetop/beginner.png" 
              alt="初心者マーク画像" 
              width={40} height={40}
              priority
              className={styles.beginnerImg}
            >
            </Image>
            <span className={styles.beginnerText}>これでまるごと安心</span>
          </p>
          <p className={styles.topTitle__sub}>
            <span className={styles.slash}>＼</span>
            <span className={styles.subText}>内定を掴み取る！</span>
            <span className={styles.slash}>／</span>
          </p>
          <h1 className={styles.topTitle}>就活完全ガイド</h1>
        </div>
        <ul className={styles.pageLinkList}>
          {pageLinks.map((link) => (
            <li key={link.id} className={styles.pageLinkItem}>
              <Link href={`#${link.anchorlink}`} className={styles.link} >
                <Image src={link.img} alt="アイコン画像" width={24} height={24} priority></Image>
                <p className={styles.itemText}>
                  <span>{link.text}</span>
                  <span>{link.text2}</span>
                </p>
                <Image src="/contents-img/guidetop/down.png" alt="アイコン画像" width={24} height={24} priority></Image>
              </Link>
            </li>
          ))}
        </ul>
        <Image 
          src="/contents-img/guidetop/woman.png" 
          alt="女性画像" 
          width={200} 
          height={204} 
          priority
          className={styles.topImg__RightPC}
        >
        </Image>
      </>
    )}
    </div>
  )
}

export default TopTitle;