import React from 'react';
import dynamic from 'next/dynamic';
import { GUIDE_DATA, GUIDE_SECTION_CONTENTS } from '@/data/data';
import styles from "./Guide01.module.scss";
import Image from 'next/image';
import { SubTitle } from '@/components/parts/subtitle/SubTitle';
import { RelativePageSection } from '@/components/parts/relativePageSection/RelativePageSection';
import { ButtonContainer } from '@/components/parts/buttonContainer/ButtonContainer';
import { Resume } from '@/components/subTitleContents/guide01/resume/Resume';
import { ResumeSample } from '@/components/subTitleContents/guide01/resumeSample/ResumeSample';
import { ResumeTemplate } from '@/components/subTitleContents/guide01/resumeTemplate/ResumeTemplate';
import { ResumeHowTo } from '@/components/subTitleContents/guide01/resumeHowTo/ResumeHowTo';
import { ResumePoint } from '@/components/subTitleContents/guide01/resumePoint/ResumePoint';
import { RevisedResume } from '@/components/subTitleContents/guide01/revisedResume/RevisedResume';
import { RecruitPoint } from '@/components/subTitleContents/guide01/recruitPoint/RecruitPoint';

const DynamicContentsList = dynamic(() => import('../../../components/parts/contentsList/ContentsList'));

const SECTION_ID = 0;
const sectionData = GUIDE_DATA.find((title) => title.id === SECTION_ID);
const sectionContents = GUIDE_SECTION_CONTENTS.find((section) => section.id === SECTION_ID);

const Guide01 = () => {
  return (
    <section id="guide01" className={styles.section}>
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
              <DynamicContentsList sectionId={SECTION_ID}/>
            </div>
            {sectionContents?.contents.map((content, index) => (
              <div key={content.id} className={styles.contentsBox} id={content.anchorlink}>
                <SubTitle>
                  <span>{index + 1}.</span>
                  <p className={styles.subTitle__text}>{content.contentsTitle}</p>
                </SubTitle>
                {content.id === 0 ? (
                  <Resume/>
                ) : content.id === 1 ? (
                  <ResumeSample />
                ) : content.id === 2 ? (
                  <ResumeTemplate/>
                ) : content.id === 3 ? (
                  <ResumeHowTo/>
                ) : content.id === 4 ? (
                  <RevisedResume/>
                ) : content.id === 5 ? (
                  <RecruitPoint/>
                  ):<ResumePoint/>
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

export default Guide01