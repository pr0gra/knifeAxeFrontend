"use client";

import React from "react";
import styles from "./styles.module.css";
import ProductBox from "./components/ProductBox";
import { Navigation } from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export function Products() {
  const [productsData, setProductsData] = useState([]);
  const params = useParams<{ id: string }>();

  async function getProductsData() {
    try {
      const response = await fetch(
        `https://nozhtoporshop.na4u.ru/wp-json/custom/v1/products?manufacturer_id=${params.id}`
      );
      const data = await response.json();
      setProductsData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, [params]);

  return (
    <div className={styles["body"]}>
      {/* <div className={styles["fog"]} /> */}
      <h2 className={styles["h2"]}>Товары</h2>
      <div className={styles["products-container"]}>
        {productsData.map((product, index) => {
          return <ProductBox product={product} key={index} />;
        })}
      </div>
      {/* <Navigation /> */}
    </div>
  );
}
