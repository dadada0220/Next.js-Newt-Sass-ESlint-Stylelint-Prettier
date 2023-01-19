/**
 * フッター
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer({}) {
  return (
    <>
      <footer className={styles.Footer}>
        <small className={styles.Footer__copyright}>&copy; 2023 next-template.</small>
      </footer>
    </>
  );
}
