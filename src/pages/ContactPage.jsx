import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';
import Footer from '../components/Footer';
import './ContactPage.css';


const ContactPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=Lumiere+Luxe+Salon+Madhapur+Hyderabad', '_blank');
  };

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`, '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917075447437', '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero Section with Background */}
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">
              Get in touch with Lumiere Luxe for all your beauty and wellness needs. 
              We're here to help you look and feel your absolute best.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            {/* Left Side - Contact Details */}
            <div className="contact-details-section">
              <div className="contact-details-card">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-description">
                  Ready to transform your look? Contact us today to schedule your appointment 
                  or learn more about our luxury beauty services.
                </p>

                <div className="contact-methods">
                   

                  <div className="contact-method" onClick={() => handlePhoneClick('+91 92345 69999')}>
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <h3>Call Us</h3>
                      <p>+91 92345 69999<br />+91 947965 9999</p>
                      <span className="click-hint">Click to call</span>
                    </div>
                  </div>

                  <div className="contact-method" onClick={() => handleEmailClick('lumiereluxe0030@gmail.com')}>
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <h3>Email Us</h3>
                      <p>lumiereluxe0030@gmail.com</p>
                      <span className="click-hint">Click to email</span>
                    </div>
                  </div>

                  <div className="contact-method" onClick={handleWhatsAppClick}>
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <h3>WhatsApp</h3>
                      <p>+91 70754 47437<br />Quick booking & inquiries</p>
                      <span className="click-hint">Click to chat</span>
                    </div>
                  </div>

                  <div className="contact-method" onClick={handleMapClick}>
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="contact-text">
                      <h3>Visit Us</h3>
                      <p>Lumiere Luxe Salon, <br />Madhapur, Hyderabad<br />Telangana 500081</p>
                      <span className="click-hint">Click to open in Maps</span>
                    </div>
                    <div className="maps-container">
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7826341!2d78.38729061437888!3d17.44823598861732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919fdb47e57b%3A0x4a2e4a84d29d20e0!2sMadhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="100"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lumiere Luxe Salon Location"
                ></iframe>
              </div>
            </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps Section */}
           

            {/* Right Side - Booking Form */}
            <div className="booking-section">
              <div className="booking-card">
                <div className="booking-header">
                  <h2 className="booking-title">Book Your Appointment</h2>
                  <p className="booking-subtitle">
                    Experience luxury beauty services at Lumiere Luxe. 
                    Book your appointment today and let us pamper you.
                  </p>
                </div>
                <button className="book-now-btn" onClick={handleBookAppointment}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="currentColor"/>
                  </svg>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Section */}
      <div className="business-hours-section">
        <div className="container">
          <h2 className="section-title">Business Hours</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <h3>Monday - Sunday</h3>
              <p>9:00 AM - 11:00 PM</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseModal} 
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
