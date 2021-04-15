import Layout from '../components/layout';
import Header from '../components/header';


export default function Home() {
  return (
    <Layout>
      <div className='bg-gray-300 min-h-screen'>
        <Header />
        <div className='text-6xl font-bold font-ramab'>hello world!</div>
      </div>
    </Layout>
  );
}
