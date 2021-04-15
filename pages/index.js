import Layout from '../components/layout';
import Header from '../components/header';
import Banner from '../components/banner';


export default function Home() {
  return (
    <Layout>
      <div className='bg-gray-300 min-h-screen'>
        <Header />
        <Banner />
      </div>
    </Layout>
  );
}
