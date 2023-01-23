/**
 * ニュース一覧
 */

import styles from './Archive.module.scss';
import Inner from '@/components/base/Wrapper/Inner';
import Pagination from '@/components/ui/Pagination/Pagination';
import NewsCategoryList from '@/features/news/components/NewsCategoryList';
import NewsPostList from '@/features/news/components/NewsPostList';

export default function Archive({ newsPostList, newsCategoryList, currentPage, pages, path }) {
  return (
    <>
      <Inner>
        <div className={styles.category}>
          <NewsCategoryList newsCategoryList={newsCategoryList} />
        </div>
        <div className={styles.post}>
          <NewsPostList newsPostList={newsPostList} />
        </div>
        <div className={styles.pagination}>
          <Pagination
            currentPage={currentPage}
            pages={pages}
            path={path}
          />
        </div>
      </Inner>
    </>
  );
}
