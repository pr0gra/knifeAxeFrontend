import Link from "next/link";
import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav className={styles['navigation']}>
      <ul className={styles['ul']}>
        <li className={styles['li']}><Link href="/"> раздел1</Link></li>
        <li className={styles['li']}><Link href="/"> раздел2</Link></li>
        <li className={styles['li']}><Link href="/"> раздел3</Link></li>
      </ul>
    </nav>
  );
}
