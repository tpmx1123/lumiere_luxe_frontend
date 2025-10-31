import React, { useState } from 'react';
import './BridalGroomMakeup.css';
import BridalGroomMakeup1 from '../../assets/bridalgroommakeup1.png';
import BridalGroomMakeup2 from '../../assets/bridalgroommakeup2.png';
import BridalGroomMakeup3 from '../../assets/bridalgroommakeup3.png';
import BookingModal from '../BookingModal';

const BridalGroomMakeup = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <section className="bridal-groom-makeup-section">
      <div className="bridal-groom-makeup-images">
        <img 
          src={BridalGroomMakeup1} 
          alt="Bridal makeup application with traditional jewelry" 
          className="bridal-groom-makeup-image bridal-groom-makeup-image-1"
        />
        <img 
          src={BridalGroomMakeup2} 
          alt="Bride with bouquet and elegant styling" 
          className="bridal-groom-makeup-image bridal-groom-makeup-image-2"
        />
        <img 
          src={BridalGroomMakeup3} 
          alt="Bride getting hair styled with flowers" 
          className="bridal-groom-makeup-image bridal-groom-makeup-image-3"
        />
      </div>
      
      <div className="bridal-groom-makeup-content">
        <h2 className="bridal-groom-makeup-title">Bridal & Groom Makeup</h2>
        <p className="bridal-groom-makeup-description">
          Timeless elegance, perfected for the occasion. From intricate detail to enduring comfort, our bridal and groom services are curated to last through every emotion and spotlight.
        </p>
        <p className="bridal-groom-makeup-includes">
          <strong>Includes:</strong> Bridal & groom makeup / Pre-bridal rituals / Post-care guidance
        </p>
        <div className="book-now-container">
          <button className="book-now-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default BridalGroomMakeup;
