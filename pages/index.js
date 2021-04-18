import Layout from '../components/layout';
import Header from '../components/header';
import ListSection from '../components/listSection';
import ScrollingLogo from '../components/scrollingLogo';


export default function Home() {
  return (
    <Layout>
      <main>
        <Header />
        <ScrollingLogo />
        <ListSection />
      </main>
    </Layout>
  );
}
