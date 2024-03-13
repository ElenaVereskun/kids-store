import Image from "next/image";

import AboutUsPhoto from "../src/images/AboutUsFhoto3.jpg";
import InstagramLogo from "../src/images/instagram.svg";
import WhatsAppIcon from "../src/images/whats-appIcon.svg";
import TelegramIcon from "../src/images/telegramIcon.svg";
import PinterestIcon from "../src/images/pinterestIcon.svg";
import Button from "../src/ui/Button/index";

import styles from "./contacts.module.css";

export default function Contacts() {
  return (
    <>
      <Image src={AboutUsPhoto} className={styles.image} alt="фото о нас" />
      <div className={styles.container}>
        <div>
          <h2>Наши контакты</h2>
          <div className={styles.contacts}>
            <span>
              Для самой быстрой связи вы можете написать нам в Whats'App или на
              почту
            </span>
            <br></br>
            <a href="https://wa.me/+79032001004" className={styles.link}>
              +7(903) 200-10-04
            </a>
            <br></br>
            <a href="mailto:lena.vereskun@yandex.ru" className={styles.link}>
              lena.vereskun@yandex.ru
            </a>
          </div>
        </div>
        <div>
          <h2>Мы в социальных сетях</h2>
          <div className={styles.icons}>
            <a href="#">
              <Button type="small" variant="brownMedium" icon={InstagramLogo} />
            </a>
            <a href="https://wa.me/+79032001004">
              <Button type="small" variant="brownMedium" icon={WhatsAppIcon} />
            </a>
            <a href="https://t.me/+79032001004">
              <Button type="small" variant="brownMedium" icon={TelegramIcon} />
            </a>
            <a href="#">
              <Button type="small" variant="brownMedium" icon={PinterestIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
