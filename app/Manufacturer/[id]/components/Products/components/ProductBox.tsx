"use client";

import Image from "next/image";
import React from "react";
import emptyImg from "@/app/assets/images/manufacturer-hero-image.png";
import styles from "../styles.module.css";
import cart from "@/app/assets/icons/cart.svg";
import heart from "@/app/assets/icons/heart.svg";

export default function ProductBox() {
  return (
    <div className={styles["product-box"]}>
      <Image
        src={emptyImg}
        alt="emptyImg"
        width={0}
        height={0}
        className={styles["product-image"]}
      />
      <p className={styles["p-under-image"]}>Lorem ipsum Lorem ipsum </p>
      <div className={styles["price-and-icons-container"]}>
        <p className={styles["p-price"]}>13 990 руб.</p>
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
