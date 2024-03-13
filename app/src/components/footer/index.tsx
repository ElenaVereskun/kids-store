import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.svg";
import InstagramLogo from "../../images/instagram.svg";
import WhatsAppIcon from "../../images/whats-appIcon.svg";
import TelegramIcon from "../../images/telegramIcon.svg";
import PinterestIcon from "../../images/pinterestIcon.svg";
import Button from "../../ui/Button";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <nav className={styles.container}>
        <div className={styles.links}>
          <Link href="/">
            <Image src={logo} alt="лого" width={50} height={50} />
          </Link>
          <Link href="store" className={styles.link}>
            Магазин
          </Link>
          <Link href="about-us" className={styles.link}>
            О нас
          </Link>
          <Link href="lookbook" className={styles.link}>
            Lookbook
          </Link>
          <Link href="buy" className={styles.link}>
            ОБМЕН И ВОЗВРАТ
          </Link>
          <Link href="buy" className={styles.link}>
            ОПЛАТА И ДОСТАВКА
          </Link>
          <Link href="contacts" className={styles.link}>
            Контакты
          </Link>
        </div>

        <div className={styles.linksFooter}>
          <div>
            <p className={styles.link}>+79274539717</p>
            <p className={styles.link}>CHILDOM.OFFICIAL@YANDEX.RU</p>
          </div>

          <div className={styles.icons}>
            <Button type="small" variant="brownMedium" icon={InstagramLogo} />
            <a href="https://wa.me/+79032001004">
              <Button type="small" variant="brownMedium" icon={WhatsAppIcon} />
            </a>
            <a href="https://t.me/+79032001004">
              <Button type="small" variant="brownMedium" icon={TelegramIcon} />
            </a>

            <Button type="small" variant="brownMedium" icon={PinterestIcon} />
          </div>
          <div>
            <Link href="public-offer" className={styles.link}>
              ПУБЛИЧНАЯ ОФЕРТА
            </Link>
            <Link href="privacy-policy" className={styles.link}>
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </Link>
          </div>
        </div>
        <div className={styles.prava}>
          <span>© 2024 СHILDOM</span>
          <span>ВСЕ ПРАВА ЗАЩИЩЕНЫ</span>
          <span> • ИП НАШИРВАНОВ Н.Ф</span>
          <span> • ОГРНИП 321169000146781</span>
          <span> • ИНН 164001490980</span>
        </div>
      </nav>
    </footer>
  );
}
