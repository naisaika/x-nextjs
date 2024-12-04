import React from 'react';
import dynamic from 'next/dynamic';
import { GUIDE_DATA, GUIDE_SECTION_CONTENTS } from '@/data/data';
import styles from "./Guide02.module.scss";
import Image from 'next/image';
import { SubTitle } from '@/components/parts/subtitle/SubTitle';
import { RelativePageSection } from '@/components/parts/relativePageSection/RelativePageSection';
import { ButtonContainer } from '@/components/parts/buttonContainer/ButtonContainer';
import { WorkExperience } from '@/components/subTitleContents/guide02/workExperience/WorkExperience';
import { WorkExperienceSample } from '@/components/subTitleContents/guide02/workExperienceSample/WorkExperienceSample';
import { WorkExperienceTemplate } from '@/components/subTitleContents/guide02/workExperienceTemplate/WorkExperienceTemplate';
import { HandOrInput } from '@/components/subTitleContents/guide02/handOrInput/HandOrInput';
import { PrepareWorkExperience } from '@/components/subTitleContents/guide02/prepareWorkExperience/PrepareWorkExperience';
import { WorkExperiencePoint } from '@/components/subTitleContents/guide02/workExperiencePoint/WorkExperiencePoint';
import { ReasonResignation } from '@/components/subTitleContents/guide02/reasonResignation/ReasonResignation';
import { CareerChangeCount } from '@/components/subTitleContents/guide02/careerChangeCount/CareerChangeCount';
import { BlankCareer } from '@/components/subTitleContents/guide02/blanckCareer/BlankCareer';
import { RevisedWorkExperience } from '@/components/subTitleContents/guide02/revisedWorkExperience/RevisedWorkExperience';
import { HowToSend } from '@/components/subTitleContents/guide02/howToSend/HowToSend';
import { RecruitPoint } from '@/components/subTitleContents/guide02/recruitPoint/RecruitPoint';

const DynamicContentsList = dynamic(() => import('../../../components/parts/contentsList/ContentsList'));

const SECTION_ID = 1;
const sectionData = GUIDE_DATA.find((title) => title.id === SECTION_ID);
const sectionContents = GUIDE_SECTION_CONTENTS.find((section) => section.id === SECTION_ID);

const Guide02 = () => {
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
                  <WorkExperience/>
                ) : content.id === 1 ? (
                  <WorkExperienceSample />
                ) : content.id === 2 ? (
                  <WorkExperienceTemplate/>
                ) : content.id === 3 ? (
                  <HandOrInput/>
                ) : content.id === 4 ? (
                  <PrepareWorkExperience/>
                ) : content.id === 5 ? (
                  <WorkExperiencePoint/>
                ): content.id === 6 ? (
                  <ReasonResignation/>
                ): content.id === 7 ? (
                  <CareerChangeCount/>
                ): content.id === 8 ? (
                  <BlankCareer/>
                ): content.id === 9 ? (
                  <RevisedWorkExperience/>
                ): content.id === 10 ? (
                  <RecruitPoint/>
                ): <HowToSend/>
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

export default Guide02