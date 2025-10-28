import React from 'react';

// Import SVG banner
import skinAndBodyBnr from '../../assets/Skin & Body Bnr.svg';


const SkinAndBodyHome = () => {
  return (
    <div className="bg-salon-light-beige min-h-screen px-5 relative overflow-hidden flex flex-col">
      {/* Skin & Body Banner SVG as background */}
      <img 
        src={skinAndBodyBnr} 
        alt="Skin & Body Banner" 
        className="absolute top-0 left-0 w-full h-full md:h-screen object-cover object-center z-[1] opacity-100"
      />
      
      <div className="text-center m-0 p-0 relative z-[2] mt-0 md:py-2.5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="font-playfair text-salon-gold text-[1.8rem] m-0 mb-2 font-light tracking-[1px] leading-[1.1] relative z-[2] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] xs:text-[2rem]">
            Skin & Body
          </h1>
          
          <p className="text-salon-dark-brown text-xs leading-relaxed max-w-[1020px] mx-auto mt-0 font-normal font-inter pt-3 relative z-[2] px-2 mb-[80px] md:mb-[80px] lg:text-xl md:text-lg sm:text-base">
            At Lumiere Luxe, beauty begins with care. Our skin and body rituals are thoughtfully designed to restore balance, clarity, and radiance. 
            Each treatment blends advanced skincare science with the art of touch — ensuring results that feel as good as they look.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinAndBodyHome;