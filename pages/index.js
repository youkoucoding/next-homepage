import Layout from '../components/layout';
import Header from '../components/header';
import ListSection from '../components/listSection';
import ScrollingLogo from '../components/scrollingLogo';
import GridFeature from '../components/gridFeature';


export default function Home() {
  return (
    <Layout>
      <main>
        <Header />
        <ScrollingLogo />
        <ListSection />
        <GridFeature />
      </main>
    </Layout>
  );
}
