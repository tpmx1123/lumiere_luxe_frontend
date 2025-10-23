import React from 'react';
import './hairservice1.css';

// Import images from assets
import hair1 from '../../assets/hair1.png';
import hair2 from '../../assets/hair2.png';
import hair3 from '../../assets/hair3.png';
import scissors from '../../assets/scissors.png';

// Import SVG images
import flowers from '../../assets/flowers.svg';
import vectorBrush from '../../assets/Vector brush.svg';
import hairservicestools from '../../assets/hair services tools.svg';


const hairservice = () => {
  return (
    <div className="service-page1">
      {/* Vector brush SVG at top left */}
      <img src={vectorBrush} alt="Vector brush decoration" className="vector-brush" />
      
      {/* Flowers SVG as background */}
      <img src={flowers} alt="Flowers background" className="flowers-background" />
      
      <div className="service-hero">
        <div className="container">
          <h1 className="service-title">Hair Services</h1>
          <p className="service-content">
            At Lumiere Luxe, we believe hair is more than style — it's identity. Each strand tells a story of confidence, care, and character. 
            Our experts combine artistry with advanced hair science to craft looks that are timeless, healthy, and entirely you.
          </p>
          
          {/* Hair service tools SVG below content */}
          <img src={hairservicestools} alt="Hair service tools" className="hair-service-tools" />
        </div>
      </div>
      
     
    </div>
  );
};

export default hairservice;