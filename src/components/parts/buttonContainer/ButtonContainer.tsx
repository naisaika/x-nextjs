import React from 'react';
import { PrimaryButton } from '@/components/button/primaryButton/PrimaryButton';
import { SecondaryButton } from '@/components/button/secondaryButton/SecondaryButton';
import Image from 'next/image';
import styles from "./ButtonContainer.module.scss";

export const ButtonContainer = () => {
  return (
    <div className={styles.buttonContainer}>
        <PrimaryButton link={"/candidate/guidetop"}>
          <span className={styles.buttonText}>就活完全ガイドTOP</span>
          <Image src="/list-mark/right.png" alt="ボタンアイコン" width={24} height={24} priority></Image>
        </PrimaryButton>
        <SecondaryButton link={"/candidate"}>
          <span className={styles.buttonText}>Factor Xトップページへ戻る</span>
          <Image src="/list-mark/right-double.png" alt="ボタンアイコン" width={24} height={24} priority></Image>
        </SecondaryButton>
    </div>
  )
}