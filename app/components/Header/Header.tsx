import Image from "next/image";
import styles from "./Header.module.css";

import location from "../../assets/icons/location.svg";
import logo from "../../assets/images/LOGO.png";
import search from "../../assets/icons/search.svg";
import favourite from "../../assets/icons/favourite.svg";
import cart from "../../assets/icons/cart.svg";
import Link from "next/link";

export default async function Header() {
  const headerData = await (
    await fetch(`http://nozhtopor.na4u.ru/wp-json/wp/v2/site-options`)
  ).json();
  return (
    <header className={styles["header"]}>
      <Link className={styles["logo"]} href="/">
        <Image width={280} height={81} src={headerData.site_logo} alt="logo" />
      </Link>
      <div className={styles["location-container"]}>
        <Image src={location} alt="location" />
        <div className={styles['location-text-conatiner']}>
          <p  className={styles["location-text"]}>{headerData.adress_1} </p>
          <p className={styles["location-text"]}>{headerData.adress_2}</p>
        </div>
      </div>
      <div className={styles["phone-container"]}>
        <p>{headerData.phone}</p>
      </div>
      <div className={styles["input-container"]}>
        <input className={styles["input"]} type="text" placeholder="поиск" />
        <Image src={search} alt="search" />
      </div>
      <div className={styles["panel-container"]}>
        <Image src={favourite} alt="favourite" />{" "}
        <Image src={cart} alt="cart" />
      </div>
    </header>
  );
}
