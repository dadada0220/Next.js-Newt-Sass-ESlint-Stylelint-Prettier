/**
 * ページネーション
 */

import Link from 'next/link';
import styles from './Pagination.module.scss';

export default function Pagination({ currentPage, pages, path }) {
  if (pages.length === 1) return;
  // pagesの中から今のページ数のインデックスを取得
  const currentPageIndex = pages.indexOf(Number(currentPage));
  // ページネーションに必要な情報を作成
  const pagination = {
    prevPrev: pages[currentPageIndex - 2],
    prev: pages[currentPageIndex - 1],
    current: pages[currentPageIndex],
    next: pages[currentPageIndex + 1],
    nextNext: pages[currentPageIndex + 2],
  };
  const { prevPrev, prev, current, next, nextNext } = pagination;

  return (
    <>
      <ul className={styles.pagination}>
        {prev && (
          <li>
            <a href={`${path}/page/${prev}`}>前へ</a>
          </li>
        )}
        {prevPrev && (
          <li>
            <a href={`${path}/page/${prevPrev}`}>{prevPrev}</a>
          </li>
        )}
        {prev && (
          <li>
            <a href={`${path}/page/${prev}`}>{prev}</a>
          </li>
        )}
        <li>
          <span className={styles.isCurrent}>{current}</span>
        </li>
        {next && (
          <li>
            <a href={`${path}/page/${next}`}>{next}</a>
          </li>
        )}
        {nextNext && (
          <li>
            <a href={`${path}/page/${nextNext}`}>{nextNext}</a>
          </li>
        )}
        {next && (
          <li>
            <a href={`${path}/page/${next}`}>次へ</a>
          </li>
        )}
      </ul>
    </>
  );
}
