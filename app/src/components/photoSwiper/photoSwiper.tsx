"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import photo1 from "../../../../public/images/photoMain.jpg";
import photo2 from "../../../../public/images/photoMain1.jpg";
import photo3 from "../../../../public/images/photoMain2.jpg";
import photo4 from "../../../../public/images/photoMain3.jpg";

import styles from "./photoSwiper.module.css";

export default function PhotoSwiper() {
  const parametr = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    createElements: true,
    followFinger: true, //it will not move while you hold your finger on it
    speed: 1000,
    loop: false,
    /*  mousewheel: { // Позволяет перемещаться по слайдам с помощью колесика мыши.
      invert: true,
    }, */
    modules: [Pagination],
    pagination: {
      bulletActiveClass: styles.custom_swiper_pagination_bullet_active,
      bulletClass: styles.custom_swiper_pagination_bullet,
      clickable: true,
      /* dynamicBullets: true, */
      /*  dynamicMainBullets: 4, */
    },
    /*  breakpoints: {
      383: {
        slidesPerView:'auto',
      },
      800: {
        slidesPerView: 'auto',
      },
      1000: {
        slidesPerView: 'auto',
      },
      1280: {
        slidesPerView: 'auto',
      },
    }, */
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
                width={1280}
                height={700}
                className={styles.image}
              />

              {/* <div className="swiper-pagination"></div> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
