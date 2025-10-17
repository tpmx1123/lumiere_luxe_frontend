import React, { useState } from 'react';
import './Footer.css';
import footerImage from '../assets/footer_image.png';
import footerLogo from '../assets/footer_logo.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import locationIcon from '../assets/location.png';
import callIcon from '../assets/call.png';
import whatsappIcon from '../assets/whatsapp.png';
import emailIcon from '../assets/email.png';

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const bgImageStyle = {
    backgroundImage: `url(${footerImage})`
  };

  const handleSocialClick = (platform) => {
    setToastMessage(`${platform} is coming soon!`);
    setShowToast(true);
    
    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-bg-image" style={bgImageStyle}></div>
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-main">
            <div className="logo-container">
              <img 
                src={footerLogo} 
                alt="Logo" 
                className="footer-logo"
              />
              <div className="logo-content">
                <p className="lumiere-text">
                  Step into Lumiere and experience the transformative power of true luxury.
                  Where science meets style, and every visit feels like renewal.
                  <br />Your radiant journey awaits.
                </p>
                <div className="social-icons">
                  <button 
                    onClick={() => handleSocialClick('Facebook')} 
                    className="social-icon" 
                    aria-label="Facebook"
                  >
                    <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
                  </button>
                  <a 
                    href="https://www.instagram.com/lumiereluxe_sasha?utm_source=ig_web_button_share_sheet&igsh=MWZ1ZnkweGZzMDlndA==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon" 
                    aria-label="Instagram"
                  >
                    <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                  </a>
                  <button 
                    onClick={() => handleSocialClick('YouTube')} 
                    className="social-icon" 
                    aria-label="YouTube"
                  >
                    <img src={youtubeIcon} alt="YouTube" className="social-icon-img" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="footer-sections">
              <div className="footer-section">
                <h3 className="footer-heading">Our Store</h3>
                <div className="footer-links">
                  <a href="/" className="footer-link">Home</a>
                  <a href="/about" className="footer-link">About</a>
                  <a href="/services" className="footer-link">Services</a>
                  <a href="/contact" className="footer-link">Contact</a>
                </div>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-heading">Get in Touch</h3>
                <div className="contact-info">
                  <div className="contact-link">
                    <img src={locationIcon} alt="Location" className="contact-icon" />
                    <span>Ground floor 3-184, Beside Hotel Serenity La Serene,<br />Kavuri hills, madhapur, Hyderabad</span>
                  </div>
                  <a href="tel:+919234569999" className="contact-link">
                    <img src={callIcon} alt="Call" className="contact-icon" />
                    +91 9234569999
                  </a>
                  <a href="https://wa.me/919234569999" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
                    +91 9234569999
                  </a>
                  <a href="mailto:Hello@Sashaclinics.Com" className="contact-link">
                    <img src={emailIcon} alt="Email" className="contact-icon" />
                    Hello@Sashaclinics.Com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notification */}
          {showToast && (
            <div className="toast">
              {toastMessage}
            </div>
          )}
          
          <p className="copyright">
            Copyright {new Date().getFullYear()} Sasha Clinics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;