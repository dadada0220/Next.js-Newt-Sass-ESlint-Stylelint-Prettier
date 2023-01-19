import { newtCdnClient } from '@/lib/newt';

/**
 * ニュースのカテゴリーを取得
 * @param {Object} _query queryパラメータ // https://developers.newt.so/apis/cdn#tag/contents_general/Queries
 * @returns {Array} ニュースのカテゴリー
 */
export async function getNewsCategory(_query) {
  const query = _query || [];
  const post = await newtCdnClient.getContents({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_NEWS_UID,
    modelUid: 'category',
    query: {
      ...query,
    },
  });
  return post;
}
