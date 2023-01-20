/**
 * ニュース一覧ページ
 */

import Meta from '@/components/base/Meta/Meta';
import News_ from '@/components/page/News/News';
import { getNewsCategory } from '@/features/news/api/getNewsCategory';
import { getNewsPost } from '@/features/news/api/getNewsPost';

export default function News({ newsPostList, newsCategoryList }) {
  return (
    <>
      <Meta
        pageTitle='ニュース一覧'
        pageDesc=''
      />
      <News_
        newsPostList={newsPostList}
        newsCategoryList={newsCategoryList}
      />
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
