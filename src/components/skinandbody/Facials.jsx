import React from 'react';

import facial1 from '../../assets/clean-upfacials1.png';
import facial2 from '../../assets/clean-upfacials2.png';
import './Facials.css';
import button from '../../assets/Button.png';

const Facials = () => {
  return (
    <div className="facials-page">
      {/* Content Section */}
      <section className="facials-content">
        <div className="container">
          <div className="facials-grid">
            <div className="facials-text">
              <h2>Clean-Up & Facials</h2>
              <p className="glow-text">
Hydration, clarity, and calm - delivered through curated
facials and clean-ups using clinically tested, skin-friendly
formulations. Designed to refresh instantly and maintain
long-term skin health              </p>
              <p className="glow-text-includes"><strong>Includes:</strong>  Deep pore cleansing / Hydrating facials / Glow
therapies</p>
              <div className="scissors-container">
                <img src={button} alt="Book Now" className="scissors-image" />
              </div>
            </div>

            <div className="facials-images">
              <div className="image-container">
                <img src={facial1} alt="Facial Treatment" className="facials-img" />
              </div>
              <div className="image-container">
                <img src={facial2} alt="Facial Mask" className="facials-img" />
              </div>
            </div>
          </div>
          
          
         
        </div>
      </section>
    </div>
  );
};

export default Facials;