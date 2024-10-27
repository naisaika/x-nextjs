import React from 'react';
import { GUIDE_DATA, GUIDE_SECTION_CONTENTS } from '@/data/data';
import styles from "./Guide03.module.scss";
import Image from 'next/image';
import { SubTitle } from '@/components/parts/subtitle/SubTitle';
import { ContentsList } from '@/components/parts/contentsList/ContentsList';
import { ResearchCompany } from '@/components/subTitleContents/guide03/researchCompany/ResearchCompany';
import { ResearchMyself } from '@/components/subTitleContents/guide03/reserchMyself/ResearchMyself';
import { CheckDocuments } from '@/components/subTitleContents/guide03/checkDocuments/CheckDocuments';
import { CheckBelongings } from '@/components/subTitleContents/guide03/checkBelongings/CheckBelongings';
import { BuildConfidence } from '@/components/subTitleContents/guide03/buildConfidence/BuildConfidence';
import { RelativePageSection } from '@/components/parts/relativePageSection/RelativePageSection';
import { CheckAppearance } from '@/components/subTitleContents/guide03/checkAppearance/CheckAppearance';
import { ButtonContainer } from '@/components/parts/buttonContainer/ButtonContainer';

const SECTION_ID = 2;
const sectionData = GUIDE_DATA.find((title) => title.id === SECTION_ID);
const sectionContents = GUIDE_SECTION_CONTENTS.find((section) => section.id === SECTION_ID);

const Guide03 = () => {
  return (
    <section id="guide03" className={styles.section}>
      <div className={styles.titleContainer}>
        <div className={styles.wrapper}>
          <h1 className={styles.sectionTitle}>{sectionData?.title}</h1>
          <p className={styles.sectionDescription}>{sectionData?.description}</p>
        </div>
      </div>
      <div className={styles.contentsContainer}>
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
          <div className={styles.contentsSection}>
            <div>
              <SubTitle>目次</SubTitle>
              <ContentsList sectionId={SECTION_ID}/>
            </div>
            {sectionContents?.contents.map((content, index) => (
              <div key={content.id} className={styles.contentsBox} id={content.anchorlink}>
                <SubTitle>
                  <span>{index + 1}.</span>
                  <p className={styles.subTitle__text}>{content.contentsTitle}</p>
                </SubTitle>
                {content.id === 0 ? (
                  <ResearchCompany />
                ) : content.id === 1 ? (
                  <ResearchMyself />
                ) : content.id === 2 ? (
                  <CheckDocuments/>
                ) : content.id === 3 ? (
                  <CheckBelongings/>
                ) : content.id === 4 ? (
                  <CheckAppearance/>
                ) : <BuildConfidence/>
                }
              </div>
            ))}
              <RelativePageSection sectionId={SECTION_ID}/>
          </div>
        </div>
        <ButtonContainer/>
      </div>
    </section>
  )
}

export default Guide03