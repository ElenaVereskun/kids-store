import Link from "next/link";
import styles from "./store.module.css";

export default function Store() {
  return (
    <div>
      <div className={styles.topStore}>
        <Link href="/vesna">Vesna</Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
        <Link href="#"></Link>
      </div>
    </div>
  );
}
