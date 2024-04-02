"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "../../../../public/images/logo.png";
import search from "../../../../public/images/search.svg";

import { openSearchModal } from "../../../context/modals";
import { addOverflowHiddenFromBody } from "../../../lib/utils/commons";

import styles from "./header.module.css";
import CartPopup from "../CartPopup/CartPopup";

export default function Header() {
  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenFromBody;
  };

  return (
    <header>
      <nav className={styles.container}>
        <div className={styles.links}>
          <button
            className={styles.buttonSearch}
            onClick={handleOpenSearchModal}
          >
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
          <Image src={logo} alt="лого" width={150} height={150} />
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
          <CartPopup />
        </div>
      </nav>
    </header>
  );
}
