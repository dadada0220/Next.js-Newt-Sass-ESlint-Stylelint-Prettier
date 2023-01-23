import { getNewsPost } from '@/features/news/api/getNewsPost';

/**
 * 投稿数とMax表示件数を元に、ページネーションに必要なページ数を配列で取得
 * （3ページ目まで必要なら`[1, 2, 3]`のようになる）
 * @param {Object} _query 投稿を取得する時のクエリ（任意）
 * @returns {Array}
 */
export async function getPages(_query) {
  // 投稿を取得
  const post = await getNewsPost(_query || {});
  const postList = post.items;
  const postTotal = post.total;
  // 必要なページ数を配列で取得
  return Array(Math.ceil(postTotal / Number(process.env.NEXT_PUBLIC_NEWT_LIMIT)))
    .fill(true)
    .map((_value, _index) => (_index + 1));
}
