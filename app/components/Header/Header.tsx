"use client";

import Image from "next/image";
import styles from "./Header.module.css";

import location from "../../assets/icons/location.svg";
import logo from "../../assets/images/LOGO.png";
import search from "../../assets/icons/search.svg";
import favourite from "../../assets/icons/favourite.svg";
import cart from "../../assets/icons/cart.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [headerData, setHeaderData] = useState({});
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(`https://nozhtopor.na4u.ru/wp-json/wp/v2/site-options`)
      .then((response) => response.json())
      .then((data) => setHeaderData(data));
  }, []);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <header className={styles["header"]}>
      <Link className={styles["logo"]} href="/">
        <Image width={280} height={81} src={headerData.site_logo} alt="logo" />
      </Link>
      <div className={styles["location-container"]}>
        <Image src={location} alt="location" />
        <div className={styles["location-text-conatiner"]}>
          <p className={styles["location-text"]}>{headerData.adress_1} </p>
          <p className={styles["location-text"]}>{headerData.adress_2}</p>
        </div>
      </div>
      <div className={styles["phone-container"]}>
        <p>{headerData.phone}</p>
      </div>
      <form className={styles["input-container"]}>
        <input
          id="text"
          onChange={onChange}
          className={styles["input"]}
          type="text"
          placeholder="поиск"
        />
        <Link href={`/Search/${input}`}>
          <Image src={search} alt="search" />
        </Link>
      </form>
      <div className={styles["panel-container"]}>
        <Link href="/Favourite">
          <Image src={favourite} alt="favourite" />
        </Link>
        <Link href="/CartPage">
          <Image src={cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
}
