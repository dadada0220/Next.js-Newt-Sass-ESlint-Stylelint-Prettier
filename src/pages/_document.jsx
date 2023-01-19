import { Html, Head, Main, NextScript } from 'next/document';
import { siteData } from '@/const/site';
const { lang } = siteData;

export default function Document() {
  return (
    <Html lang={lang}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
