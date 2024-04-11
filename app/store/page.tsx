"use client";
import Link from "next/link";
import React from "react";
import CardPhoto from "../../public/images/cardPhoto.jpg";
import ICard from "../types/ICard";
import CardList from "../src/components/CardList/cardLIst";

import styles from "./store.module.css";

export default function Store() {
  const [isOpenDrop, setIsOpenDrop] = React.useState(false);

  const toggleDrop = () => {
    setIsOpenDrop(!isOpenDrop);
  };

  const closeDrop = () => {
    setIsOpenDrop(false);
  };

  const items: ICard = {
    photo: CardPhoto,
    title: "Название",
    price: 100500,
  };
  return (
    <section className={styles.section}>
      <div className={styles.topStore}>
        <div className={styles.categories}>
          <button onClick={toggleDrop}>Категории товаров</button>
          {isOpenDrop && (
            <div className={styles.dropContainer}>
              <ol>
                <li>
                  <Link href="/cloth">Одежда</Link>
                </li>
                <li>
                  <Link href="/outerwear">Верхняя одежда</Link>
                </li>
                <li>
                  <Link href="/plaid">Конверты пледы</Link>
                </li>
                <li>
                  <Link href="/towels">Пеленки полотенца</Link>
                </li>
                <li>
                  <Link href="/accessories">Аксессуары</Link>
                </li>
                <li>
                  <Link href="/toys">Игрушки</Link>
                </li>
              </ol>
            </div>
          )}
        </div>
        <Link href="#">Аксессуары</Link>
        <Link href="#">Игрушки</Link>
      </div>
      <CardList />
    </section>
  );
}
