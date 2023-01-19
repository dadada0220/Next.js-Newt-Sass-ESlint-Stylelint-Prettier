/**
 * ヘッダー
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header({}) {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Header__inner}>
          <div className={styles.Header__logo}>
            <Link href='/'>
              <Image
                src={'/img/logo/logo.svg'}
                alt=''
                width='160'
                height='160'
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
