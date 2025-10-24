import React from 'react';
import './BridalGroomMakeup.css';
import BridalGroomMakeup1 from '../../assets/bridalgroommakeup1.png';
import BridalGroomMakeup2 from '../../assets/bridalgroommakeup2.png';
import BridalGroomMakeup3 from '../../assets/bridalgroommakeup3.png';
import Button from '../../assets/Button.png';

const BridalGroomMakeup = () => {
  return (
    <section className="bridal-groom-makeup-section">
      <div className="bridal-groom-makeup-images">
        <img 
          src={BridalGroomMakeup1} 
          alt="Bridal makeup application with traditional jewelry" 
          className="bridal-groom-makeup-image bridal-groom-makeup-image-1"
        />
        <img 
          src={BridalGroomMakeup2} 
          alt="Bride with bouquet and elegant styling" 
          className="bridal-groom-makeup-image bridal-groom-makeup-image-2"
        />
        <img 
          src={BridalGroomMakeup3} 
          alt="Bride getting hair styled with flowers" 
          className="bridal-groom-makeup-image bridal-groom-makeup-image-3"
        />
      </div>
      
      <div className="bridal-groom-makeup-content">
        <h2 className="bridal-groom-makeup-title">Bridal & Groom Makeup</h2>
        <p className="bridal-groom-makeup-description">
          Timeless elegance, perfected for the occasion. From intricate detail to enduring comfort, our bridal and groom services are curated to last through every emotion and spotlight.
        </p>
        <p className="bridal-groom-makeup-includes">
          <strong>Includes:</strong> Bridal & groom makeup / Pre-bridal rituals / Post-care guidance
        </p>
        <button className="bridal-groom-makeup-cta">
          <img src={Button} alt="Arrow button" className="button-icon" />
        </button>
      </div>
    </section>
  );
};

export default BridalGroomMakeup;
