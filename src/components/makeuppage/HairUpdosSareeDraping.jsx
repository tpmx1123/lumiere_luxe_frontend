import React from 'react';
import './HairUpdosSareeDraping.css';
import HairUpdosSareeDraping1 from '../../assets/hairupdossareedraping1.png';
import HairUpdosSareeDraping2 from '../../assets/hairupdossareedraping2.png';
import HairUpdosSareeDraping3 from '../../assets/hairupdossareedraping3.png';
import Button from '../../assets/Button.png';

const HairUpdosSareeDraping = () => {
  return (
    <section className="hair-updos-saree-draping-section">
      <div className="hair-updos-saree-draping-content">
        <h2 className="hair-updos-saree-draping-title">Hair Updos & Saree Draping</h2>
        <p className="hair-updos-saree-draping-description">
          Balance, structure, and grace — our stylists craft elegant updos and saree drapes that complete your look with precision and poise.
        </p>
        <p className="hair-updos-saree-draping-includes">
          <strong>Includes:</strong> Custom hair styling / Saree wrapping / Accessory setting
        </p>
        <button className="hair-updos-saree-draping-cta">
          <img src={Button} alt="Arrow button" className="button-icon" />
        </button>
      </div>
      
      <div className="hair-updos-saree-draping-images">
        <img 
          src={HairUpdosSareeDraping1} 
          alt="Intricate braided hairstyle with traditional attire" 
          className="hair-updos-saree-draping-image hair-updos-saree-draping-image-1"
        />
        <img 
          src={HairUpdosSareeDraping2} 
          alt="Elegant blonde updo with sparkling accessories" 
          className="hair-updos-saree-draping-image hair-updos-saree-draping-image-2"
        />
        <img 
          src={HairUpdosSareeDraping3} 
          alt="Traditional saree draping with elegant styling" 
          className="hair-updos-saree-draping-image hair-updos-saree-draping-image-3"
        />
      </div>
    </section>
  );
};

export default HairUpdosSareeDraping;
