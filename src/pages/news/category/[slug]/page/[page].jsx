/**
 * カテゴリーごとのニュース一覧ページ
 */

import Meta from '@/components/base/Meta/Meta';
import Archive from '@/components/page/News/Archive';
import { getNewsCategory } from '@/features/news/api/getNewsCategory';
import { getNewsPost } from '@/features/news/api/getNewsPost';
import { getPages } from '@/features/news/api/getPages';

export default function News({
  newsPostList,
  newsCategoryList,
  currentCategoryName,
  currentCategorySlug,
  currentPage,
  pages,
}) {
  return (
    <>
      <Meta
        pageTitle={`${currentPage}ページ目 | ${currentCategoryName}のニュース一覧`}
        pageDesc=''
      />
      <Archive
        newsPostList={newsPostList}
        newsCategoryList={newsCategoryList}
        currentPage={currentPage}
        pages={pages}
        path={`/news/category/${currentCategorySlug}`}
      />
    </>
  );
}

export async function getStaticPaths() {
  // カテゴリーを取得
  const category = await getNewsCategory();
  const categoryList = category.items;
  // ページネーションで使う情報を取得
  let paths = [];
  await categoryList.reduce(async (_prevPromise, _category) => {
    await _prevPromise;
    const { _id: id, slug } = _category;
    const pages = await getPages({
      categories: id,
    });
    pages.forEach((_page) => {
      paths.push({
        params: {
          page: _page.toString(),
          slug: slug,
        },
      });
    });
  }, Promise.resolve());
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug, page: currentPage } = context.params;
  // カテゴリー一覧を取得
  const category = await getNewsCategory();
  const categoryList = category.items;
  // 今のカテゴリー情報を取得
  const currentCategory = categoryList.find((_category) => {
    return _category.slug === slug;
  });
  const { _id: categoryId, name: categoryName, slug: categorySlug } = currentCategory;
  // 投稿を取得
  const news = await getNewsPost({
    limit: process.env.NEXT_PUBLIC_NEWT_LIMIT,
    categories: categoryId,
    skip: process.env.NEXT_PUBLIC_NEWT_LIMIT * (currentPage - 1),
  });
  const newsPostList = news.items;
  // ページネーションで使う情報を取得
  const pages = await getPages({
    categories: categoryId,
  });
  return {
    props: {
      newsPostList: newsPostList,
      newsCategoryList: categoryList,
      currentCategoryName: categoryName,
      currentCategorySlug: categorySlug,
      currentPage: currentPage,
      pages: pages,
    },
  };
}
