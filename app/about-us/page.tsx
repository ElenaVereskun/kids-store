import Image from "next/image";

import styles from "./page.module.css";

import AboutUsPhoto from "../../public/images/fhoto.jpg";
import AboutUsPhoto2 from "../../public/images/photo2.jpeg";
import AboutUsPhoto3 from "../../public/images/photo3.jpeg";
import AboutUsPhoto4 from "../../public/images/photo4.jpeg";
import InstagramLogo from "../../public/images/instagram.svg";
import Link from "next/link";
import Button from "../src/ui/Button";

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
          style={{ float: "left" }}
        />
        <span className={styles.info}>
          Мы — творческий и вдохновляющий магазин детской одежды, где каждая
          деталь создана с любовью и заботой. Магазин детской одежды — это не
          только место покупок, но и источник вдохновения и радости для детей и
          их родителей.
        </span>
        <br />
        <span>
          Мы уделяем особое внимание качеству нашей продукции. Все наши товары
          изготовлены из натуральных материалов, чтобы обеспечить комфорт и
          безопасность каждого ребенка.
        </span>
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
          <span style={{ marginTop: "60px" }}>
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
