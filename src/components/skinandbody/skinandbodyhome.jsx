import React from 'react';

// Import SVG images
import flowers from '../../assets/flowers.svg';
import vectorBrush from '../../assets/Vector brush.svg';
import skinandbodyimg from '../../assets/skinandbodyimg.png';   


const SkinAndBodyHome = () => {
  return (
    <div className="bg-salon-light-beige min-h-screen py-2.5 px-5 relative overflow-hidden pb-[500px] md:pb-[400px] sm:pb-[300px]">
      {/* Vector brush SVG at top left */}
      <img 
        src={vectorBrush} 
        alt="Vector brush decoration" 
        className="absolute top-[-10px] -left-[45px] w-[180px] h-auto z-10 opacity-90 max-w-full block" 
      />
      
      {/* Flowers SVG as background */}
      <img 
        src={flowers} 
        alt="Flowers background" 
        className="absolute top-[0px] left-0 w-full h-full object-cover z-[1] opacity-90 mix-blend-multiply max-w-full block"
      />
      
      <div className="text-center m-0 p-0 relative z-[2] mt-0">
        <div className="max-w-[1200px] mx-auto px-5 relative">
          <h1 className="font-playfair text-salon-gold text-[4.5rem] m-0 mb-2.5 font-light tracking-[1.5px] leading-[1.1] relative z-[2] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.8rem]">
            Skin & Body
          </h1>
          
          <p className="text-xl leading-relaxed text-salon-dark-brown mx-auto mt-0 font-normal font-inter max-w-[1100px] px-0 tracking-[0.5px] relative z-[2] lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
            At Lumiere Luxe, beauty begins with care.
          </p>
          
          <p className="text-[1.1rem] leading-relaxed text-salon-dark-brown mx-auto mt-0 mb-2.5 font-normal font-inter max-w-[1000px] px-5 text-center relative z-[2] lg:text-[1.1rem] md:text-base sm:text-base">
            Our skin and body rituals are thoughtfully designed to restore balance, clarity, and radiance. Each treatment
            blends advanced skincare science with the art of touch - ensuring results that feel as good as they look.
          </p>
          
          <div className="absolute bottom-[-450px] left-0 right-0 text-center z-[3] pointer-events-none h-[40%] flex items-end justify-center md:bottom-[-350px] md:h-[30%] sm:bottom-[-250px] sm:h-[30%]">
            <img 
              src={skinandbodyimg} 
              alt="Skin and body service tools" 
              className="max-w-[1200px] w-[90%] h-auto  object-contain pointer-events-none select-none rounded-[10px] md:max-w-[800px] md:w-[85%] sm:max-w-[600px] sm:w-[80%]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinAndBodyHome;