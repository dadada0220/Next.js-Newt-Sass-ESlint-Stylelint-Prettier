/**
 * フッター
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer({}) {
  return (
    <>
      <footer className={styles.footer}>
        <small className={styles.copyright}>&copy; 2023 next-template.</small>
      </footer>
    </>
  );
}
