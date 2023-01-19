import '@/styles/_globals.scss';
import Layout from '@/components/base/Layout/Layout';
import GoogleTagManager from '@/components/elements/EmbedTag/GoogleTagManager';
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
