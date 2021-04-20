import Banner from '../components/Banner';
import ListSection from '../components/ListSection';
import ScrollingLogo from '../components/ScrollingLogo';
import GridFeature from '../components/GridFeature';
import Card from '../components/Card';


export default function Home() {
  return (
    <>
      <Banner />
      <ScrollingLogo />
      <ListSection />
      <GridFeature />
      <Card />
    </>
  );
}
