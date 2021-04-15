import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>HomePage demo</title>
            </Head>
            <div className='min-h-screen bg-gray-300'>
                {children}
            </div>
        </div>
    );
}