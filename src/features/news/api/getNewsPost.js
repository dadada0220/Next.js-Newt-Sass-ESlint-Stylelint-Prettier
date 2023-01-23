import { newtCdnClient } from '@/lib/newt';

/**
 * ニュースの投稿を取得
 * @param {Object} _query queryパラメータ // https://developers.newt.so/apis/cdn#tag/contents_general/Queries
 * @returns {Object} ニュースの投稿オブジェクト
 */
export async function getNewsPost(_query) {
  const query = _query || [];
  const post = await newtCdnClient.getContents({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_NEWS_UID,
    modelUid: 'article',
    query: {
      ...query,
    },
  });
  return post;
}
