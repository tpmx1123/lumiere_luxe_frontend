import React from 'react';
import './hairstyling.css';
import hairstyling1 from '../../assets/hairstyling1.png';
import hairstyling2 from '../../assets/hairstyling2.png';
import hairstyling3 from '../../assets/hairstyling3.png';
import scissors from '../../assets/scissors.png';

const HairStyling = () => {
  return (
    <div className="hair-styling-section">
      <div className="hair-styling-images">
        <img src={hairstyling1} alt="Hair wash service" className="hair-styling-image" />
        <img src={hairstyling2} alt="Hair curling process" className="hair-styling-image" />
        <img src={hairstyling3} alt="Elegant updo styling" className="hair-styling-image" />
      </div>
      <div className="hair-styling-content">
        <h2 className="hair-styling-title">Hair Styling</h2>
        <p className="hair-styling-description">
          Every occasion deserves a touch of elegance. From everyday finesse to red-carpet waves, our stylists create looks that hold beautifully and move naturally. Each styling ritual is powered by professional-grade products that enhance shine and protect hair health.
        </p>
        <p className="hair-styling-includes">
          <strong>Includes:</strong> Blow-Dry Curls / Straightening / Occasion styling
        </p>
        <img src={scissors} alt="Scissors" className="scissors-icon" />
      </div>
    </div>
  );
};

export default HairStyling;
