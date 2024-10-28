import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.top}>
      <h1>就活完全ガイド</h1>
      <Link href="/candidate/guide-top">就活完全ガイドへ</Link><br></br>
    </div>
  );
}
