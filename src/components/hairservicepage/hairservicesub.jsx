import React from 'react';
import './hairservicesub.css';
import hair1 from '../../assets/hair1.png';
import hair2 from '../../assets/hair2.png';
import hair3 from '../../assets/hair3.png';
import scissors from '../../assets/scissors.png';

const HairServiceSub = () => {
  return (
    <div className="hair-service-sub-section">
      
      <div className="hair-service-sub-images">
        <img src={hair1} alt="Hair Style 1" className="hair-service-sub-image" />
        <img src={hair2} alt="Hair Style 2" className="hair-service-sub-image" />
        <img src={hair3} alt="Hair Style 3" className="hair-service-sub-image" />
      </div>
      <div className="hair-service-sub-content">
        <h2 className="hair-service-sub-title">Hair Service</h2>
        <p className="hair-service-sub-description">
          At Lumiere Luxe, we believe hair is more than style — it's identity. Each strand tells a story of confidence, care, and character. 
          Our experts combine artistry with advanced hair science to craft looks that are timeless, healthy, and entirely you.
        </p>
        <p className="hair-service-sub-includes">
          <strong>Includes:</strong> Consultation / Luxury wash / Customized cut & finish
        </p>
        <img src={scissors} alt="Scissors" className="scissors-icon" />
      </div>
    </div>
  );
};

export default HairServiceSub;
