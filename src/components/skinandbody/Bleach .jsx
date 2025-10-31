import React, { useState } from 'react';
import BookingModal from '../BookingModal';

import bleachDeTan1 from '../../assets/bleachde-tan1.png';
import bleachDeTan2 from '../../assets/bleachde-tan2.png';
import './Bleach.css';
const Bleach = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="bleach-page">
      {/* Content Section */}
      <section className="bleach-content">
        <div className="container">
          <div className="bleach-grid">
            <div className="bleach-images">
              <div className="bleach-image-container">
                <img src={bleachDeTan1} alt="Bleach Treatment" className="bleach-img" />
              </div>
              <div className="bleach-image-container">
                <img src={bleachDeTan2} alt="De-Tan Treatment" className="bleach-img" />
              </div>
            </div>

            <div className="bleach-text">
              <h2>Bleach & De-Tan</h2>
              <p>
                Reveal your natural glow. Our skin-brightening and tan-removal treatments even out tone, 
                restore freshness, and renew radiance - safely and effectively.
              </p>
              <p className="includes">
                <strong>Includes:</strong> Facial bleach / Body de-tan / Post-care <br />hydration
              </p>
              <div className="scissors-container">
                <button className="book-now-button" onClick={handleBookNow}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Bleach;