import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import basket from "../../images/baske.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.links}>
          <button className={styles.buttonSearch}>
            <Image src={search} alt="поиск" width={25} height={25} />
          </button>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
          <Link href="store" className={styles.link}>
            Магазин
          </Link>
          <Link href="about-us" className={styles.link}>
            О нас
          </Link>
        </div>
        <Link href="/">
          <Image src={logo} alt="лого" width={50} height={50} />
        </Link>

        <div className={styles.links}>
          <Link href="lookbook" className={styles.link}>
            Lookbook
          </Link>
          <Link href="buy" className={styles.link}>
            Покупателям
          </Link>
          <Link href="contacts" className={styles.link}>
            Контакты
          </Link>
          <button className={styles.buttonSearch}>
            <Image src={basket} alt="поиск" width={25} height={25} />
          </button>
        </div>
      </nav>
    </div>
  );
}
