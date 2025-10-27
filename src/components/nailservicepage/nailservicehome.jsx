import React from 'react';

// Import SVG images
import flowers from '../../assets/flowers.svg';
import vectorBrush from '../../assets/Vector brush.svg';
import NailImage from '../../assets/nailservicesimg.png';


const nailservice = () => {
  return (
    <div className="font-inter text-[#2C2521] leading-relaxed min-h-screen relative overflow-hidden bg-white">
      {/* Vector brush SVG at top left */}
      <img 
        src={vectorBrush} 
        alt="Vector brush decoration" 
        className="absolute top-[-10px] -right-[px] w-[170px] h-[190px] z-[3] opacity-90 object-contain pointer-events-none block" 
      />
      
      {/* Flowers SVG as background */}
      <img 
        src={flowers} 
        alt="Flowers background" 
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-[1] opacity-100 pointer-events-none lg:opacity-100 md:opacity-70 sm:opacity-50"
      />
      
      <div className="py-5 pb-[450px] relative z-[2] min-h-screen flex flex-col md:pb-[350px] sm:pb-[300px]">
        <div className="max-w-[1200px] mx-auto px-5 relative">
          <h1 className="font-playfair text-salon-gold text-[5.2rem] m-0 mb-[5px] text-center relative font-medium tracking-[0.5px] leading-[1.2] lg:text-[5.2rem] md:text-[4rem] sm:text-[2.8rem] sm:mb-4">
            Nail Services
          </h1>
          
          <p className="font-inter text-salon-dark-brown text-[1.2rem] text-center max-w-[1200px] mx-auto mt-[5px] mb-[20px] leading-[1.3] font-normal lg:text-[1.2rem] md:text-[1.1rem] sm:text-base sm:max-w-[90%] md:mb-[15px] sm:mb-[10px]">
            At Lumiere Luxe, we believe nails are more than beauty. They are an expression. Each detail and shade is crafted to reflect your mood, personality, and rhythm. Our experts combine global artistry with thoughtful care to create looks that are refined, lasting, and uniquely yours.
          </p>
         
          <div className="absolute bottom-[-450px] left-0 right-0 text-center z-[3] pointer-events-none h-[40%] flex items-end justify-center md:bottom-[-350px] md:h-[30%] sm:bottom-[-300px] sm:h-[30%]">
            <img 
              src={NailImage} 
              alt="Nail care" 
              className="max-w-[800px] w-[80%] h-auto object-contain pointer-events-none select-none md:max-w-[600px] md:w-[70%] sm:max-w-[400px] sm:w-[80%]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default nailservice;