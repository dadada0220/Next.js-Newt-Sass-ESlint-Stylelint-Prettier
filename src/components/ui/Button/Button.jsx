/**
 * ボタン
 */

import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button({}) {
  return (
    <>
      <Link
        href='/'
        className={styles.Button}
      >
        Button
      </Link>
    </>
  );
}
