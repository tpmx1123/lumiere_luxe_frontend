import React from 'react';

// Import SVG banner
import makeupBnr from '../../assets/Makeup Bnr.svg';


const MakeupHome = () => {
  return (
    <div className="bg-salon-light-beige min-h-screen px-5 relative overflow-hidden flex flex-col">
      {/* Makeup Banner SVG as background */}
      <img 
        src={makeupBnr} 
        alt="Makeup Banner" 
        className="absolute top-0 left-0 w-full h-full md:h-screen object-cover object-center z-[1] opacity-100"
      />
      
      <div className="text-center m-0 p-0 relative z-[2] mt-0 md:py-2.5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="font-playfair text-salon-gold text-[1.8rem] m-0 mb-2 font-light tracking-[1px] leading-[1.1] relative z-[2] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.5rem] xs:text-[2rem]">
            Makeup
          </h1>
          
          <p className="text-salon-dark-brown text-xs leading-relaxed max-w-[1020px] mx-auto mt-0 font-normal font-inter pt-3 relative z-[2] px-2 mb-[80px] md:mb-[80px] lg:text-xl md:text-lg sm:text-base">
            At Lumiere Luxe, makeup is more than colour — it's composition. Our artists craft refined, skin-conscious looks that enhance your natural beauty. 
            From soft to bold, every look is designed to move with confidence and light.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeupHome;