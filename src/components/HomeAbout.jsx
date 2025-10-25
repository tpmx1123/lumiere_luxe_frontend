import React from 'react';
import './HomeAbout.css';
import salonImage from '../assets/homeabout.png';

const HomeSection2 = () => {
  return (
    <div className="home-section2">
      <div className="content-section">
        <h1>A Cut Above the Rest</h1>
        <p className="description">
          At Lumiere, we redefine luxury as personal, purposeful, and pure. Visionaries and insiders alike choose us for next-level hairdressing, makeup, aesthetics, massage therapy, and nail services.       </p>
        <p className="description">
          Our team of artisans curates tailored experiences in serene spaces, blending premium products with heartfelt care.
        </p>
        
        <div 
          className="highlight-section"
          style={{
           
            background: 'linear-gradient(90deg, #F4F1EC 0%, #FFFFFF 100%)',
            borderRadius: '10px',
          }}
        >
          <h2>Why Lumiere</h2>
          <p className="highlight-description">
          </p>
          
          <ul className="features-list">
            <li>
              <span className="bullet">•</span>
              Unrushed&nbsp;rituals &nbsp;for hair, skin, and soul.
            </li>
            <li>
              <span className="bullet">•</span>
              Sustainable&nbsp;luxury &nbsp;with eco-conscious products.
            </li>
            <li>
              <span className="bullet">•</span>
              A&nbsp;haven&nbsp;where &nbsp;every client feels like a luminary.
            </li>
          </ul>
        </div>
      </div>
      
      <div className="image-section">
        <img 
          src={salonImage} 
          alt="Lumiere Salon" 
          className="salon-image"
        />
      </div>
    </div>
  );
};

export default HomeSection2;