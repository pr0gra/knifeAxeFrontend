import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { headers } from "next/headers";

import { ImageSection } from "./components/ImageSection/ImageSection";
import { DescriptionSection } from "./components/DescriptionSection/DescriptionSection";
import { TitleSection } from "./components/TitleSection/TitleSection";

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

export interface Error {
  code: string;
  message: string;
  data: {
    status: number;
    params: { include: string };
    details: { include: [Object] };
  };
}
export default async function page() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  // console.log(fullUrl.split("/")[4], "fullUrlfullUrlfullUrl");

  const getPostData: IPostData[] | any = await (
    await fetch(
      `https://nozhtopor.na4u.ru/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,acf&include=${
        Number(fullUrl.split("/")[4])
      }`
    )
  ).json();
  console.log(getPostData, "AAAAAAAAAAAAAAA");
  return (
    <div className={styles["page-body"]}>
      {!getPostData[0] && getPostData.length !== 0 && (
        <p style={{ fontSize: "30px", color: "white" }}>Загрузка...</p>
      )}
      {getPostData.length == 0 && (
        <p style={{ fontSize: "30px", color: "white" }}>
          Такого поста не существует
        </p>
      )}
      {/* {getPostData[0] && ( */}
      <>
        <TitleSection
          title={getPostData[0]?.title.rendered}
          postTitle={getPostData[0]?.acf.post_subtitle}
        />

        <ImageSection image={getPostData[0]?.acf.post_img} />
        <DescriptionSection description={getPostData[0]?.acf.post_text} />
        {/* {getPostData[0] && <NewsBlocks data={getPostData[0]} />} */}
      </>
      {/* )} */}
    </div>
  );
}
