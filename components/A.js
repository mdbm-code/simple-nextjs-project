import Link from 'next/link';
import styles from '../styles/A.module.css';

export default function A({ children, href }) {
  return (
    <Link href={href}>
      <span className={styles.link}>{children}</span>
    </Link>
  );
}
