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
        className={`text-yellow-500 hover:text-gray-600 cursor-pointer px-3 py-0 font-semibold leading-loose font-ramab border-b-4 hover:border-${offset > 50 ? 'gray' : 'yellow'}-500 border-${offset > 50 ? 'yellow' : 'gray'}-500`}
      >{text}</p>
    </motion.a>
  );
});

export default ButtonWithUnderline;
