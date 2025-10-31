import React, { useState } from 'react';
import BookingModal from '../BookingModal';

import facial1 from '../../assets/clean-upfacials1.png';
import facial2 from '../../assets/clean-upfacials2.png';
import './Facials.css';
import button from '../../assets/Button.png';

const Facials = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

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
                <button className="book-now-button" onClick={handleBookNow}>
                  Book Now
                </button>
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
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Facials;