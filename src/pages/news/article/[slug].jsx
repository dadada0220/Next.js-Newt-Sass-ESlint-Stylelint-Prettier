/**
 * ニュース詳細ページ
 */

import Meta from '@/components/base/Meta/Meta';
import Single from '@/components/page/News/Single';
import { getNewsPost } from '@/features/news/api/getNewsPost';

export default function News({ news }) {
  return (
    <>
      <Meta
        pageTitle={news.title}
        pageDesc={news.body
          .replace(/(<([^>]+)>)/gi, '')
          .trim()
          .slice(0, 100)}
      />
      <Single news={news} />
    </>
  );
}

export async function getStaticPaths() {
  const news = await getNewsPost({
    limit: 1000,
  });
  const newsPostList = news.items;
  return {
    paths: newsPostList.map((_news) => ({
      params: {
        slug: _news.slug,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const news = await getNewsPost({
    slug,
  });
  const newsPostList = news.items;
  return {
    props: {
      news: news.items[0],
    },
  };
}
