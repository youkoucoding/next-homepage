import Head from 'next/head';
import Navigator from './Navigator';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>HomePage demo</title>
      </Head>
      <Navigator />
      <main className='min-h-screen'>
        {children}
      </main>
      <Footer />
    </>
  );
}