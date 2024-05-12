"use client";
import utf8 from "utf8";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import ProductBox from "@/app/Manufacturer/[id]/components/Products/components/ProductBox";
import { Checkbox } from "./components/Checkbox/Checkbox";
// product_steel=12
// manufacturer_id=6
export default function page() {
  const params = useParams();
  const [productsData, setProductsData] = useState([]);
  const [metals, setMetals] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [checkboxesList, setCheckboxesList] = useState({
    metals: [],
    manufacturers: [],
  });
  useEffect(() => {
    fetch(
      `https://nozhtopor.na4u.ru/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf&search=${params?.text}`
    )
      .then((response) => response.json())
      .then((data) => setProductsData(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://nozhtopor.na4u.ru/wp-json/wp/v2/steels?acf_format=standard&_fields=id,name`
    )
      .then((response) => response.json())
      .then((data) => setMetals(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://nozhtopor.na4u.ru/wp-json/wp/v2/manufacturers?acf_format=standard&_fields=id,name,acf`
    )
      .then((response) => response.json())
      .then((data) => setManufacturers(data));
  }, []);

  console.log(checkboxesList);
  return (
    <main className={styles["main"]}>
      <p className={styles["search-title"]}>
        Поиск {`- ${decodeURIComponent(params?.text)}`}
      </p>

      <div className={styles["content-container"]}>
        <div className={styles["filters-container"]}>
          <p className={styles["filters-container-title"]}>
            Для удобства предлагаем воспользоваться фильтром{" "}
          </p>
          <div className={styles["filters"]}>
            <div className={styles["filter-block"]}>
              <div className={styles["filters-title-container"]}>
                <p className={styles["filters-title"]}>Производители</p>
              </div>
              <div className={styles["filters-options"]}>
                {manufacturers.map((manufacturer, index) => {
                  return (
                    <Checkbox
                      setCheckboxesList={setCheckboxesList}
                      key={index}
                      data={manufacturer}
                      checkboxesList={checkboxesList}
                      checkboxType="manufacturer"
                    />
                  );
                })}
              </div>
            </div>
            <div className={styles["filter-block"]}>
              <div className={styles["filters-title-container"]}>
                <p className={styles["filters-title"]}>Стали</p>
              </div>

              <div className={styles["filters-options"]}>
                {metals.map((metal, index) => {
                  return (
                    <Checkbox
                    checkboxesList={checkboxesList}
                      setCheckboxesList={setCheckboxesList}
                      key={index}
                      data={metal}
                      checkboxType="metal"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {productsData?.map((product, index) => {
          return <ProductBox product={product} key={index} />;
        })}
      </div>
        

    </main>
  );
}
