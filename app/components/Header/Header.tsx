import Image from "next/image";
import styles from "./Header.module.css";

import location from "../../assets/icons/location.svg";
import logo from "../../assets/images/LOGO.png";
import search from "../../assets/icons/search.svg";
import favourite from "../../assets/icons/favourite.svg";
import cart from "../../assets/icons/cart.svg";

export function Header() {
  return (
    <header className={styles["header"]}>
      <Image className={styles["logo"]} src={logo} alt="logo" />
      <div className={styles["location-container"]}>
        <Image src={location} alt="location" />
        <p className={styles["location-text"]}>Адрес</p>
      </div>
      <div className={styles["phone-container"]}>
        <p>8(000)000-00-00</p>
      </div>
      <div className={styles["input-container"]}>
        <input className={styles['input']} type="text" placeholder="поиск" />
        <Image src={search} alt="search" />
      </div>
      <div className={styles["panel-container"]}>
        <Image src={favourite} alt="favourite" />{" "}
        <Image src={cart} alt="cart" />
      </div>
    </header>
  );
}
