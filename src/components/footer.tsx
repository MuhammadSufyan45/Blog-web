import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="container max-w-[1880px] bg-[#1b1b1b] p-6 space-y-10">
            <div className="flex flex-col items-center gap-2 space-y-2">
                <h2 className="text-white font-mono font-semibold text-2xl">Bloggy</h2>
                <p className="text-white text-center text-xs">We are a Blog Website where you just blog and read we manage the rest.</p>
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <div className='flex items-center gap-[24px]'>
                    <Link href="https://facebook.com" target='blank' className="text-blue-600 hover:text-blue-800">
                        <i className="fab fa-facebook-f text-xl"></i>
                    </Link>
                    <Link href="https://twitter.com" target='blank' className="text-blue-400 hover:text-blue-600">
                        <i className="fab fa-twitter text-xl"></i>
                    </Link>
                    <Link href="https://instagram.com" target='blank' className="text-pink-500 hover:text-pink-700">
                        <i className="fab fa-instagram text-xl"></i>
                    </Link>
                    <Link href="https://linkedin.com" target='blank' className="text-blue-700 hover:text-blue-900">
                        <i className="fab fa-linkedin-in text-xl"></i>
                    </Link>
                </div>
                <div className="text-sm text-gray-400 text-center">
                    <p>&copy; {new Date().getFullYear()} Bloggy. All Rights Reserved. | Designed and Developed by
                        <Link href="https://portfolio-assignment-gilt.vercel.app" target="_blank" className="text-blue-500 hover:text-blue-700"> Muhammad Sufyan</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}