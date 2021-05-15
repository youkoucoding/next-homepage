import React from 'react';
import { motion } from 'framer-motion';

const ButtonWithUnderline = React.forwardRef(({ onClick, href, text, offset }, ref) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      <p
        className={`text-yellow-500 transition duration-500 ease-in-out hover:text-gray-600 cursor-pointer px-3 py-0 font-semibold leading-loose font-ramab border-b-2 hover:border-${offset > 50 ? 'gray' : 'yellow'}-500 border-${offset > 50 ? 'yellow-500' : 'opacity-0'}`}
      >{text}</p>
    </motion.a>
  );
});

export default ButtonWithUnderline;
