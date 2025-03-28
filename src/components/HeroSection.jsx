import React from 'react';
import img3 from '../assets/kitchen/img3.jpg';
import hero from '../assets/hero.mp4';

const HeroSection = () => {
  return (
    <div className='relative max-w-full h-screen overflow-hidden'>
      {/* Background Video */}
      <video 
        src={hero} 
        muted 
        autoPlay 
        loop 
        playsInline 
        poster={img3} 
        className='w-full h-full object-cover opacity-50'
      ></video>

      {/* Overlay Text */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 text-center'>
        <p className='text-2xl text-neutral-400 mb-20 animate-pulse opacity-90 lg:text-3xl'>Join the culinary adventure!</p>
        <button className='bg-green-800 mt-10 animate-pulse opacity-80 cursor-pointer px-6 py-3 rounded-lg text-xl md:text-2xl lg:text-3xl lg:mt-20'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
