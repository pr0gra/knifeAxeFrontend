"use client";

import { useEffect, useState } from "react";
import styles from "./Manufacturers.module.css";
import Image from "next/image";

export interface IManufacturers {
  id: number;
  name: string;
  acf: {
    manufacturer_description: string;
    manufacturer_img: string;
  };
}

export function Manufacturers() {
  const [manufacturers, setManufacturers] = useState<IManufacturers[]>([]);
  useEffect(() => {
    fetch(
      "https://nozhtopor.na4u.ru/wp-json/wp/v2/manufacturers?acf_format=standard&_fields=id,name,acf"
    )
      .then((response) => response.json())
      .then((data) => setManufacturers(data));
  }, []);

  const handleClickManufacturer = () => {};

  return (
    <section className={styles["manufacturers"]}>
      <p className={styles["title"]}>Производители</p>
      <div className={styles["manufacturers-container"]}>
        {" "}
        {manufacturers?.map((manufacturerData, index) => {
          return (
            <div className={styles["manufacturer-containier"]} key={index}>
              <button className={styles['button']} onClick={handleClickManufacturer}>
                <Image
                  className={styles["img"]}
                  width={406}
                  height={385}
                  src={manufacturerData.acf.manufacturer_img}
                  alt="img"
                />
              </button>

              <p className={styles["manufacturer-title"]}>
                {manufacturerData.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}