import React, { useState } from 'react';
import './HomeJourney.css';
import homeJourneyBg from '../assets/homejourneybg.png';
import BookingModal from './BookingModal';

const HomeJourney = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="home-journey-container">
      {/* Top Section - Begin Your Journey */}
      <div className="journey-top-section">
        <div className="journey-content">
          <h1 className="journey-main-title">Begin Your Journey</h1>
          <div className="journey-description">
            <p className="description-line">Step into Lumiere and experience the transformative power of true luxury.</p>
            <p className="description-line">Your radiant journey awaits.</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Visit Lumiere */}
      <div 
        className="journey-bottom-section"
        style={{
          backgroundImage: `url(${homeJourneyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="visit-content">
          <h2 className="visit-title">Visit Lumiere</h2>
          
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+91- 9479659999</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">hello@sashaclinics.com</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">Hno. 3-184, Kavuri hills Madhapur, Beside Hotel Serenity La Serene, Hyderabad, Telangana 500081</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-label">Hours</span>
                <span className="contact-value">Monday - Sunday: 9:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          <button className="book-appointment-btn" onClick={openBookingModal}>Book Your Appointment</button>
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

export default HomeJourney;
