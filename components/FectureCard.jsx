const FeatureCard = () => {
  return (
    <div className='pt-6 md:pt-12 flex flex-col items-center space-y-12 md:space-x-12 md:space-y-0 md:flex-row md:justify-around max-w-6xl mx-auto'>
      <div className='z-10 bg-white space-y-4 text-center px-3 py-6 rounded-lg shadow-lg border border-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-10 w-10 mx-auto bg-primitive-light p-2 rounded-lg text-primitive-dark'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          ></path>
        </svg>
        <h1 className='font-montserrat font-bold text-sm lg:text-base text-gray-900'>
          Business Planning
        </h1>
        <p className='font-nunito text-xs lg:text-sm text-gray-500 max-w-[18rem]'>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching.No config needed.
        </p>
      </div>
      <div className='z-10 bg-white space-y-4 text-center px-3 py-6 rounded-lg shadow-lg border border-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-10 w-10 mx-auto bg-primitive-light p-2 rounded-lg text-primitive-dark'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
          ></path>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
          ></path>
        </svg>
        <h1 className='font-montserrat font-bold text-sm lg:text-base text-gray-900'>
          Data Analysis
        </h1>
        <p className='font-nunito text-xs lg:text-sm text-gray-500 max-w-[18rem]'>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching.No config needed.
        </p>
      </div>
      <div className='z-10 bg-white space-y-4 text-center px-3 py-6 rounded-lg shadow-lg border border-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-10 w-10 mx-auto bg-primitive-light p-2 rounded-lg text-primitive-dark'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
          ></path>
        </svg>
        <h1 className='font-montserrat font-bold text-sm lg:text-base text-gray-900'>
          Expert Marketing
        </h1>
        <p className='font-nunito text-xs lg:text-sm text-gray-500 max-w-[18rem]'>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching.No config needed.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
