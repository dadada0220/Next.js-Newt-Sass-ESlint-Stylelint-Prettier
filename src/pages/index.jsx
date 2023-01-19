/**
 * トップページ
 */

import Link from 'next/link';
import Meta from '@/components/base/Meta/Meta';
import Inner from '@/components/base/Wrapper/Inner';

export default function Home({}) {
  return (
    <>
      <Meta
        pageTitle=''
        pageDesc=''
      />
      <Inner>
        <p>ここはトップページです。</p>
        <br />
        <Link href='/news'>ニュースページへ</Link>
      </Inner>
    </>
  );
}
