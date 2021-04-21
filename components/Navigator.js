import Link from "next/link";
import { useState, useEffect } from 'react';

const links = [
  {
    label: `Link1`,
    href: `/`,
  },
  {
    label: `Link2`,
    href: `/`,
  },
  {
    label: `Link3`,
    href: `/`,
  },
  {
    label: `Link4`,
    href: `/`,
  },
  {
    label: `Link5`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type='button'
    aria-controls='mobile-menu'
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className='p-2 text-gray-400'
  >
    <span className='sr-only'>Open menu</span>
    {showMenu ? (
      <svg
        className='h-6 w-6'
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className='h-6 w-6'
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className='md:hidden'>
    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          <a className='text-gray-500 block px-3 py-2 text-base font-medium'>
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  </div>
);


const Navigator = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [offset, setOffset] = useState(0);

  const handleScroll = () => { setOffset(window.pageYOffset); };

  // window is only in the browser
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-400 ease-linear shadow-lg bg-${offset > 50 ? 'primitive-dark' : 'white'}`}>
      <nav className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap h-24'>
          {/* logos & pages */}
          <div className='flex items-center ml-10'>
            <div className='flex-shrink-0'>
              <img className='h-12 w-12' src='logo.svg' alt='logo' width={48} height={48} />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baselines space-x-4'>
                {links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    <a
                      className='text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium font-ramab'
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* logos & pages  ends*/}

          {/* App buttons */}
          <div className='hidden lg:block'>
            <div className='ml-4 flex items-center md:ml-6 mr-10'>
              <img className='w-28' src='AppStore.svg' alt='Apple' width={48} height={48} />
              <img className='w-32 ml-5' src='GooglePlay.svg' alt='Apple' width={48} height={48} />
            </div>
          </div>
          {/* App buttons ends */}
          {/* MenuButton mobile  */}
          <div className='-mr-2 flex md:hidden'>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
        {showMenu ? <MobileMenu /> : null}
      </nav>
    </div>
  );
};

export default Navigator;
