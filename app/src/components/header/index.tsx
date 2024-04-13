"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "../../../../public/images/logo.png";
import home from "../../../../public/images/home.svg";
import search from "../../../../public/images/search.svg";
import likes from '../../../../public/images/like.svg';
import account from '../../../../public/images/account-uncheck.svg';
import basket from '../../../../public/images/baske.svg';

import { openSearchModal } from "../../../context/modals";
import { addOverflowHiddenFromBody } from "../../../lib/utils/commons";

import styles from "./header.module.css";
import CartPopup from "../CartPopup/CartPopup";
import Button from "../../ui/Button";

export default function Header() {
  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenFromBody;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.links}>
          <button
            className={styles.button}
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
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="лого" width={80} height={80} />
          <p>Mikiniki</p>
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
      <nav className={styles.buttonMenu}>
        <Link href='/'>
          <Button type="small" variant="noBackground" icon={home} />
        </Link>
        <Button type="small" variant="noBackground" icon={search} />
        <Button type="small" variant="noBackground" icon={account} />
        <Button type="small" variant="noBackground" icon={likes} />
        <CartPopup />
      </nav>
    </header>
  );
}
