import Head from 'next/head';
import Navigator from './navigator';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>HomePage demo</title>
      </Head>
      <div className='min-h-screen'>
        <Navigator />
        {children}
        <Footer />
      </div>
    </div>
  );
}