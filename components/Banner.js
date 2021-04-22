import Button from './Button';
import { motion } from 'framer-motion';

const Banner = () => (
  <header className='bg-gradient-to-t from-secondary to-opacity'>
    <div className='min-h-full'>
      <div className='max-w-4xl mx-auto mb-3 mt-24 py-8 px-14 sm:px-6 lg:px-8'>
        <h1 className='font-montserrat mb-3 mt-3 font-bold text-4xl md:text-5xl lg:text-7xl text-center leading-snug text-gray-800'>
          <motion.p animate={{ scale: 1.2 }} transition={{ delay: 4, duration: 0.5 }}>Your website, beyond expectations</motion.p>
        </h1>
      </div>
      <div className='max-w-xl mx-auto'>
        <motion.p
          animate={{ scale: 1.2 }}
          transition={{ delay: 4, duration: 0.5 }}
          className='mt-0 text-gray-500 font-quicksand text-center text-xl lg:text-3xl'>
          Make your website wonderful and build beyond your expectations.
        </motion.p>
      </div>

      {/* buttons */}
      <div className='mt-10 flex justify-center items-center w-full mx-auto'>
        <Button ><img className='h-30 w-28' src='AppStore.svg' alt='Apple' width={48} height={48} /></Button>
        <span className='mx-2'>or</span>
        <Button ><img className='h-30 w-30' src='GooglePlay.svg' alt='Google' /></Button>
      </div>

      {/* svg icons */}
      <div className='flex justify-center w-full'>
        <div className='mt-4 wu-full'>
          <div className='flex items-center justify-center mx-auto flex-wrap'>
            <img className='w-24 h-24 m-12 mb-8' src='cpu.svg' alt='cpu' />
            <img className='w-24 h-24 m-12' src='innovation.svg' alt='cpu' />
            <img className='w-24 h-24 m-12' src='network.svg' alt='cpu' />
            <img className='w-24 h-24 m-12' src='project-management.svg' alt='cpu' />
          </div>
        </div>
      </div>
    </div>
  </header >
);

export default Banner;