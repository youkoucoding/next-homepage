import React from 'react';
import { motion } from 'framer-motion';

const logos = ['1.svg', '2.svg', '3.svg', '4.svg', '5.svg', '6.svg', '7.svg', '6.svg', '4.svg', '5.svg', '1.svg', '2.svg', '3.svg', '4.svg', '5.svg', '6.svg', '7.svg', '6.svg', '4.svg', '5.svg'];

const ScrollingLogo = () => {
  return (
    <div className='logo-mask mx-20'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
        className='relative flex flex-nowrap overflow-hidden my-5 mx-10'>
        <div className='flex justify-between scroller'>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              className='h-24 w-24 m-12' />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollingLogo;