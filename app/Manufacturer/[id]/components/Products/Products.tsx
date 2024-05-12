"use client";

import React from "react";
import styles from "./styles.module.css";
import ProductBox from "./components/ProductBox";
import { Navigation } from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export function Products() {
  const [productsData, setProductsData] = useState([]);
  const params = useParams<{ tag: string; item: string }>();
  useEffect(() => {
    fetch(
      `https://nozhtopor.na4u.ru/wp-json/wp/v2/products?manufacturer_id=${params.id}&acf_format=standard&_fields=id,title,acf`,
    )
      .then((response) => response.json())
      .then((data) => {console.log(data); setProductsData(data)});
  }, [params]);
  console.log(productsData);
  return (
    <>
      <h2 className={styles["h2"]}>Товары</h2>
      <div className={styles["products-container"]}>
        {productsData.map((product, index) => {
          return <ProductBox product={product} key={index} />;
        })}
      </div>
      <Navigation />
    </>
  );
}
