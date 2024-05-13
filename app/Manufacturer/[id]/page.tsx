import React from "react";
import { Hero } from "./components/Hero/Hero";
import { Products } from "./components/Products/Products";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles["main"]}>
      <Hero />
      <Products />
    </main>
  );
}
