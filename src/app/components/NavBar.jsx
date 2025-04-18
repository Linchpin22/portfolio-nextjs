"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white text-black px-8 py-4 text-xl flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Anuj Tiwari</Link>
        </div>
        <div className="space-x-6 hidden md:block xl:ml-48">
          <Link className="hover:text-gray-400" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-400" href="/project">
            Projects
          </Link>
          <Link className="hover:text-gray-400" href="/contact">
            Contact
          </Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link
            href="https://drive.google.com/file/d/1mYILwf0TnSzCdNiyKQDoGsy7ZLWQdfBC/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center xl:px-12 px-8 py-2 overflow-hidden text-lg font-medium text-black border-2 border-[#C4C4C4] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#C4C4C4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Resume</span>
          </Link>
          <Link
            href="/contact"
            className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black border-2 border-[#C4C4C4] rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#C4C4C4] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Hire</span>
          </Link>
        </div>
        <Menu color="#000000" className="md:hidden" onClick={open} />
      </nav>

      {/* mobile navbar */}
      {isOpen && (
        <div className="flex flex-col md:hidden right-0 pr-3 bg-[#C4C4C4] w-1/2 space-y-2 text-xl absolute p-2 -translate-y-12 transition-transform duration-300 ease-in-out rounded-l-lg">
          <div className="flex justify-end">
            <X color="#000000" onClick={close} className="cursor-pointer" />
          </div>
          <div className="flex flex-col pl-4 space-y-2">
          <Link className="hover:text-gray-400" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-400" href="/project">
            Projects
          </Link>
          <Link className="hover:text-gray-400" href="/contact">
            Contact
          </Link>
          <Link
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1mYILwf0TnSzCdNiyKQDoGsy7ZLWQdfBC/view?usp=drive_link"
          >
            Resume
          </Link>
          <Link className="hover:text-gray-400" href="/contact">
            Hire
          </Link>
          </div>
        </div>
      )}
    </>
  );
}
