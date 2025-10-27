import React from 'react';

// Import SVG images
import flowers from '../../assets/flowers.png';
import vectorBrush from '../../assets/Vector brush.svg';
import makeupservicestools from '../../assets/makeuphomeimg.png';


const MakeupHome = () => {
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
            Makeup
          </h1>
          
          <p className="text-xl leading-relaxed max-w-[1020px] mx-auto mt-0 font-normal text-salon-dark-brown font-inter pt-5 relative z-[2] px-5 lg:text-xl md:text-lg sm:text-base mb-[60px] md:mb-[50px] sm:mb-[40px]">
          At Lumiere Luxe, makeup is more than colour - it's composition. Our artists craft refined, skin-conscious looks that enhance your natural beauty. From soft to bold, every look is designed to move with confidence and light.
          </p>
          
          {/* Hair service tools SVG below content */}
          <img 
            src={makeupservicestools} 
            alt="Hair service tools" 
            className="w-[700px] h-auto -mt-[50px] mx-auto block opacity-90 relative z-[5] -translate-y-[25px] pb-0 -mb-[50px] max-w-full lg:w-[600px] md:w-[400px] md:-mt-[20px] md:-mb-[40px] sm:w-[280px] sm:mt-0 sm:-mb-[20px]" 
          />
        </div>
      </div>
    </div>
  );
};

export default MakeupHome;