/**
 * ニュースのカテゴリー一覧
 */

import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsCategoryList.module.scss';

export default function NewsCategoryList({ newsCategoryList }) {
  return (
    <>
      <ul className={styles.NewsCategoryList}>
        <li>
          <Link href='/news'>ALL</Link>
        </li>
        {newsCategoryList.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/news/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
