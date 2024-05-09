"use client";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../assets/images/LOGO.png";
import Link from "next/link";
import vk from "../../assets/icons/vk.svg";
import youtube from "../../assets/icons/youtube.svg";
import phone from '../../assets/icons/phone.svg'
import letter from '../../assets/icons/letter.svg'

export function Footer() {
   const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    fetch("https://nozhtopor.na4u.ru/wp-json/wp/v2/site-options")
      .then((response) => response.json())
      .then((data) => setFooterData(data));
  }, []);
  return (
    <footer className={styles["footer"]}>
     <div className={styles['wrapper']}>
          <div className={styles["left-part"]}>
            <div className={styles["info"]}>
              <Image className={styles["logo"]} src={logo} alt="logo" />
              <div className={styles["description"]}>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
            <div className={styles["nav"]}>
              <Link className="link" href="/">
                раздел
              </Link>
              <Link className="link" href="/">
                раздел
              </Link>
              <Link className="link" href="/">
                раздел
              </Link>
              <Link className="link" href="/">
                раздел
              </Link>
            </div>
            <div className={styles["contact-social-media-container"]}>
              <div className={styles["social-media-row"]}>
                <Image src={vk} alt="vk" /> <p>Мы в ВКонтакте</p>
              </div>
              <div className={styles["social-media-row"]}>
                <Image src={youtube} alt="youtube" />
                <p>Мы в YouTube</p>
              </div>
            </div>
          </div>
          <div className={styles["contact-info-conatiner"]}>
            <p>Бесплатно по всей России</p>
            <div className={styles['contact-info-row']}><Image src={phone} alt="phone" /><p>8(000)000-00-00</p></div>
            <div className={styles['contact-info-row']}><Image src={letter} alt="letter" /><p>Loremipsum@mail.ru</p></div>
          </div>
     </div>
    </footer>
  );
}
