/**
 * @docs {Newt CDN API} https://developers.newt.so/apis/cdn#tag/contents_general/Collection-Resources
 * @dosc {JavaScript SDK for Newt's API} https://github.com/Newt-Inc/newt-client-js
 */

const { createClient } = require('newt-client-js');

/**
 * Newtオブジェクトを作成
 * このオブジェクトでデータを取得したりする
 */
export const newtCdnClient = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID,
  token: process.env.NEXT_PUBLIC_NEWT_API_TOKEN,
  apiType: process.env.NEXT_PUBLIC_NEWT_API_TYPE,
});
