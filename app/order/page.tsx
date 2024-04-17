import Image from "next/image";
import photo from "../../public/images/cardPhoto.jpg";
import ICard from "../types/ICard";
import styles from "./styles.module.css";
import Button from "../src/ui/Button";

export default function Order() {
  const dataOrder: ICard = {
    photo: photo,
    title: "name",
    price: 20,
  };
  return (
    <div className={styles.container}>
      <h2>Корзина</h2>
      <div className={styles.tabContainer}>
        <ul className={styles.title}>
          <li>Изображение</li>
          <li>Название</li>
          <li>Цвет</li>
          <li>Размер</li>
          <li>Количество</li>
          <li>Сумма</li>
        </ul>
        <ul className={styles.orders}>
          <li>
            <Image src={dataOrder.photo} alt="photo" width={100} height={100} />
          </li>
          <li>{dataOrder.title}</li>
          <li>---</li>
          <li>---</li>
          <li>---</li>
          <li>{dataOrder.price} руб</li>
        </ul>
      </div>
      <div className={styles.tabMobileContainer}>
        <ul className={styles.title}>
          <li>Изображение</li>
          <li>Название</li>
          <li>Сумма</li>
        </ul>
        <ul className={styles.orders}>
          <li>
            <Image src={dataOrder.photo} alt="photo" width={100} height={100} />
          </li>
          <li>
            <div>{dataOrder.title}</div>
            <div>{dataOrder.title}</div>
            <div>{dataOrder.title}</div>
          </li>
          <li>{dataOrder.price} руб</li>
        </ul>
      </div>
      <div className={styles.orderSum}>
        <h3>Сумма заказа:</h3>
        <p>2000 руб</p>
      </div>
      <Button type="big" variant="brown" text="Заказать" />
    </div>
  );
}
