import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { ImageSection } from "./components/ImageSection/ImageSection";
import { DescriptionSection } from "./components/DescriptionSection/DescriptionSection";

interface ITitle {
  rendered: string;
}

export interface IPostData {
  id: number;
  title: ITitle;
  acf: {
    show_on_main_page: string;
    post_location: string;
    post_subtitle: string;
    post_img: string;
    post_text: string;
  };
}
export default async function page() {
  const getPostData: IPostData = await (
    await fetch(
      "http://nozhtopor.na4u.ru/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,acf&show_on_main_page=true&post_location=down"
    )
  ).json();

  return (
    <div className={styles["page-body"]}>
      {/* {getPostData && <ImageSection image={getPostData} />} */}
      <DescriptionSection />

      {/* {getNewsBlockData && <NewsBlocks data={getNewsBlockData} />} */}
    </div>
  );
}
