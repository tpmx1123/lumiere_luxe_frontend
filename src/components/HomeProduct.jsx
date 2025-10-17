import React from 'react';
import './HomeProduct.css';
import homeProductsBg from '../assets/homeproductsbg.png';
import davinesLogo from '../assets/davines-logo.png';
import schwarzkopfLogo from '../assets/skr_logo.png';
import qodLogo from '../assets/qod-logo.png';
import k18Logo from '../assets/K18_Pink 1.png';
import olaplexLogo from '../assets/olaplex-logo.png';

const HomeProduct = () => {
  const brands = [
    {
      name: 'Davines',
      logo: davinesLogo,
      alt: 'Davines Logo'
    },
    {
      name: 'Schwarzkopf',
      logo: schwarzkopfLogo,
      alt: 'Schwarzkopf Logo'
    },
    {
      name: 'QOD Professional',
      logo: qodLogo,
      alt: 'QOD Professional Logo'
    },
    {
      name: 'K18 Biomimetic Hairscience',
      logo: k18Logo,
      alt: 'K18 Biomimetic Hairscience Logo'
    },
    {
      name: 'Olaplex',
      logo: olaplexLogo,
      alt: 'Olaplex Logo'
    }
  ];

  return (
    <div className="home-product-container">
      {/* Background Image */}
      <div className="product-background">
        <img src={homeProductsBg} alt="Products Background" className="background-image" />
      </div>
      
      {/* Content Overlay */}
      <div className="product-content">
        <div className="product-text">
          <h2 className="product-title">Products We Use</h2>
          <p className="product-description">
            Only the world's most trusted luxury brands touch your hair and skin — Davines, Schwarzkopf, QOD, K18, and Olaplex — for results that speak the language of science and beauty.
          </p>
        </div>
        
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-box">
              <img 
                src={brand.logo} 
                alt={brand.alt} 
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
