import React, { useState } from 'react';
import BookingModal from '../BookingModal';

import NailArt1 from '../../assets/nailartistryimg1.png';
import NailArt2 from '../../assets/nailartistryimg2.png';
import './NailArt.css';

const NailArt = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="nailart-page">
      {/* Content Section */}
      <section className="nailart-content">
        <div className="container">
          <div className="nailart-grid">
            <div className="nailart-text">
              <h2>Nail Artistry</h2>
              <p className="glow-text">
Where creativity meets precision. From minimalist elegance
to bold statements, every design is hand-finished using
skin-friendly,long-wear products that maintain both style
and nail health.              </p>
           <p className="glow-text-includes"><strong>Includes:</strong>   Bespoke design / Gel & chrome finishes / Hand painted detailing</p>
              <div className="scissors-container">
                <button className="book-now-button" onClick={handleBookNow}>
                  Book Now
                </button>
              </div>
            </div>

            <div className="nailart-images">
              <div className="image-container">
                <img src={NailArt1} alt="Nail Art Design 1" className="nailart-img" />
              </div>
              <div className="image-container">
                <img src={NailArt2} alt="Nail Art Design 2" className="nailart-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NailArt;