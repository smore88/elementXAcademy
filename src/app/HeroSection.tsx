"use client"

import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

interface HeroSectionProps {
	onGetStarted: () => void;
}
  
const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
	return (
		<div className={`${montserrat.className} min-h-screen flex flex-col justify-center items-center relative overflow-hidden`}>
		{/* Background color mesh */}
		{/* position this div behind all the other elements */}
		<div className="absolute -z-10">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-none">
				<div className="absolute top-0 right-0 h-[50%] w-[50%] bg-purple-200 rounded-full blur-[7rem] opacity-70"></div>
				<div className="absolute bottom-0 left-0 h-[50%] w-[50%] bg-pink-200 rounded-full blur-[7rem] opacity-70"></div>
				<div className="absolute top-1/4 left-1/4 h-[50%] w-[50%] bg-yellow-200 rounded-full blur-[7rem] opacity-70"></div>
			</div>
		</div>

		{/* Content */}
		<div className="text-center z-10 px-4">
			<h1 className="text-5xl font-bold mb-4">Element X Academy</h1>
			<p className="text-xl mb-8">Empowering minds through innovative learning</p>
			<button onClick={onGetStarted} className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
				Get Started
			</button>
		</div>
		</div>
	);
};
  
export default HeroSection;