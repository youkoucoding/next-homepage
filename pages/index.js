import React from 'react';
import Banner from '../components/Banner';
import ListSection from '../components/ListSection';
import ScrollingLogo from '../components/ScrollingLogo';
import GridFeature from '../components/GridFeature';
import ContactCard from '../components/ContactCard';
import FeatureCard from '../components/FectureCard';
import InitialTransition from '../components/InitialTransition';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition />
      <Banner />
      <ScrollingLogo />
      <FeatureCard />
      <ListSection />
      <GridFeature />
      <ContactCard />
    </motion.section>
  );
}


