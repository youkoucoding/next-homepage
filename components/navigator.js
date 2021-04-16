import Link from "next/link";
import { useState, useEffect } from 'react';


const links = [
    {
        label: `Features`,
        href: `/`,
    },
    {
        label: `Testimonials`,
        href: `/`,
    },
    {
        label: `Pricing`,
        href: `/`,
    },
    {
        label: `Blog`,
        href: `/`,
    },
    {
        label: `About`,
        href: `/`,
    },
];

const Navigator = () => {

    const [offset, setOffset] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            setOffset(window.pageYOffset);
        });
    }, []);


    return (
        <div className={`sticky top-0 left-0 right-0 transition-colors duration-400 ease-linear shadow bg-${offset > 55 ? 'secondary' : 'white'}`}>
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

                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6 mr-10'>
                            <img className='w-28' src='AppStore.svg' alt='Apple' width={48} height={48} />
                            <img className='w-32 ml-5' src='GooglePlay.svg' alt='Apple' width={48} height={48} />
                        </div>
                    </div>
                    {/* App buttons ends */}

                </div>
            </nav>
        </div>
    );
};

export default Navigator;
