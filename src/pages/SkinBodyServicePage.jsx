import React from 'react';
import Footer from '../components/Footer.jsx';


const SkinBodyServicePage = () => {
  return (
    <>
      <div className="service-page">
        <div className="service-hero">
          <h1>Skin & Body Services</h1>
          <p>Comprehensive skincare and body treatments for your wellness</p>
        </div>
        
        <div className="service-content">
          <div className="service-section">
            <h2>Our Skin & Body Services</h2>
            <div className="service-grid">
              <div className="service-item">
                <h3>Facial Treatments</h3>
                <p>Professional facial treatments for all skin types including deep cleansing and hydration.</p>
              </div>
              <div className="service-item">
                <h3>Body Massage</h3>
                <p>Relaxing and therapeutic massage treatments to relieve stress and tension.</p>
              </div>
              <div className="service-item">
                <h3>Body Scrubs</h3>
                <p>Exfoliating treatments to remove dead skin cells and reveal smooth, glowing skin.</p>
              </div>
              <div className="service-item">
                <h3>Anti-Aging Treatments</h3>
                <p>Advanced treatments to reduce signs of aging and improve skin texture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkinBodyServicePage;
