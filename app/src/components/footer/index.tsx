import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import InstagramLogo from "../../../../public/images/instagram.svg";
import WhatsAppIcon from "../../../../public/images/whats-appIcon.svg";
import TelegramIcon from "../../../../public/images/telegramIcon.svg";
import PinterestIcon from "../../../../public/images/pinterestIcon.svg";
import Button from "../../ui/Button";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.container}>
        <div className={styles.links}>
          <Link href="/">
            <Image src={logo} alt="лого" width={50} height={50} />
          </Link>
          <Link href="shop">Магазин</Link>
          <Link href="about-us">О нас</Link>
          <Link href="buy">ОБМЕН И ВОЗВРАТ</Link>
          <Link href="buy">ОПЛАТА И ДОСТАВКА</Link>
          <Link href="contacts">Контакты</Link>
        </div>

        <div className={styles.linksFooter}>
          <div className={styles.offer}>
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
          <div className={styles.icons}>
            <Link
              href="https://www.instagram.com/mikiniki_shop?igsh=MTNwOThhdmhjMHQxYg=="
              target="_blank"
            >
              <Image
                src={InstagramLogo}
                width={20}
                height={20}
                alt="инстаграм"
              />
            </Link>
            <Link href="https://wa.me/+79060577065" target="_blank">
              <Image src={WhatsAppIcon} width={20} height={20} alt="вотсапп" />
            </Link>
            <Link href="https://t.me/+79060577065" target="_blank">
              <Image src={TelegramIcon} width={20} height={20} alt="телеграм" />
            </Link>
            <Image src={PinterestIcon} width={20} height={20} alt="пинтерест" />
          </div>
          <div className={styles.offer}>
            <Link href="public-offer">ПУБЛИЧНАЯ ОФЕРТА</Link>
            <br />
            <Link href="privacy-policy">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
          </div>
        </div>
        <div className={styles.prava}>
          <span>© 2024 Mikiniki</span>
          <span>ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
          <span> • ИП Татаринцева Л.А.</span>
          <span> • ОГРНИП 324774600201687</span>
          <span> • ИНН 504011454078</span>
        </div>
        <div className={styles.dev}>
          <Link href="https://t.me/+79299715582" target="_blank">
            Сайт сделан Верескун Е.{" "}
            <Image
              src={TelegramIcon}
              alt="заказать сайт"
              width={15}
              height={15}
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
