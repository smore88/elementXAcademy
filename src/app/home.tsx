'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/img1.png',
  '/img2.png',
  '/img3.png',
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative z-20 min-h-screen flex items-center p-8 pt-20">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* Image Slider */}
        <div className="w-full md:w-1/2 h-[400px] relative overflow-hidden rounded-lg">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{
                objectFit: 'cover',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to Element X Academy</h1>
          <p className="text-xl mb-6">
            Empowering minds through innovative learning experiences. Discover your potential and shape your future with us.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;