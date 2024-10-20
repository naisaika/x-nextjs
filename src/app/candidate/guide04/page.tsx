import React from 'react';
import { GUIDE_DATA, GUIDE_SECTION_CONTENTS } from '@/data/data';
import Image from 'next/image';
import styles from "./Guide04.module.scss";
import { SubTitle } from '@/components/subtitle/SubTitle';
import { ContentsList } from '@/components/contentsList/ContentsList';
import { ResearchCompany } from '@/components/subTitleContents/guide03/researchCompany/ResearchCompany';

const SECTION_ID = 3;
const sectionData = GUIDE_DATA.find((title) => title.id === SECTION_ID);
const sectionContents = GUIDE_SECTION_CONTENTS.find((section) => section.id === SECTION_ID);

const Guide03 = () => {
  return (
    <section id="guide04" className={styles.section}>
      <div className={styles.titleContainer}>
        <div className={styles.wrapper}>
          <h1 className={styles.sectionTitle}>{sectionData?.title}</h1>
          <p className={styles.sectionDescription}>{sectionData?.description}</p>
        </div>
      </div>
      <div className={styles.contentswrapper}>
        <div className={styles.wrapper}>
            {sectionData?.img && (
              <Image 
                src={sectionData.img} 
                alt="セクショントップ画像" 
                width={480} height={297} 
                priority 
                className={styles.topImg}>
              </Image>
            )}
          <div>
            <SubTitle>目次</SubTitle>
            <ContentsList sectionId={SECTION_ID}/>
            {sectionContents?.contents.map((content, index) => (
              <div key={content.id} className={styles.contentswrapper}>
                <SubTitle>
                  <span className={styles.subTitle__number}>{index + 1}.</span>
                  <p className={styles.subTitle__text}>{content.contentsTitle}</p>
                </SubTitle>

                  <ResearchCompany/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide03