import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '../../public/marisa-logo.jpg'


export default function Header() {
    return (
        <header className='hidden md:block bg-[#caa998] py-4 sticky top-0 '>
            {/* Header container */}
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <Link href='https://homo-errantium.github.io/marisa/#/'>
                    <Image
                        className='rounded-full h-12 w-12'
                        src={headerLogo}
                        alt='Picture of the author'
                    />
                </Link>
                {/* Navigation menu */}
                <nav>
                    <ul className='flex gap-x-6'>
                        {/* Navigation links */}
                        <li>
                            <Link href='/' className='hover:text-gray-300'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/calculate'
                                className='hover:text-gray-300'
                            >
                                Calculate
                            </Link>
                        </li>
                        <li>
                            <Link href='/about' className='hover:text-gray-300'>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/contact'
                                className='hover:text-gray-300'
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Social media icons */}
                {/* <div className='hidden md:block'>
                    <SocialIcons />
                </div> */}
                {/* Add Mobile Navigation Toggle Here */}
            </div>
        </header>
    );
}

// // Define the SocialIcons component
// function SocialIcons() {
//     return (
//         <div className='flex gap-x-4'>
//             {/* Twitter icon */}
//             <a
//                 href='https://twitter.com/Jordan_Thirkle'
//                 target='_blank'
//                 rel='noopener noreferrer'
//             >
//                 <FaTwitter className='text-white hover:text-gray-300' />
//             </a>
//             {/* GitHub icon */}
//             <a
//                 href='https://github.com/jordan-thirkle'
//                 target='_blank'
//                 rel='noopener noreferrer'
//             >
//                 <FaGithub className='text-white hover:text-gray-300' />
//             </a>
//             {/* Add more social media icons as needed */}
//         </div>
//     );
// }
