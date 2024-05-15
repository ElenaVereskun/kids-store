import Image from "next/image";
import Link from "next/link";
import Button from "../src/ui/Button";

import AboutUsPhoto from "../../public/images/photoAboutUs.jpg";
import AboutUsPhoto2 from "../../public/images/photoAboutUs1.jpg";
import AboutUsPhoto3 from "../../public/images/photoAboutUs2.jpg";
import AboutUsPhoto4 from "../../public/images/photoAboutUs3.jpg";
import InstagramLogo from "../../public/images/instagram.svg";

import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>О НАC</h2>
      <span>&quot;Mikiniki&quot; - детская одежда с заботой о малыше</span>
      <div className={styles.imagePhoto}>
        <Image
          src={AboutUsPhoto}
          className={styles.image}
          alt="фото о нас"
          height={360}
          width={280}
          /* style={{ float: "left" }} */
        />
        <div className={styles.info}>
          <span>
            Мы — творческий и вдохновляющий магазин детской одежды, где каждая
            деталь создана с любовью и заботой. Магазин детской одежды — это не
            только место покупок, но и источник вдохновения и радости для детей
            и их родителей.
          </span>

          <span>
            Мы уделяем особое внимание качеству нашей продукции. Все наши товары
            изготовлены из натуральных материалов, чтобы обеспечить комфорт и
            безопасность каждого ребенка.
          </span>
        </div>
      </div>

      <div className={styles.insta}>
        <div className={styles.containerText}>
          <h3>ПОДПИСЫВАЙСЯ НА НАС</h3>
          <h2>INSTAGRAM</h2>
          <Link
            href="https://www.instagram.com/mikiniki_shop?igsh=MTNwOThhdmhjMHQxYg=="
            target="_blank"
          >
            <Button type="small" variant="noBackground" icon={InstagramLogo} />
          </Link>
          <span style={{ marginTop: "40px" }}>
            Здесь про красоту, про уютное детство, про любовь и заботу.
          </span>
        </div>

        <div className={styles.containerPhoto}>
          <Image
            src={AboutUsPhoto}
            className={styles.image}
            alt="фото о нас"
            height={300}
            width={300}
          />
          <Image
            src={AboutUsPhoto4}
            className={styles.image}
            alt="фото о нас"
            height={300}
            width={300}
          />
          <Image
            src={AboutUsPhoto2}
            className={styles.image}
            alt="фото о нас"
            height={300}
            width={300}
          />
          <Image
            src={AboutUsPhoto3}
            className={styles.image}
            alt="фото о нас"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
