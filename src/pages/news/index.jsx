/**
 * ニュース一覧ページ
 */

import Meta from '@/components/base/Meta/Meta';
import Archive from '@/components/page/News/Archive';
import { getNewsCategory } from '@/features/news/api/getNewsCategory';
import { getNewsPost } from '@/features/news/api/getNewsPost';
import { getPages } from '@/features/news/api/getPages';

export default function News({ newsPostList, newsCategoryList, pages }) {
  return (
    <>
      <Meta
        pageTitle={`ニュース一覧`}
        pageDesc=''
      />
      <Archive
        newsPostList={newsPostList}
        newsCategoryList={newsCategoryList}
        currentPage={1}
        pages={pages}
        path={`/news`}
      />
    </>
  );
}

export async function getStaticProps(context) {
  // カテゴリー一覧を取得
  const category = await getNewsCategory();
  const categoryList = category.items;
  // 投稿を取得
  const news = await getNewsPost({
    limit: process.env.NEXT_PUBLIC_NEWT_LIMIT,
  });
  const newsPostList = news.items;
  // ページネーションで使う情報を取得
  const pages = await getPages();
  return {
    props: {
      newsPostList: newsPostList,
      newsCategoryList: categoryList,
      pages: pages,
    },
  };
}
