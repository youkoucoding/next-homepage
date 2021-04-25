import { motion } from 'framer-motion';
import React from 'react';

const ButtonWithUnderline = React.forwardRef(({ onClick, href, text, offset }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
    >
      <p
        className={`text-yellow-500 hover:text-gray-600 cursor-pointer px-3 py-0 font-semibold leading-loose font-ramab border-b-4 hover:border-${offset > 50 ? 'gray' : 'yellow'}-500 border-${offset > 50 ? 'yellow' : 'gray'}-500`}
      >{text}</p>
    </a>
  );
});

export default ButtonWithUnderline;
