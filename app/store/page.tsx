"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./store.module.css";
import React from "react";
import CardPhoto from "../../public/images/cardPhoto.jpg";

type ICard = {
  photo: string;
  title: string;
  price: number;
};

export default function Store() {
  const [isOpenDrop, setIsOpenDrop] = React.useState(false);

  const toggleDrop = () => {
    setIsOpenDrop(!isOpenDrop);
  };

  const closeDrop = () => {
    setIsOpenDrop(false);
  };

  const items: ICard = {
    photo: "/../../public/images/cardPhoto.jpg",
    title: "Название",
    price: 100500,
  };
  return (
    <section className={styles.section}>
      <div className={styles.topStore}>
        <Link href="/store/vesna">Vesna</Link>
        <div className={styles.categories}>
          <button onClick={toggleDrop}>Категории товаров</button>
          {isOpenDrop && (
            <div className={styles.dropContainer}>
              <ol>
                <li>
                  <Link href="/vest">Тельняшки</Link>
                </li>
                <li>
                  <Link href="/up">Верх</Link>
                </li>
                <li>
                  <Link href="/store/for-girls">Наряды для девочек</Link>
                </li>
                <li>
                  <Link href="/dresses">Платья</Link>
                </li>
                <li>
                  <Link href="/for-boys">Для мальчиков</Link>
                </li>
                <li>
                  <Link href="/costumes">Костюмы</Link>
                </li>
                <li>
                  <Link href="/for-newborn">Для новорожденных</Link>
                </li>
                <li>
                  <Link href="/for-mums">Для мам</Link>
                </li>
              </ol>
            </div>
          )}
        </div>
        <Link href="#">Все товары</Link>
        <Link href="#">Аксессуары</Link>
        <Link href="#">Предзаказ</Link>
      </div>
      <div className={styles.cardList}>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
        <div className={styles.card}>
          <Image src={CardPhoto} alt="photo" width={270} height={270} />
          <h2>{items.title}</h2>
          <p>{items.price} руб</p>
        </div>
      </div>
    </section>
  );
}
