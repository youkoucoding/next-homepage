import Head from 'next/head';
import Navigator from './Navigator';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>HomePage demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigator />
        {children}
      </main>
      <Footer />
    </div>
  );
}