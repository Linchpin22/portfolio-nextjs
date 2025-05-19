"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="text bg-transparent px-8 py-4 text-xl  flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Anuj</Link>
        </div>
        <div className="space-x-6 hidden border-1 rounded-full px-9 py-2 md:block xl:ml-48">
          <Link className="hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-300" href="/project">
            Projects
          </Link>
          <Link className="hover:text-gray-300" href="/contact">
            Contact
          </Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link
            href="https://drive.google.com/file/d/1oSatgM5YKsSssvZRcbT0BBsgychuLwDN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center xl:px-12 px-8 py-2 overflow-hidden text-lg font-medium border-2 border-[#C4C4C4] rounded-full hover:text-white group hover:bg-gray-50"
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
            className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium border-2 border-[#C4C4C4] rounded-full hover:text-white group hover:bg-gray-50"
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
        <Menu  className="md:hidden" onClick={open} />
      </nav>

      {/* mobile navbar */}
    <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-screen w-[85%] bg-white/10 backdrop-blur-md text-black shadow-2xl z-50 rounded-l-2xl p-6 flex flex-col justify-start space-y-6"
    >
      <div className="flex justify-end">
        <X size={28} color="#000000" onClick={() => setIsOpen(false)} className="cursor-pointer" />
      </div>

      <div className="flex flex-col space-y-6 text-2xl font-semibold pl-4">
        <Link className="hover:text-gray-300 transition-colors duration-200" href="/">Home</Link>
        <Link className="hover:text-gray-300 transition-colors duration-200" href="/project">Projects</Link>
        <Link className="hover:text-gray-300 transition-colors duration-200" href="/contact">Contact</Link>
        <Link
          className="hover:text-gray-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1oSatgM5YKsSssvZRcbT0BBsgychuLwDN/view?usp=drive_link"
        >
          Resume
        </Link>
        <Link className="hover:text-gray-300 transition-colors duration-200" href="/contact">Hire</Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
