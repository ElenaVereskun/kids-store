import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import InstagramLogo from "../../../../public/images/instagram.svg";
import WhatsAppIcon from "../../../../public/images/whats-appIcon.svg";
import TelegramIcon from "../../../../public/images/telegramIcon.svg";
import PinterestIcon from "../../../../public/images/pinterestIcon.svg";
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
          <Link href="store">Магазин</Link>
          <Link href="about-us">О нас</Link>
          <Link href="lookbook">Lookbook</Link>
          <Link href="buy">ОБМЕН И ВОЗВРАТ</Link>
          <Link href="buy">ОПЛАТА И ДОСТАВКА</Link>
          <Link href="contacts">Контакты</Link>
        </div>

        <div className={styles.linksFooter}>
          <div>
            <p>+79274539717</p>
            <p>CHILDOM.OFFICIAL@YANDEX.RU</p>
          </div>

          <div className={styles.icons}>
            <Link
              href="https://www.instagram.com/mikiniki_shop?igsh=MTNwOThhdmhjMHQxYg=="
              target="_blank"
            >
              <Button type="small" variant="brownMedium" icon={InstagramLogo} />
            </Link>
            <Link href="https://wa.me/+79032001004" target="_blank">
              <Button type="small" variant="brownMedium" icon={WhatsAppIcon} />
            </Link>
            <Link href="https://t.me/+79032001004" target="_blank">
              <Button type="small" variant="brownMedium" icon={TelegramIcon} />
            </Link>

            <Button type="small" variant="brownMedium" icon={PinterestIcon} />
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
          <span> • ОГРНИП 321169000146781</span>
          <span> • ИНН 164001490980</span>
        </div>
        <div className={styles.dev}>
          <Link href="https://t.me/+79299715582" target="_blank">
            Сайт сделан
            <Button type="small" variant="brownMedium" icon={TelegramIcon} />
            Верескун Е.И.
          </Link>
        </div>
      </nav>
    </footer>
  );
}
