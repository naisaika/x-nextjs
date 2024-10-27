"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from "./TopTitle.module.scss";

interface PageLinkType {
    id: number;
    img: string;
    text: string;
    text2: string;
}
  
const PAGE_LINKS: PageLinkType[] = [
    { id: 0, img: "/contents-img/guidetop/document.png", text:"履歴書", text2:"書き方"},
    { id: 1, img: "/contents-img/guidetop/bag.png", text:"職務", text2:"経歴書"},
    { id: 2, img: "/contents-img/guidetop/person.png", text:"面接", text2:"対策"}
]

const TopTitle = () => {

  const [isResponsive, setIsResponsive] = useState<boolean>(false);

  useEffect(() => {
    const checkResponsive = () => {
      setIsResponsive(window.innerWidth <= 900);
    };

    checkResponsive();

    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
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
              width={40} height={40} priority
              className={styles.beginnerImg}
            >
            </Image>
            <span className={styles.beginnerText}>これでまるっと安心</span>
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
            className={styles.topImg__Left}>
          </Image>
          <Image 
            src="/contents-img/guidetop/woman.png" 
            alt="女性画像" 
            width={200} 
            height={204} 
            priority
            className={styles.topImg__Right}>
          </Image>
        </div>
        <ul className={styles.pageLinkList}>
          {PAGE_LINKS.map((link) => (
            <li key={link.id} className={styles.pageLinkItem}>
              <Image src={link.img} alt="アイコン画像" width={24} height={24} priority></Image>
              <p className={styles.itemText}>
                <span>{link.text}</span>
                <span>{link.text2}</span>
              </p>
              <Image src="/contents-img/guidetop/down.png" alt="アイコン画像" width={24} height={24} priority></Image>
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
        className={styles.topImg__Left}>
      </Image>
      <div className={styles.topTitlebox}>
        <p className={styles.beginnerContainer}>
          <Image 
            src="/contents-img/guidetop/beginner.png" 
            alt="初心者マーク画像" 
            width={40} height={40} priority
            className={styles.beginnerImg}
          >
          </Image>
          <span className={styles.beginnerText}>これでまるっと安心</span>
        </p>
        <p className={styles.topTitle__sub}>
          <span className={styles.slash}>＼</span>
          <span className={styles.subText}>内定を掴み取る！</span>
          <span className={styles.slash}>／</span>
        </p>
        <h1 className={styles.topTitle}>就活完全ガイド</h1>
      </div>
      <ul className={styles.pageLinkList}>
        {PAGE_LINKS.map((link) => (
          <li key={link.id} className={styles.pageLinkItem}>
            <Image src={link.img} alt="アイコン画像" width={24} height={24} priority></Image>
            <p className={styles.itemText}>
              <span>{link.text}</span>
              <span>{link.text2}</span>
            </p>
            <Image src="/contents-img/guidetop/down.png" alt="アイコン画像" width={24} height={24} priority></Image>
          </li>
        ))}
      </ul>
      <Image 
        src="/contents-img/guidetop/woman.png" 
        alt="女性画像" 
        width={200} 
        height={204} 
        priority
        className={styles.topImg__Right}
        >
        </Image>
      </>
    )}
    </div>
  )
}

export default TopTitle;