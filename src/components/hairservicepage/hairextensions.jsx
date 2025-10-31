import React, { useState } from 'react';
import './hairextensions.css';
import hairextensions1 from '../../assets/hairextensions1.png';
import hairextensions2 from '../../assets/hairextensions2.png';
import hairextensions3 from '../../assets/hairextensions3.png';
import scissors from '../../assets/scissors.png';
import BookingModal from '../BookingModal';

const HairExtensions = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="hair-extensions-section">
      <div className="hair-extensions-content">
        <h2 className="hair-extensions-title">Hair Extensions</h2>
        <p className="hair-extensions-description">
          Length, volume, and versatility — redefined. Our premium extensions are crafted from 100% human hair and seamlessly blended to match your natural texture. Applied with precision, they move, feel, and style effortlessly, offering the fullness you've always desired.
        </p>
        <p className="hair-extensions-includes">
          <strong>Includes:</strong> Consultation / Custom shade matching / Extension care guidance
        </p>
        <div className="scissors-book-container">
          <img src={scissors} alt="Scissors" className="scissors-icon" />
          <button className="book-now-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
      <div className="hair-extensions-images">
        <img src={hairextensions1} alt="Hair extensions consultation" className="hair-extensions-image" />
        <img src={hairextensions2} alt="Hair color matching" className="hair-extensions-image" />
        <img src={hairextensions3} alt="Hair extensions application" className="hair-extensions-image" />
      </div>
    </div>
  );
};

export default HairExtensions;