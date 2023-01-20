/**
 * カテゴリーごとのニュース一覧ページ
 */

import Meta from '@/components/base/Meta/Meta';
import News_ from '@/components/page/News/News';
import { getNewsCategory } from '@/features/news/api/getNewsCategory';
import { getNewsPost } from '@/features/news/api/getNewsPost';

export default function News({ newsPostList, newsCategoryList, currentCategoryName }) {
  return (
    <>
      <Meta
        pageTitle={`${currentCategoryName}のニュース一覧`}
        pageDesc=''
      />
      <News_
        newsPostList={newsPostList}
        newsCategoryList={newsCategoryList}
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
        category: slug,
      },
    };
  });
  return {
    paths: categoryPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // カテゴリーを取得
  const category = await getNewsCategory();
  const categoryList = category.items;
  // カテゴリーのIDを取得
  const getCurrentCategory = async (_categoryList) => {
    // 今のページのカテゴリースラッグ
    const nowCategorySlug = context.params.category;
    // スラッグを元に、カテゴリー一覧から該当するカテゴリーのIDを取得
    return _categoryList.find(({ slug }) => slug === nowCategorySlug);
  };
  const currentCategory = await getCurrentCategory(categoryList);
  const categoryId = currentCategory._id;
  const categoryName = currentCategory.name;
  // 投稿を取得
  const news = await getNewsPost({
    limit: process.env.NEXT_PUBLIC_NEWT_LIMIT,
    categories: categoryId,
  });
  const newsPostList = news.items;

  return {
    props: {
      newsPostList: newsPostList,
      newsCategoryList: categoryList,
      currentCategoryName: categoryName,
    },
  };
}
