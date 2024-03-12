import Image from "next/image";

import styles from "./page.module.css";

import AboutUsPhoto from "../src/images/AboutUsFhoto1.jpg";
import AboutUsPhoto2 from "../src/images/AboutUsFhoto2.jpg";
import AboutUsPhoto3 from "../src/images/AboutUsFhoto3.jpg";
import InstagramLogo from "../src/images/instagram.svg";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>О НАC</h2>
      <span>
        "ChildOm" - пространство уникальной детской одежды с нотками эстетики и
        романтизма, а также с заботой о малыше.{" "}
      </span>
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
          Мама и папа - самые близкие для ребенка люди. Малыш чувствует их
          тепло, ласку, поддержку, заботу и видит в них олицетворение добра и
          света. Философия нашего бренда о невидимой связи таких родных людей.
          Каждый из нас - это пример для своего чада. Они видят как мы радуемся,
          переживаем, помогаем, искренне любим и пытаются быть похожими. Наша
          одежда для ребенка - это один маленький и одновременно очень важный
          для ребенка шаг быть, как мама и папа, почувствовать себя взрослым и
          важным человеком в этом мире.
        </span>
        <div style={{ paddingTop: "60px" }}>
          <Image
            src={AboutUsPhoto}
            className={styles.image}
            alt="фото о нас"
            height={360}
            width={280}
          />
          <Image
            src={AboutUsPhoto}
            className={styles.image}
            alt="фото о нас"
            height={360}
            width={280}
          />
          <p style={{ display: "flex", width: "750px" }}>
            Мы вдохновляем Ваших детей. А парные образы связывают маму и ребенка
            невидимой нитью. Я как мама и папа...
          </p>
        </div>
      </div>

      <div>
        <p>
          CHILDOM УДЕЛЯЕТ ОСОБОЕ ВНИМАНИЕ НАТУРАЛЬНЫМ СОСТАВАМ И КРАСИВОЙ
          УПАКОВКЕ.
        </p>
        <Image src={AboutUsPhoto3} alt="фото о нас" height={780} width={805} />
      </div>
      <div className={styles.insta}>
        <div className={styles.containerText}>
          <h3>ПОДПИСЫВАЙСЯ НА НАС</h3>
          <h2>INSTAGRAM</h2>
          <button className={styles.buttonInstagram}>
            <Image
              src={InstagramLogo}
              alt="фото о нас"
              height={40}
              width={40}
            />
          </button>
          <p style={{ fontSize: "16px", width: "445px" }}>
            Здесь про вдохновение, про красивое детство, которое проживают с
            нами наши покупатели. Днк бренда передается в каждом кадре и мы
            безусловно этому рады. Наши изделия -это про любовь и заботу!
          </p>
        </div>

        <div className={styles.containerPhoto}>
          <Image
            src={AboutUsPhoto2}
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
            src={AboutUsPhoto2}
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
        </div>
      </div>
    </section>
  );
}
