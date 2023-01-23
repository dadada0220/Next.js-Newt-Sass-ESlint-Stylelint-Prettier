/**
 * ニュース一覧ページ
 */

import Meta from '@/components/base/Meta/Meta';
import Archive from '@/components/page/News/Archive';
import { getNewsCategory } from '@/features/news/api/getNewsCategory';
import { getNewsPost } from '@/features/news/api/getNewsPost';
import { getPages } from '@/features/news/api/getPages';

export default function News({ newsPostList, newsCategoryList, currentPage, pages }) {
  return (
    <>
      <Meta
        pageTitle={`${currentPage}ページ目 | ニュース一覧`}
        pageDesc=''
      />
      <Archive
        newsPostList={newsPostList}
        newsCategoryList={newsCategoryList}
        currentPage={currentPage}
        pages={pages}
        path={`/news`}
      />
    </>
  );
}

export async function getStaticPaths() {
  // ページネーションで使う情報を取得
  let paths = [];
  const pages = await getPages();
  pages.forEach((_page) => {
    paths.push({
      params: {
        page: _page.toString(),
      },
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { page: currentPage } = context.params;
  // カテゴリー一覧を取得
  const category = await getNewsCategory();
  const categoryList = category.items;
  // 投稿を取得
  const news = await getNewsPost({
    limit: process.env.NEXT_PUBLIC_NEWT_LIMIT,
    skip: process.env.NEXT_PUBLIC_NEWT_LIMIT * (currentPage - 1),
  });
  const newsPostList = news.items;
  // ページネーションで使う情報を取得
  const pages = await getPages();
  return {
    props: {
      newsPostList: newsPostList,
      newsCategoryList: categoryList,
      currentPage: currentPage,
      pages: pages,
    },
  };
}
