import React from 'react';
import './makeuphome.css';

// Import SVG images
import flowers from '../../assets/flowers.svg';
import vectorBrush from '../../assets/Vector brush.svg';
import makeupservicestools from '../../assets/makeuphomeimg.png';


const makeuphome = () => {
  return (
    <div className="makeup-home">
      {/* Vector brush SVG at top left */}
      <img src={vectorBrush} alt="Vector brush decoration" className="makeup-vector-brush" />
      
      {/* Flowers SVG as background */}
      <img src={flowers} className="makeup-flowers-background" alt="Flowers background" />
      
      <div className="makeup-hero">
        <div className="container">
          <h1 className="makeup-title">Makeup</h1>
          <p className="makeup-subtitle">
            At Lumiere Luxe, makeup is more than colour - it’s composition. Our artists craft refined, skin-conscious looks that enhance your natural beauty. From soft to bold, every look is designed to move with confidence and light.
          </p>
          <img src={makeupservicestools} className="makeup-service-tools" alt="Makeup service tools" />
        </div>
      </div>
    </div>
  );
};

export default makeuphome;