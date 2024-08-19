'use client';

import React, { useState } from 'react';
import HeroSection from './HeroSection';
import Header from './header';
import Home from './home';

const MainPage: React.FC = () => {
  const [showHero, setShowHero] = useState(true);
  const handleGetStarted = () => {
    setShowHero(false);
  };

  return (
    <>
      {showHero ? (
        <HeroSection onGetStarted={handleGetStarted} />
      ) : (
        <div className='relative'>
          <Header />
          <Home />
          <div id="about" className="relative z-20 min-h-screen p-8 pt-20">
            <h1 className="text-xl font-bold">Hello About</h1>
          </div>
          <div id="experience" className="min-h-screen p-8 pt-20">
            <h1 className="text-xl font-bold">Hello Experience</h1>
          </div>
          <div id="contact" className="min-h-screen p-8 pt-20">
            <h1 className="text-xl font-bold">Hello Contact</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;