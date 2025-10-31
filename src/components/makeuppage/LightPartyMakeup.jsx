import React, { useState } from 'react';
import './LightPartyMakeup.css';
import LightPartyMakeup1 from '../../assets/Lightpartymakeup1.png';
import LightPartyMakeup2 from '../../assets/Lightpartymakeup2.png';
import LightPartyMakeup3 from '../../assets/Lightpartymakeup3.png';
import BookingModal from '../BookingModal';

const LightPartyMakeup = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <section className="light-party-makeup-section">
      <div className="light-party-makeup-content">
        <h2 className="light-party-makeup-title">Light & Party Makeup</h2>
        <p className="light-party-makeup-description">
          For moments that call for effortless radiance. Our experts use feather-light formulations and seamless blending techniques to create looks that feel fresh, modern, and photo-ready.
        </p>
        <p className="light-party-makeup-includes">
          <strong>Includes:</strong> Event & party makeup / Natural finishes / Long-wear perfection
        </p>
        <div className="book-now-container">
          <button className="book-now-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
      
      <div className="light-party-makeup-images">
        <img 
          src={LightPartyMakeup1} 
          alt="Professional makeup application" 
          className="light-party-makeup-image light-party-makeup-image-main"
        />
        <img 
          src={LightPartyMakeup2} 
          alt="Artistic fantasy makeup" 
          className="light-party-makeup-image light-party-makeup-image-secondary"
        />
        <img 
          src={LightPartyMakeup3} 
          alt="Glamorous party makeup" 
          className="light-party-makeup-image light-party-makeup-image-tertiary"
        />
      </div>
    </section>
  );
};

export default LightPartyMakeup;
