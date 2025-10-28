import React from 'react';
import { Link } from 'react-router-dom';
import manicurepedicureimg1 from '../../assets/manicurepedicureimg1.png';
import manicurepedicureimg2 from '../../assets/manicurepedicureimg2.png';
import './MP.css';

const MP = () => {
  return (
    <div className="mp-page">
      {/* Content Section */}
      <section className="mp-content">
        <div className="mp-container">
          <div className="mp-grid">
            <div className="mp-gallery">
              <div className="mp-image-wrapper">
                <img src={manicurepedicureimg1} alt="Manicure Treatment" className="mp-image" />
              </div>
              <div className="mp-image-wrapper">
                <img src={manicurepedicureimg2} alt="Pedicure Treatment" className="mp-image" />
              </div>
            </div>

            <div className="mp-text">
              <h2>Manicure & Pedicure</h2>
              <p>
                Every ritual is a pause, a moment of renewal. From deep
exfoliation to hydration therapy, our treatments repair
cuticles, soften skin, and leave hands and feet glowing

with quiet luxury.
              </p>
              <p>
                <strong>Includes:</strong>  Hand & foot rituals/ Nail hydration / Polish

perfection
              </p>
              <div className="mp-arrow">
               
                  <img 
                    src={require('../../assets/Button.png')} 
                    alt="Book Now" 
                    className="mp-arrow-img"
                  />
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MP;