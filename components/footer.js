import Link from 'next/link';
import Button from './Button';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Leadership`, `Blog`, `Events`, `Press`];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Other resources`,
];

const Footer = () => (
  <footer className='bg-white border-t border-gray-400 pt-14 pb-16'>
    <div className='max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap'>
      <div className='mb-14 flex flex-wrap items-center w-full'>
        <img className='h-12 w-12 mr-12' src='logo.svg' alt='logo' />
        <p className='text-4xl text-primitive font-bold font-montserrat'>Demonstration</p>
      </div>
      <div className='w-full lg:w-1/2'>
        <ul className='text-lg font-light font-ramab flex flex-wrap w-full'>
          <li className='w-1/2 md:w-1/3 lg:w-1/3'>
            <div>
              <h4 className='text-gray-900 text-base font-bold mb-1'>Product</h4>
              <ul>
                {productLinks.map((link, index) => (
                  <div className='text-gray-800 text-sm font-medium leading-6' key={index}>
                    <Link href="/">
                      <a >{link}</a>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </li>
          <li className='w-1/2 md:w-1/3 lg:w-1/3'>
            <div>
              <h4 className='text-gray-900 text-base font-bold mb-1'>Resources</h4>
              <ul>
                {resourceLinks.map((link, index) => (
                  <div className='text-gray-800 text-sm font-medium leading-6' key={index}>
                    <Link href="/">
                      <a >{link}</a>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </li>
          <li className='w-1/2 md:w-1/3 lg:w-1/3'>
            <div>
              <h4 className='text-gray-900 text-base font-bold mb-1'>About Us</h4>
              <ul>
                {aboutLinks.map((link, index) => (
                  <div className='text-gray-800 text-sm font-medium leading-6' key={index}>
                    <Link href="/">
                      <a >{link}</a>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='w-full lg:w-1/2 mt-12 lg:mt-0'>
        <div className='border border-gray-400 rounded py-5 px-4'>
          <h4 className='font-mono text-sm uppercase text-gray-500 mb-3'>Subscribe our newsletter</h4>
          <div className='flex w-full'>
            <input
              aria-label="email address"
              type="text"
              className='border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2'
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
        <div className='mt-3'>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm" className='text-secondary'>ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon" className='text-primitive-dark'>www.flaticon.com</a></div>
      </div>
    </div>
  </footer>
);

export default Footer;