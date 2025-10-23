import React from 'react';
import Footer from '../components/Footer.jsx';


const NailServicePage = () => {
  return (
    <>
      <div className="service-page">
        <div className="service-hero">
          <h1>Nail Services</h1>
          <p>Professional nail care and beauty treatments</p>
        </div>
        
        <div className="service-content">
          <div className="service-section">
            <h2>Our Nail Services</h2>
            <div className="service-grid">
              <div className="service-item">
                <h3>Manicure</h3>
                <p>Complete nail care including shaping, cuticle care, and polish application.</p>
              </div>
              <div className="service-item">
                <h3>Pedicure</h3>
                <p>Foot care treatment including nail trimming, cuticle care, and foot massage.</p>
              </div>
              <div className="service-item">
                <h3>Gel Polish</h3>
                <p>Long-lasting gel polish application with UV curing for extended wear.</p>
              </div>
              <div className="service-item">
                <h3>Nail Art</h3>
                <p>Creative nail designs and artistic nail decorations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NailServicePage;
