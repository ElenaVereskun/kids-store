import Image from "next/image";

import AboutUsPhoto from "../../public/images/photo3.jpeg";
import InstagramLogo from "../../public/images/instagram.svg";
import WhatsAppIcon from "../../public/images/whats-appIcon.svg";
import TelegramIcon from "../../public/images/telegramIcon.svg";
import PinterestIcon from "../../public/images/pinterestIcon.svg";
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
            <a
              href="https://wa.me/+79032001004"
              className={styles.link}
              target="_blank"
            >
              +7(903) 200-10-04
            </a>
            <br></br>
            <a
              href="mailto:lena.vereskun@yandex.ru"
              className={styles.link}
              target="_blank"
            >
              lena.vereskun@yandex.ru
            </a>
          </div>
        </div>
        <div>
          <h2>Мы в социальных сетях</h2>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/mikiniki_shop?igsh=MTNwOThhdmhjMHQxYg=="
              target="_blank"
            >
              <Button type="small" variant="brownMedium" icon={InstagramLogo} />
            </a>
            <a href="https://wa.me/+79032001004" target="_blank">
              <Button type="small" variant="brownMedium" icon={WhatsAppIcon} />
            </a>
            <a href="https://t.me/+79032001004" target="_blank">
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
