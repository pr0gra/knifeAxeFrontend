"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import emptyImg from "@/app/assets/images/manufacturer-hero-image.png";
import styles from "../styles.module.css";
import cart from "@/app/assets/icons/cart.svg";
import heart from "@/app/assets/icons/heart.svg";
import sanitizeHtml from "sanitize-html";
export default function ProductBox({ product }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavourite, setIsAddedToFavourite] = useState(false);

  const element = document.createElement("p");
  element.innerHTML = product.title.rendered;
  const decodedText = element.textContent;

  const handleAddToFavourite = () => {
    const favouriteStorage = JSON.parse(localStorage.getItem("favourite"));
    if (isAddedToFavourite) {
      const filteredStorage = favouriteStorage.filter(
        (elem) => elem.id !== product.id
      );
      localStorage.setItem("favourite", JSON.stringify([...filteredStorage]));
    } else {
      if (favouriteStorage === null) {
        localStorage.setItem("favourite", JSON.stringify([product]));
      } else {
        localStorage.setItem(
          "favourite",
          JSON.stringify([...favouriteStorage, product])
        );
      }
    }

    setIsAddedToFavourite((prev) => !prev);
  };
  const handleAddToCart = () => {
    const cartStorage = JSON.parse(localStorage.getItem("cart"));
    if (isAddedToCart) {
      const filteredStorage = cartStorage.filter(
        (elem) => elem.id !== product.id
      );
      localStorage.setItem("cart", JSON.stringify([...filteredStorage]));
    } else {
      if (cartStorage === null) {
        localStorage.setItem("cart", JSON.stringify([product]));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartStorage, product])
        );
      }
    }
    setIsAddedToCart((prev) => !prev);
  };

  return (
    <div className={styles["product-box"]}>
      <Image
        src={product.acf.product_thumbnail}
        alt="emptyImg"
        width={405}
        height={385}
        className={styles["product-image"]}
      />
      <p className={styles["p-under-image"]}>{decodedText}</p>
      <div className={styles["price-and-icons-container"]}>
        <p className={styles["p-price"]}>{product.acf.product_price} руб.</p>
        <button onClick={handleAddToFavourite}>
          <Image
            style={{ opacity: isAddedToFavourite ? "0.5" : "1" }}
            src={heart}
            alt="heart"
            width={0}
            height={0}
            className={styles["mini-icon"]}
          />
        </button>
        <button onClick={handleAddToCart}>
          <Image
            style={{ opacity: isAddedToCart ? "0.5" : "1" }}
            src={cart}
            alt="cart"
            width={0}
            height={0}
            className={styles["mini-icon"]}
          />
        </button>
      </div>
    </div>
  );
}
