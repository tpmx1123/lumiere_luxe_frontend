import React from 'react';

import luxuryextension1 from '../../assets/luxuryextensionsimg1.png';
import luxuryextension2 from '../../assets/luxuryextensionsimg2.png';
import './LuxuryExtensions.css';

const LuxuryExtensions = () => {
  return (
    <div className="le-page">
      {/* Content Section */}
      <section className="le-content">
        <div className="le-container">
          <div className="le-grid">
            <div className="le-text">
              <h2>Luxury Extensions</h2>
              <p className="le-description">
Length, strength, and style perfected. Our natural-feel
extensions blend seamlessly with your nails, offering
comfort, durability, and a flawless finish.              </p>
           <p className="le-includes"><strong>Includes:</strong>   Bespoke design / Gel & chrome finishes / Hand painted detailing</p>
              <div className="le-arrow">
                <img src={require('../../assets/Button.png')} alt="Arrow" className="le-arrow-img" />
              </div>
            </div>

            <div className="le-gallery">
              <div className="le-image-wrapper">
                <img src={luxuryextension1} alt="Luxury Extension Design 1" className="le-image" />
              </div>
              <div className="le-image-wrapper">
                <img src={luxuryextension2} alt="Luxury Extension Design 2" className="le-image" />
              </div>
            </div>
          </div>
          
          
         
        </div>
      </section>
    </div>
  );
};

export default LuxuryExtensions;