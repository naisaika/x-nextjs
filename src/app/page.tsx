import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.top}>
      <h1>面接ガイド</h1>
      <Link href="/candidate/guide03">Step.03｜準備編｜内定を勝ち取る！面接対策</Link><br></br>
      <Link href="/candidate/guide04">Step.04｜当日編｜内定を勝ち取る！面接対策</Link>
    </div>
  );
}
