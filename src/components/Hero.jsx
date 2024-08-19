import React from 'react';

const Hero = ({ title, subtitle, imageUrl }) => {
  return (
      <div 
         className="top-0 z-20 relative h-screen lg:h-screen bg-cover bg-center fade-in" 
         style={{ backgroundImage: `url(${imageUrl})` }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="slide-in text-4xl md:text-7xl">{title}</h1>
            <p className="slide-in text-lg md:text-2xl mt-4 text-[#B3B3B3]">{subtitle}</p>
         </div>
      </div>
  );
};

export default Hero;

/* export default function Hero() {
   return (
      <div 
         className="top-0 z-20 relative h-screen lg:h-screen bg-cover bg-center fade-in" 
         style={{ backgroundImage: `url(${imageUrl})` }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-7xl font-bold">{title}</h1>
            <p className="text-lg md:text-2xl mt-4 text-[#B3B3B3]">{subtitle}</p>
         </div>
      </div>
   );
} */

