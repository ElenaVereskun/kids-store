import CardList from "./src/components/CardList/cardLIst";
import PhotoSwiper from "./src/components/photoSwiper/photoSwiper";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PhotoSwiper />
      <CardList />
    </main>
  );
}
