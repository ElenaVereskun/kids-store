import React from "react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./photoSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PhotoSwiper() {
  const parametr = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 1000,
    loop: false,
    modules: [Pagination],
    pagination: {
      bulletActiveClass: styles.custom_swiper_pagination_bullet_active,
      bulletClass: styles.custom_swiper_pagination_bullet,
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    breakpoints: {
      383: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 1,
      },
    },
  };

  const simpleData = [
    {
      id: 1,
      imagePhoto: "app/src/images/fhoto.jpg",
    },
    {
      id: 2,
      imagePhoto: "app/src/images/fhoto.jpg",
    },
    {
      id: 3,
      imagePhoto: "app/src/images/fhoto.jpg",
    },
    {
      id: 4,
      imagePhoto: "app/src/images/fhoto.jpg",
    },
  ];

  return (
    <div className={styles.slider_container}>
      <Swiper {...parametr} className={styles.swiper}>
        {simpleData &&
          simpleData.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <Image src={item.imagePhoto} alt="фото" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
