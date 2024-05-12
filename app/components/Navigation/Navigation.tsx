import Link from "next/link";
import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['ul']}>
        <li className={styles['li']}><Link href="/">Главная</Link></li>
        <li className={styles['li']}><Link href="/">Товары</Link></li>
        <li className={styles['li']}><Link href="/">О нас</Link></li>
      </ul>
    </nav>
  );
}
