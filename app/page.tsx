import { Manufacturers } from "./components/Manufacturers/Manufacturers";
import { News } from "./components/News/News";
import styles from "./page.module.css";

export default function Home() {
  return <main className={styles["main"]}>
    <Manufacturers />
    <News />
  </main>;
}
