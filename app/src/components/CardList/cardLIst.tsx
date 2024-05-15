"use client";
import Image from "next/image";
import CardPhoto from "../../../../public/images/photo4.jpeg";
import ICard from "../../../types/ICard";
import styles from "./cardList.module.css";

export default function CardList() {
  const items: ICard = {
    photo: CardPhoto,
    title: "Название",
    price: 100500,
  };

  return (
    <div className={styles.cardList}>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
      <div className={styles.card}>
        <Image
          src={CardPhoto}
          alt="photo"
          width={270}
          height={270}
          style={{ objectFit: "cover" }}
        />
        <h2>{items.title}</h2>
        <p>{items.price} руб</p>
      </div>
    </div>
  );
}
