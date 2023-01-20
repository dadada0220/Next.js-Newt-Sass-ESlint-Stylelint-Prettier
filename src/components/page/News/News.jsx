/**
 * ニュース
 */

import styles from './News.module.scss';
import Inner from '@/components/base/Wrapper/Inner';
import NewsCategoryList from '@/features/news/components/NewsCategoryList';
import NewsPostList from '@/features/news/components/NewsPostList';

export default function News({ newsPostList, newsCategoryList }) {
  return (
    <>
      <Inner>
        <div className={styles.category}>
          <NewsCategoryList newsCategoryList={newsCategoryList} />
        </div>
        <div className={styles.post}>
          <NewsPostList newsPostList={newsPostList} />
        </div>
      </Inner>
    </>
  );
}
