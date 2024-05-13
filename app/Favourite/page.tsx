"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import ProductBox from "../Manufacturer/[id]/components/Products/components/ProductBox";

export default function page() {
  const [favouriteData, setFavouriteData] = useState(
    JSON.parse(String(localStorage.getItem("favourite")) || "")
  );

  console.log(favouriteData, "AAAAAAAAA");
  return (
    <div className={styles["favourite-container"]}>
      {favouriteData?.map((data: any) => {
        return <ProductBox product={data} key={data.id} />;
      })}
    </div>
  );
}
