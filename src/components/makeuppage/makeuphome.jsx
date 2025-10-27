import React from 'react';

// Import SVG images
import flowers from '../../assets/flowers.svg';
import vectorBrush from '../../assets/Vector brush.svg';
import makeupservicestools from '../../assets/makeuphomeimg.png';


const makeuphome = () => {
  return (
    <div className="bg-salon-light-beige min-h-screen py-2.5 px-5 relative overflow-hidden flex flex-col">
      {/* Vector brush SVG at top left */}
      <img 
        src={vectorBrush} 
        alt="Vector brush decoration" 
        className="absolute top-[-10px] -left-[45px] w-[180px] h-auto z-10 opacity-90 max-w-full hidden lg:block" 
      />
      
      {/* Flowers SVG as background */}
      <img 
        src={flowers} 
        alt="Flowers background" 
        className="absolute top-[0px] left-0 w-full h-full object-cover z-[1] opacity-90 mix-blend-multiply max-w-full hidden lg:block"
      />
      
      <div className="text-center m-0 p-0 relative z-[10] mt-0">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="font-playfair text-salon-gold text-[4.5rem] m-0 mb-2.5 font-light tracking-[1.5px] leading-[1.1] relative z-[15] lg:text-[4.5rem] md:text-[3.5rem] sm:text-[2.8rem]">
            Makeup
          </h1>
          
          <p className="text-xl leading-relaxed text-salon-dark-brown mx-auto mt-0 font-normal font-inter italic max-w-[1100px] px-2.5 relative z-[2] lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
            At Lumiere Luxe, makeup is more than colour - it's composition. Our artists craft refined, skin-conscious looks that enhance your natural beauty. From soft to bold, every look is designed to move with confidence and light.
          </p>
          
          <img 
            src={makeupservicestools} 
            alt="Makeup service tools" 
            className="w-[600px] max-w-[90%] h-auto mt-[100px] mx-auto block opacity-90 relative z-[5] pb-0 mb-10 md:w-[500px] md:mt-[80px] md:mb-8 sm:w-[350px] sm:mt-[70px] sm:mb-6" 
          />
        </div>
      </div>
    </div>
  );
};

export default makeuphome;