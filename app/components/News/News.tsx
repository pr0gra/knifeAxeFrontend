"use client";

import { useEffect, useState } from "react";
import styles from "./News.module.css";
import Image from "next/image";
import arrow from "../../assets/icons/arrow-to-right.svg";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export interface INews {
  id: number;
  title: { rendered: string };
  acf: {
    show_on_main_page: string;
    post_location: string;
    post_subtitle: string;
    post_img: string;
    post_text: string;
  };
}

export function News() {
  const [news, setNews] = useState<INews[]>([]);
  async function getNewsData() {
    try {
      const response = await fetch(
        "https://nozhtopor.na4u.ru/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,acf&show_on_main_page=true&post_location=down"
      );
      const data = await response.json();
      setNews(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <div className={styles["news"]}>
      <p className={styles["news-title"]}>Новости</p>
      <div className={styles["news-container"]}>
      <Swiper
          slidesPerView={window.innerWidth < 900 ? 1 : 3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {news?.map((newData, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
              href={`/News/${newData.id}`}
              className={styles["new-containier"]}
              key={index}
            >
              <Image
                className={styles["main-img"]}
                width={405}
                height={392}
                src={newData.acf.post_img}
                alt="img"
              />
              <div className={styles["new-info"]}>
                <div className={styles['new-info-text-part']}>
                  <p className={styles["new-title"]}>
                    {newData.title.rendered.toLocaleUpperCase()}
                  </p>
                  <p className={styles["new-subtitle"]}>
                    {newData.acf.post_subtitle}
                  </p>
                </div>

                <Image src={arrow} className={styles["arrow-img"]} alt="img" />
              </div>
            </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </div>
  );
}
