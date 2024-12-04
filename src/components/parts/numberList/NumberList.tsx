import React from 'react'
import { ListMarkNumber } from '../listMark/listMarkNumber/ListMarkNumber';
import styles from "./NumberList.module.scss";

interface ListProps {
    list: {
      id: number;
      text: string;
      text2?: string;
    }[];
}

export const NumberList = ({list}: ListProps) => {
  return (
    <ol className={styles.list}>
    {list?.map((list) => (
        <li key={list.id} className={styles.listContents}>
            <ListMarkNumber>{list.id + 1}</ListMarkNumber>
            <p className={styles.liText}>
              {list.text}
            </p>
        </li>
    ))}  
</ol>
  )
}