import React from 'react';
import './nailservicehome.css';

// Import SVG images
import NailImage from '../../assets/nailservicesimg.png';


const nailservice = () => {
  return (
    <div className="skin-page">
      <div className="skin-content">
        <div className="container">
          <h1>Nail Services </h1>
          
          <p className="description">
           At Lumiere Luxe, we believe nails are more than beauty. They are an expression. Each detail and shade

 is crafted to reflect your mood, personality, and rhythm. Our experts combine global artistry with

thoughtful care to create looks that are refined, lasting, and uniquely yours.
          </p>
         
          <div className="skin-bottom-image">
            <img src={NailImage} alt="Nail care" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default nailservice;