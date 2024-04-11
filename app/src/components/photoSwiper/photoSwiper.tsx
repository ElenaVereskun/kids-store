"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import photo1 from "../../../../public/images/priroda.jpg";
import photo2 from "../../../../public/images/priroda2.jpeg";
import photo3 from "../../../../public/images/priroda3.jpg";
import photo4 from "../../../../public/images/photo2.jpeg";

import styles from "./photoSwiper.module.css";

export default function PhotoSwiper() {
  const parametr = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    createElements: true,
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
      imagePhoto: photo1,
    },
    {
      id: 2,
      imagePhoto: photo2,
    },
    {
      id: 3,
      imagePhoto: photo3,
    },
    {
      id: 4,
      imagePhoto: photo4,
    },
  ];

  return (
    <div className={styles.slider_container}>
      <Swiper {...parametr} className={styles.swiper}>
        {simpleData &&
          simpleData.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <Image
                src={item.imagePhoto}
                alt="фото"
                width={1160}
                height={700}
              />

              <div className="swiper-pagination"></div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
