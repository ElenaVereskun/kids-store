import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <nav className={styles.container}>
        <Link href="/">Главная</Link>
        <Link href="store">Магазин</Link>
        <Link href="about-us">О нас</Link>
        <Link href="lookbook">Lookbook</Link>
        <Link href="buy">Покупателям</Link>
        <Link href="contacts">Контакты</Link>
      </nav>
    </div>
  );
}
