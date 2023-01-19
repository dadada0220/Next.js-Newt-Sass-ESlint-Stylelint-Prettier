/**
 * Headタグのメタ情報
 */

import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteData } from '@/const/site';
const { title: siteTitle, desc: siteDesc, url: siteUrl } = siteData;

export default function Meta({ pageTitle, pageDesc }) {
  // タイトル
  const Title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  // ディスクリプション
  const Desc = pageDesc || siteDesc;
  // URL
  const router = useRouter();
  const Url = `${siteUrl}${router.asPath}`;

  return (
    <Head>
      {/* TDK & Base */}
      <title>{Title}</title>
      <meta
        name='description'
        content={Desc}
      />
      <link
        rel='canonical'
        href={Url}
      />
      {/* Favicon */}
      <link
        rel='icon'
        href='/favicon/favicon.ico'
        sizes='any'
      />
      <link
        rel='icon'
        href='/favicon/favicon.svg'
        type='image/svg+xml'
      />
      <link
        rel='apple-touch-icon'
        href='/favicon/apple-touch-icon.png'
      />
      {/* OGP */}
      <meta
        property='og:title'
        content={Title}
      />
      <meta
        property='og:description'
        content={Desc}
      />
      <meta
        property='og:type'
        content='site'
      />
      <meta
        property='og:url'
        content={Url}
      />
      <meta
        property='og:image'
        content={`${siteUrl}/ogp.png`}
      />
      <meta
        property='og:site_name'
        content=''
      />
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
      <meta
        name='twitter:site'
        content=''
      />
      <meta
        property='og:locale'
        content='ja_JP'
      />
      <meta
        property='fb:app_id'
        content=''
      ></meta>
    </Head>
  );
}
