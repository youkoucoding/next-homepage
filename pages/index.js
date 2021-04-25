import React from 'react';
import Banner from '../components/Banner';
import ListSection from '../components/ListSection';
import ScrollingLogo from '../components/ScrollingLogo';
import GridFeature from '../components/GridFeature';
import Card from '../components/Card';
import InitialTransition from '../components/InitialTransition';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition />
      <Banner />
      <ScrollingLogo />
      <ListSection />
      <GridFeature />
      <Card />
    </motion.section>
  );
}


