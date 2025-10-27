import React from 'react';

// Import SVG images
import flowers from '../../assets/flowers.png';
import vectorBrush from '../../assets/Vector brush.svg';
import hairservicestools from '../../assets/hair services tools.svg';


const hairservice = () => {
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
            Hair Services
          </h1>
          
          <p className="text-xl leading-relaxed max-w-[1020px] mx-auto mt-0 font-normal text-salon-dark-brown font-inter pt-5 relative z-[2] px-5 mb-[80px] md:mb-[60px] sm:mb-[40px] lg:text-xl md:text-lg sm:text-base">
            At Lumiere Luxe, we believe hair is more than style — it's identity. Each strand tells a story of confidence, care, and character. 
            Our experts combine artistry with advanced hair science to craft looks that are timeless, healthy, and entirely you.
          </p>
          
          {/* Hair service tools SVG below content */}
          <img 
            src={hairservicestools} 
            alt="Hair service tools" 
            className="w-[1200px] h-auto mt-[40px] mx-auto block opacity-90 relative z-[5] pb-0 -mb-[50px] max-w-full lg:w-[1200px] lg:-mt-[155px] lg:-translate-y-[25px] md:w-[600px] md:mt-[0px] md:-mb-[40px] sm:w-[400px] sm:mt-[20px] sm:-mb-[20px]" 
          />
        </div>
      </div>
    </div>
  );
};

export default hairservice;