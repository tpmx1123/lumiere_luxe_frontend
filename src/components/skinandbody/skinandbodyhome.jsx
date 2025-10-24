import React from 'react';
import './skinandbodyhome.css';

// Import SVG images
import flowers from '../../assets/flowers.svg';
import vectorBrush from '../../assets/Vector brush.svg';
import skinandbodyimg from '../../assets/skinandbodyimg.png';   


const SkinAndBodyHome = () => {
  return (
    <div className="skinandbody-home">
      {/* Vector brush SVG at top left */}
      <img src={vectorBrush} alt="Vector brush decoration" className="skinandbody-vector-brush" />
      
      {/* Flowers SVG as background */}
      <img src={flowers} className="skinandbody-flowers-background" alt="Flowers background" />
      
      <div className="skinandbody-hero">
        <div className="container">
          <h1 className="skinandbody-title">Skin & Body</h1>
          <p className="skinandbody-subtitle">
            At Lumiere Luxe, beauty begins with care.
          </p>
          <p className="skinandbody-description">
            Our skin and body rituals are thoughtfully designed to restore balance, clarity, and radiance. Each treatment
            blends advanced skincare science with the art of touch - ensuring results that feel as good as they look.
          </p>
          <img src={skinandbodyimg} className="skinandbody-service-tools" alt="Skin and body service tools" />
        </div>
      </div>
    </div>
  );
};

export default SkinAndBodyHome;