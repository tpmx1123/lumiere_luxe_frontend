import React from 'react';
import './haircolour.css';
import haircolour1 from '../../assets/haircolour1.png';
import haircolour2 from '../../assets/haircolour2.png';
import haircolour3 from '../../assets/haircolour3.png';
import scissors from '../../assets/scissors.png';

const HairColor = () => {
  return (
    <div className="hair-color-section">
      <div className="hair-color-content">
        <h2 className="hair-color-title">Hair Color</h2>
        <p className="hair-color-description">
          Colour is chemistry, and at Lumiere Luxe, it's perfected through science. From soft Balayage to bold transformations, our 
          experts use globally acclaimed formulations that protect and nourish. Expect dimension, depth, and a flawless finish that complements 
          your tone and texture.
        </p>
        <p className="hair-color-includes">
          <strong>Includes:</strong> Shade consultation / Premium color products / Post-color nourishment
        </p>
        <img src={scissors} alt="Scissors" className="scissors-icon" />
      </div>
      <div className="hair-color-images">
        <img src={haircolour1} alt="Hair color consultation with swatch book" className="hair-color-image" />
        <img src={haircolour2} alt="Hair coloring process with foils" className="hair-color-image" />
        <img src={haircolour3} alt="Finished wavy hair with balayage" className="hair-color-image" />
      </div>
    </div>
  );
};

export default HairColor;
