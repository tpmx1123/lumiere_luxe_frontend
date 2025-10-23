import React from 'react';
import './hairtreatment.css';
import hairtreatment1 from '../../assets/hairtreatment1.png';
import hairtreatment2 from '../../assets/hairtreatment2.png';
import hairtreatment3 from '../../assets/hairtreatment3.png';
import scissors from '../../assets/scissors.png';

const HairTreatment = () => {
  return (
    <div className="hair-treatment-section">
      <div className="hair-treatment-content">
        <h2 className="hair-treatment-title">Hair Treatment</h2>
        <p className="hair-treatment-description">
          Healthy hair begins at the roots. Our curated range of treatments restore balance, hydration, and vitality. Experience global bestsellers like Nano plastia, K18 Repair, and Olaplex Rebonding each designed to reverse damage, strengthen bonds, and bring your natural texture back to life.
        </p>
        <p className="hair-treatment-includes">
          <strong>Includes:</strong> Deep repair / Bond reconstruction / Shine restoration
        </p>
        <img src={scissors} alt="Scissors" className="scissors-icon" />
      </div>
      <div className="hair-treatment-images">
        <img src={hairtreatment1} alt="Hair treatment consultation" className="hair-treatment-image" />
        <img src={hairtreatment2} alt="Hair treatment application" className="hair-treatment-image" />
        <img src={hairtreatment3} alt="Hair mask treatment" className="hair-treatment-image" />
      </div>
    </div>
  );
};

export default HairTreatment;
