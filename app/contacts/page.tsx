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
      <div className={styles.container}>
        <Image
          src={AboutUsPhoto}
          width={500}
          height={600}
          className={styles.image}
          alt="фото о нас"
        />
        <div>
          <div>
            <h2>Наши контакты</h2>
            <div className={styles.contacts}>
              <span>
                Для самой быстрой связи вы можете написать нам в Whats&lsquo;App
                или на почту
              </span>
              <br></br>
              <a
                href="https://wa.me/+79060577065"
                className={styles.link}
                target="_blank"
              >
                +7(906) 057-70-65
              </a>
              <br></br>
              <a
                href="mailto:mikiniki-shop@yandex.ru"
                className={styles.link}
                target="_blank"
              >
                mikiniki-shop@yandex.ru
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
                <Button
                  type="small"
                  variant="noBackground"
                  icon={InstagramLogo}
                />
              </a>
              <a href="https://wa.me/+79060577065" target="_blank">
                <Button
                  type="small"
                  variant="noBackground"
                  icon={WhatsAppIcon}
                />
              </a>
              <a href="https://t.me/+79060577065" target="_blank">
                <Button
                  type="small"
                  variant="noBackground"
                  icon={TelegramIcon}
                />
              </a>
              <a href="#">
                <Button
                  type="small"
                  variant="noBackground"
                  icon={PinterestIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
