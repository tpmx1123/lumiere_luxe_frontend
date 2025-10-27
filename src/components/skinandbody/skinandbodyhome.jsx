import React from 'react';

// Import SVG images
import flowers from '../../assets/flowers.png';
import vectorBrush from '../../assets/Vector brush.svg';
import skinandbodyimg from '../../assets/skinandbodyimg.png';


const SkinAndBodyHome = () => {
  return (
    <div className="bg-salon-light-beige min-h-screen py-2.5 px-5 relative overflow-hidden flex flex-col">
      {/* Vector brush SVG at top left */}
      <img 
        src={vectorBrush} 
        alt="Vector brush decoration" 
        className="absolute top-[-10px] -left-[45px] w-[180px] h-auto z-10 opacity-90 max-w-full hidden sm:block" 
      />
      
      {/* Flowers SVG as background */}
      <img 
        src={flowers} 
        alt="Flowers background" 
        className="absolute top-[0px] left-0 w-full h-full object-cover z-[1] opacity-90 mix-blend-multiply max-w-full"
      />
      
      <div className="text-center m-0 p-0 relative z-[2] mt-0">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="font-playfair text-salon-gold text-[4.5rem] m-0 mb-2.5 font-light tracking-[1.5px] leading-[1.1] relative z-[2] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.8rem]">
            Skin & Body
          </h1>
          <p className="text-xl leading-relaxed text-salon-dark-brown mx-auto mt-0 font-normal font-inter max-w-[1100px] px-0 tracking-[0.5px] relative z-[2] lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
            At Lumiere Luxe, beauty begins with care.
          </p>
          
          <p className="text-xl leading-relaxed max-w-[1020px] mx-auto mt-0 font-normal text-salon-dark-brown font-inter pt-5 relative z-[2] px-5 lg:text-xl md:text-lg sm:text-base mb-[60px] md:mb-[50px] sm:mb-[40px]">
          At Lumiere Luxe, beauty begins with care. Our skin and body rituals are thoughtfully designed to restore balance, clarity, and radiance. Each treatment blends advanced skincare science with the art of touch - ensuring results that feel as good as they look.
          </p>
          
          {/* Hair service tools SVG below content */}
          <img 
            src={skinandbodyimg} 
            alt="Hair service tools" 
            className="w-[900px] h-auto -mt-[25px] mx-auto block opacity-90 relative z-[5] -translate-y-[25px] pb-0 -mb-[50px] max-w-full lg:w-[800px] md:w-[450px] md:mt-[20px] md:-mb-[40px] sm:w-[300px] sm:mt-[20px] sm:-mb-[20px]" 
          />
        </div>
      </div>
    </div>
  );
};

export default SkinAndBodyHome;