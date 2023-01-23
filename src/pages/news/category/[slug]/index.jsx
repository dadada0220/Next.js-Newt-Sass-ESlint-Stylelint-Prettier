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
  pages,
}) {
  return (
    <>
      <Meta
        pageTitle={`${currentCategoryName}のニュース一覧`}
        pageDesc=''
      />
      <Archive
        newsPostList={newsPostList}
        newsCategoryList={newsCategoryList}
        currentPage={1}
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
  // カテゴリー一覧からslugのみを新しい配列へ格納
  const categoryPaths = categoryList.map(({ slug }) => {
    return {
      params: {
        slug: slug,
      },
    };
  });
  return {
    paths: categoryPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  // カテゴリーを取得
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
      pages: pages,
    },
  };
}
