import React from 'react';

// Import SVG images
import hairServicesBnr from '../../assets/Hair Services Bnr.svg';


const hairservice = () => {
  return (
    <div className="bg-salon-light-beige min-h-screen px-5 relative overflow-hidden flex flex-col">
      {/* Hair Services Banner SVG as background */}
      <img 
        src={hairServicesBnr} 
        alt="Hair Services Banner" 
        className="absolute top-0 left-0 w-full h-full md:h-screen object-cover object-center z-[1] opacity-100"
      />
      
      <div className="text-center m-0 p-0 relative z-[2] mt-0 md:py-2.5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="font-playfair text-salon-gold text-[1.8rem] m-0 mb-2 font-light tracking-[1px] leading-[1.1] relative z-[2] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] xs:text-[2rem]">
            Hair Services
          </h1>
          
          <p className="text-salon-dark-brown text-xs leading-relaxed max-w-[1020px] mx-auto mt-0 font-normal font-inter pt-3 relative z-[2] px-2 mb-[80px] md:mb-[80px] lg:text-xl md:text-lg sm:text-base">
            At Lumiere Luxe, we believe hair is more than style — it's identity. Each strand tells a story of confidence, care, and character. 
            Our experts combine artistry with advanced hair science to craft looks that are timeless, healthy, and entirely you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hairservice;