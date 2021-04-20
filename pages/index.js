import React from 'react';
import Banner from '../components/Banner';
import ListSection from '../components/ListSection';
import ScrollingLogo from '../components/ScrollingLogo';
import GridFeature from '../components/GridFeature';
import Card from '../components/Card';
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


const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 30,
  },
  animate: {
    y: 100,
    transition: {
      duration: 2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-gray-500"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={900}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-primitive font-quicksand fill-current"
          />
        </pattern>
        <text
          className="text-6xl font-bold font-quicksand"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Slogon
        </text>
      </motion.svg>
    </motion.div>
  );
};