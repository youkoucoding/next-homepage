// import Link from "next/link";


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

const Header = () => {
    return (
        <nav className='bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-24'>

                    {/* logos & pages */}
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <img className='h-12 w-12' src='logo.svg' alt='logo' width={48} height={48} />
                        </div>
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baselines space-x-4'>
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className='text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium font-ramab'
                                    >
                                        {link.label}
                                    </a>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* buttons */}

                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                            <img className='h-28 w-28' src='AppStore.svg' alt='Apple' width={48} height={48} />
                            <img className='h-32 w-32 ml-5' src='GooglePlay.svg' alt='Apple' width={48} height={48} />
                        </div>
                    </div>


                </div>
            </div>
        </nav >
    );
};

export default Header;
