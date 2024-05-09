"use client";

import { useEffect, useState } from "react";
import styles from "./News.module.css";
import Image from "next/image";
import arrow from "../../assets/icons/arrow-to-right.svg";
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
  useEffect(() => {
    fetch(
      "https://nozhtopor.na4u.ru/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,acf&show_on_main_page=true&post_location=down"
    )
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className={styles["news"]}>
      <p className={styles["news-title"]}>Новости</p>
      <div className={styles["news-container"]}>
        {news?.map((newData, index) => {
          return (
            <div className={styles["new-containier"]} key={index}>
              <Image
                className={styles["main-img"]}
                width={405}
                height={392}
                src={newData.acf.post_img}
                alt="img"
              />
              <div className={styles["new-info"]}>
                <div>
                  <p className={styles["new-title"]}>
                    {(newData.title.rendered).toLocaleUpperCase()}
                  </p>
                  <p className={styles["new-subtitle"]}>
                    {newData.acf.post_subtitle}
                  </p>
                </div>

                <Image src={arrow} className={styles["arrow-img"]} alt="img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
