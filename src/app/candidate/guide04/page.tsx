import React from 'react';
import dynamic from 'next/dynamic';
import { GUIDE_DATA, GUIDE_SECTION_CONTENTS } from '@/data/data';
import Image from 'next/image';
import styles from "./Guide04.module.scss";
import { SubTitle } from '@/components/parts/subtitle/SubTitle';
import { FlowInterview } from '@/components/subTitleContents/guide04/flowInterview/FlowInterview';
import { FrequentQuestion } from '@/components/subTitleContents/guide04/frequentQuestion/FrequentQuestion';
import { Technique } from '@/components/subTitleContents/guide04/technique/Technique';
import { ViewOfInterviewer } from '@/components/subTitleContents/guide04/viewOfInterviewer/ViewOfInterviewer';
import { Imporovement } from '@/components/subTitleContents/guide04/improvement/Imporovement';
import { RelativePageSection } from '@/components/parts/relativePageSection/RelativePageSection';
import { ButtonContainer } from '@/components/parts/buttonContainer/ButtonContainer';

const DynamicContentsList = dynamic(() => import('../../../components/parts/contentsList/ContentsList'));

const SECTION_ID = 3;
const sectionData = GUIDE_DATA.find((title) => title.id === SECTION_ID);
const sectionContents = GUIDE_SECTION_CONTENTS.find((section) => section.id === SECTION_ID);

const Guide04 = () => {
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
          <div className={styles.contentsSection}>
            <SubTitle>目次</SubTitle>
            <DynamicContentsList sectionId={SECTION_ID}/>
            {sectionContents?.contents.map((content, index) => (
              <div key={content.id} id={content.anchorlink}>
                <SubTitle>
                  <span className={styles.subTitle__number}>{index + 1}.</span>
                  <p className={styles.subTitle__text}>{content.contentsTitle}</p>
                </SubTitle>
                {content.id === 0 ? (
                  <FlowInterview/>
                ) : content.id === 1 ? (
                  <FrequentQuestion />
                ) : content.id === 2 ? (
                  <Technique/>
                ) : content.id === 3 ? (
                  <ViewOfInterviewer/>
                ) : <Imporovement/>
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

export default Guide04