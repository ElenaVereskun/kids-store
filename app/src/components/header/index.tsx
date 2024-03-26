"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useUnit } from "effector-react";

import logo from "../../../../public/images/logo.svg";
import search from "../../../../public/images/search.svg";
import basket from "../../../../public/images/baske.svg";

import { $searchModal, openSearchModal } from "../../../context/modals";
import {
  addOverflowHiddenFromBody,
  handleCloseSearchModal,
} from "../../../lib/utils/commons";

import styles from "./header.module.css";

export default function Header() {
  const searchModal = useUnit($searchModal);

  const handleOpenSearchModal = () => {
    openSearchModal();
    addOverflowHiddenFromBody;
  };
  console.log(searchModal);
  return (
    <header>
      <div
        className={
          searchModal ? styles.searchOverlayActive : styles.searchOverlayNone
        }
        onClick={handleCloseSearchModal}
      ></div>
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
    </header>
  );
}
