/**
 * トップページ
 */

import Link from 'next/link';
import styles from './Index.module.scss';
import Inner from '@/components/base/Wrapper/Inner';

export default function Index({}) {
  return (
    <>
      <Inner>
        <div className={styles.mv}>
          <p>ここはトップページです。</p>
        </div>
        <div className={styles.link}>
          <Link href='/news'>ニュースページへ</Link>
        </div>
      </Inner>
    </>
  );
}
