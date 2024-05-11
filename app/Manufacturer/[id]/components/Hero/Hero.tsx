import Image from "next/image";
import styles from "./styles.module.css";
import emptyImage from "@/app/assets/images/manufacturer-hero-image.png";

export default function Hero() {
  return (
    <div className={styles["hero"]}>
      <Image
        src={emptyImage}
        width={0}
        height={0}
        alt="hero image"
        className={styles["hero-img"]}
      />
      <div className={styles["hero-description"]}>
        <h1>Logo</h1>
        <h3>производителя (пнг на прозрачном фоне)</h3>
        <p className={styles["description"]}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
    </div>
  );
}
