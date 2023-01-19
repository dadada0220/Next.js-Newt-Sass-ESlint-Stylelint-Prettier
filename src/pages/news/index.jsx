/**
 * ニュース一覧ページ
 */

import Meta from '@/components/base/Meta/Meta';
import Inner from '@/components/base/Wrapper/Inner';
import { getNewsCategory } from '@/features/news/api/getNewsCategory';
import { getNewsPost } from '@/features/news/api/getNewsPost';
import NewsCategoryList from '@/features/news/components/NewsCategoryList';
import NewsPostList from '@/features/news/components/NewsPostList';

export default function News({ newsPostList, newsCategoryList }) {
  return (
    <>
      <Meta
        pageTitle='ニュース一覧'
        pageDesc=''
      />
      <Inner>
        <NewsCategoryList newsCategoryList={newsCategoryList} />
        <hr />
        <NewsPostList newsPostList={newsPostList} />
      </Inner>
    </>
  );
}

export async function getStaticProps(context) {
  const news = await getNewsPost({
    limit: process.env.NEXT_PUBLIC_NEWT_LIMIT,
  });
  const newsPostList = news.items;
  const category = await getNewsCategory();
  const categoryList = category.items;
  return {
    props: {
      newsPostList: newsPostList,
      newsCategoryList: categoryList,
    },
  };
}
