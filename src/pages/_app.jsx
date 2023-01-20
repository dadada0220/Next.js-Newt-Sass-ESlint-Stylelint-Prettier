import '@/styles/_globals.scss';
import GoogleTagManager from '@/components/base/EmbedTag/GoogleTagManager';
import Layout from '@/components/base/Layout/Layout';
import { siteData } from '@/const/site';
const { googleTagManagerId } = siteData;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
