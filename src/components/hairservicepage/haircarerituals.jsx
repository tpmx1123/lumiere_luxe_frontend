import React from 'react';
import './haircarerituals.css';
import haircarerituals1 from '../../assets/haircarerituals1.png';
import haircarerituals2 from '../../assets/haircarerituals2.png';
import haircarerituals3 from '../../assets/haircarerituals3.png';
import scissors from '../../assets/scissors.png';

const HairCareRituals = () => {
  return (
    <div className="hair-care-rituals-section">
      <div className="hair-care-rituals-images">
        <img src={haircarerituals1} alt="Hair care ritual 1" className="hair-care-rituals-image" />
        <img src={haircarerituals2} alt="Hair care ritual 2" className="hair-care-rituals-image" />
        <img src={haircarerituals3} alt="Hair care ritual 3" className="hair-care-rituals-image" />
      </div>
      <div className="hair-care-rituals-content">
        <h2 className="hair-care-rituals-title">Hair Care Rituals</h2>
        <p className="hair-care-rituals-description">
        Luxury is in the details and in the way we care. Indulge in therapeutic scalp massages, Aromatherapy-infused washes, an customized nourishment masks that restore moisture, relieve stress, and promote healthy growth.
        </p>
        <p className="hair-care-rituals-includes">
          <strong>Includes:</strong> Scalp massage / Nourishment therapy 
          / Hair wellness consultation
        </p>
        <img src={scissors} alt="Scissors icon" className="scissors-icon" />
      </div>
      
    </div>
    
  );
};

export default HairCareRituals;
