"use client";

import React from "react";
import styles from "./styles.module.css";
import emptyImg from "@/app/assets/images/manufacturer-hero-image.png";
import Image from "next/image";
import ProductBox from "./components/ProductBox";
import { Navigation } from "./components/Navigation/Navigation";

export function Products() {
  return (
    <>
      <h2 className={styles["h2"]}>Товары</h2>
      <div className={styles["products-container"]}>
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
      <Navigation />
    </>
  );
}
