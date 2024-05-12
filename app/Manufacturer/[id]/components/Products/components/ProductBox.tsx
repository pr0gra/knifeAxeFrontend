"use client";

import Image from "next/image";
import React from "react";
import emptyImg from "@/app/assets/images/manufacturer-hero-image.png";
import styles from "../styles.module.css";
import cart from "@/app/assets/icons/cart.svg";
import heart from "@/app/assets/icons/heart.svg";

export default function ProductBox({product}) {
  return (
    <div className={styles["product-box"]}>
      <Image
        src={product.acf.product_thumbnail}
        alt="emptyImg"
        width={405}
        height={385}
        className={styles["product-image"]}
      />
      <p className={styles["p-under-image"]}>{product.title.rendered} </p>
      <div className={styles["price-and-icons-container"]}>
        <p className={styles["p-price"]}>{product.acf.product_price} руб.</p>
        <Image
          src={heart}
          alt="heart"
          width={0}
          height={0}
          className={styles["mini-icon"]}
        />
        <Image
          src={cart}
          alt="cart"
          width={0}
          height={0}
          className={styles["mini-icon"]}
        />
      </div>
    </div>
  );
}
