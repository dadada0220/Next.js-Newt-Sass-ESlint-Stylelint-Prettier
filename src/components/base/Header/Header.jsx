/**
 * ヘッダー
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header({}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
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
