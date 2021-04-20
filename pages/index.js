import Header from '../components/Header';
import ListSection from '../components/ListSection';
import ScrollingLogo from '../components/ScrollingLogo';
import GridFeature from '../components/GridFeature';
import Card from '../components/Card';


export default function Home() {
  return (
    <>
      <Header />
      <ScrollingLogo />
      <ListSection />
      <GridFeature />
      <Card />
    </>
  );
}
