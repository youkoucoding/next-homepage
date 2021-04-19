const Card = () => {
  return (
    <div className='relative mb-12 sm:mb-24 sm:py-16'>
      <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 mb-4'>
        <div className='relative rounded-2xl px-6 py-10 bg-gradient-to-tr from-primitive-dark to-primitive-light overflow-hidden shadow-xl sm:px-12 xm:py-20'>
          <div className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'>
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360"><path class="text-primitive-dark text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path><path className="text-primitive-light text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path></svg>
          </div>

          {/* content */}
          <div className='relative'>
            <div className='sm:text-center'>
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Request early access</h2>
              <p className="mt-8 mx-auto max-w-2xl text-lg text-gray-100">We are onboarding customers as fast as we can. The faster you request early access below, the faster it'll be your turn!</p>
            </div>
            <form className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div className="min-w-0 flex-1">
                <label for="cta_email" className="sr-only">Email address</label>
                <input type="email" id="cta_email" placeholder="Your work email" name="email" className="block w-full border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 border-gray-300 focus:shadow-outline-blue focus:border-blue-300 shadow-sm border" />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10">Request early access</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;