"use client";

import React from 'react';
import { motion } from "framer-motion";
import { navLinks } from '../../lib/data';
import Link from 'next/link';

export default function Header() {
  return (
    <>
    <div>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
    </div>
    <header className="z-[999] fixed top-0 left-0 right-0">
      <motion.div 
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
      </motion.div>

      <nav className='fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {
            navLinks.map(link => (
              <motion.li 
                className="h-3/4 flex items-center justify-center" 
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link 
                  className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition" 
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </nav>
    </header>
    </>
  );
}