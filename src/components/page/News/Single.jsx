/**
 * ニュースの詳細ページ
 */

import styles from './Single.module.scss';
import Inner from '@/components/base/Wrapper/Inner';
import NewsPostDetail from '@/features/news/components/NewsPostDetail';

export default function Single({ news }) {
  return (
    <>
      <Inner isSmall>
        <div className={styles.news}>
          <NewsPostDetail news={news} />
        </div>
      </Inner>
    </>
  );
}
