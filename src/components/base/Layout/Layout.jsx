/**
 * レイアウト
 */

import Footer from '@/components/base/Footer/Footer';
import Header from '@/components/base/Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
