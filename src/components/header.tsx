"use client";
import Link from "next/link";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from "../components/button";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container max-w-[1880px] h-[100px] flex justify-between items-center px-[20px] relative">
            {/* Logo */}
            <h2 className="text-5xl font-bold text-black font-mono sm:text-5xl sm:ml-0 ml-[90px]">Bloggy</h2>

            {/* Links for desktop */}
            <div className="justify-center gap-x-12 text-gray-600 hidden sm:flex">
                <Link href={"/home"}>
                    <span className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>Home</span>
                </Link>
                <Link href={"/contact"}>
                    <span className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>Get in touch</span>
                </Link>
                <Link href={"/blogs"}>
                    <span className="hover:border-b-4 border-red-500 transition-all duration-75" onClick={() => setIsOpen(false)}>Blogs</span>
                </Link>
            </div>

            {/* Hamburger Icon for small screens */}
            <button
                className="sm:hidden flex flex-col justify-center items-center space-y-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <>
                        <div className="w-6 h-1 bg-black"></div>
                        <div className="w-6 h-1 bg-black"></div>
                        <div className="w-6 h-1 bg-black"></div>
                    </>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 backdrop-blur-sm z-20 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-gray-600">
                    <Link href={"/home"} onClick={() => setIsOpen(false)}>
                        <span className="hover:border-b-4 border-red-500 transition-all duration-75">Home</span>
                    </Link>
                    <Link href={"/home"} onClick={() => setIsOpen(false)}>
                        <span className="hover:border-b-4 border-red-500 transition-all duration-75">Know us</span>
                    </Link>
                    <Link href={"/contact"} onClick={() => setIsOpen(false)}>
                        <span className="hover:border-b-4 border-red-500 transition-all duration-75">Get in touch</span>
                    </Link>
                    <Link href={"/blogs"} onClick={() => setIsOpen(false)}>
                        <span className="hover:border-b-4 border-red-500 transition-all duration-75">Blogs</span>
                    </Link>
                    <Button item="Get started" />
                </div>
            </div>

            {/* Close Icon (on top of the menu when open) */}
            {isOpen && (
                <button
                    className="sm:hidden absolute top-5 right-5 z-30"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Close Icon */}
                    <i className="fas fa-times text-black text-4xl"></i>
                </button>
            )}

            {/* Desktop "Get Started" Button */}
            <button className="bg-red-600 px-[10px] py-[5px] text-white hover:bg-red-500 transition-colors text-xs sm:text-[16px] sm:py-[8px] sm:px-[10px] hidden sm:block">Get Started</button>
        </div>
    );
}
