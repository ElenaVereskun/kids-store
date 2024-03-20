"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.svg";
import search from "../../../../public/images/search.svg";
import basket from "../../../../public/images/baske.svg";
import styles from "./header.module.css";
import { useLang } from "../../../hooks/useLang";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const popupSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const closeDrop = () => {
    setIsSearchOpen(false);
  };

  const { lang, translations } = useLang();

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.links}>
          <button className={styles.buttonSearch} onClick={popupSearchOpen}>
            <Image src={search} alt="поиск" width={25} height={25} />
            {isSearchOpen && (
              <div className={styles.popup}>
                <input placeholder="поиск товара"></input>
              </div>
            )}
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
        <button>{translations[lang].header.menu}</button>
      </nav>
    </header>
  );
}
