"use client";
import { useEffect, useState } from "react";
import styles from "./NewsSlider.module.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
interface INewsData {
  acf: {
    post_img: string;
    post_location: string;
    post_subtitle: string;
    post_text: string;
    show_on_main_page: boolean;
  };
  id: number;
  title: { rendered: string };
}

export function NewsSlider() {
  const [newsData, setNewsData] = useState<INewsData[]>([]);
  useEffect(() => {
    fetch(
      "http://nozhtopor.na4u.ru/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,acf&show_on_main_page=true&post_location=up"
    )
      .then((response) => response.json())
      .then((data) => setNewsData(data));
  }, []);
  console.log(newsData);
  return (
    <section className={styles["news-slider"]}>
      <div className={styles["slider"]}>
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {newsData.map((newData, index) => {
            return (
              <SwiperSlide>
                <div
                  style={{ backgroundImage: `url(${newData.acf.post_img})` }}
                  className={styles["slider-element"]}
                >
                  <div className={styles["new-container"]}>
                    <p className={styles["title"]}>{newData.title.rendered}</p>
                    <p className={styles["subtitle"]}>
                      {newData.acf.post_subtitle}
                    </p>
                    <button className={styles["button"]}>
                      <p>Узнать больше</p>
                      <svg
                        width="35"
                        height="26"
                        viewBox="0 0 35 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 13.0002H32M21.9998 24.3139L33.3135 13.0002L21.9998 1.68652"
                          stroke="#F7F9FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
