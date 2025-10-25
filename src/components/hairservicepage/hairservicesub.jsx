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
        <h2 className="hair-service-sub-title">Hair Cut</h2>
        <p className="hair-service-sub-description">
        Precision meets personality. Our stylists take time to understand your features, lifestyle,
and preferences before sculpting a look that feels naturally you. Whether you want a 
subtle trim or a statement change, each cut is finished with expert detailing and restorative 
care to keep your hair strong and radiant.
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
