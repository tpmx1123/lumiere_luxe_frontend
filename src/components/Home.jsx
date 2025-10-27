import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import homeImage from '../assets/home-img1.png';
import homeEffectBg from '../assets/homeeffectbg.png';
import BookingModal from './BookingModal';

const Home = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const navigateToExploreServices = () => {
    navigate('/explore-services');
  };

  return (
    <div className="home-container">
      {/* Main Background Image */}
      <div className="home-background">
        <img src={homeImage} alt="Luxury Salon Interior" className="background-image" />
      </div>
      
      {/* Effect Overlay Background */}
      <div 
        className="home-effect-overlay"
        style={{
          backgroundImage: `url(${homeEffectBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="home-content-overlay">
        <div 
          className="overlay-content"
          style={{
            backgroundImage: `url(${homeEffectBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h1 className="main-title">LUMIÈRE</h1>
          <p className="tagline">Where Glow Meets Grace</p>
          <p className="descriptions">
            Step into a sanctuary where leaders, creatives, and tastemakers trust our expert team for transformative self-care. From bespoke hair and makeup to rejuvenating facials, wellness therapies, and nail artistry, every moment at Lumiere is crafted to leave you radiant—inside and out.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={openBookingModal}>Book Your Experience</button>
            <button className="btn-secondary" onClick={navigateToExploreServices}>Explore Services</button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
      />
    </div>
  );
};

export default Home;
