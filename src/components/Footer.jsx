import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            
            {/* Logo & Description Section */}
            <div className="logo-container">
              <div className="logo-section">
                <img 
                  src={footerLogo} 
                  alt="Logo" 
                  className="footer-logo"
                />
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

              <div className="logo-content">
                <p className="lumiere-text">
                  At Lumiere Luxe, we believe hair is more than style — it’s identity. 
                  Each strand tells a story of confidence, care, and character. 
                  Our experts combine artistry with advanced hair science to craft looks 
                  that are timeless, healthy, and entirely you.
                </p>
              </div>
            </div>
            
            {/* Footer Links and Contact Info */}
            <div className="footer-sections">
              
              <div className="footer-section">
                <h3 className="footer-heading">Our Store</h3>
                <div className="footer-links">
                  <Link to="/" className="footer-link">Home</Link>
                  <Link to="/blog" className="footer-link">Blog</Link>
                  <Link to="/contact" className="footer-link">Contact</Link>
                </div>
              </div>
              
              <div className="footer-section">
                <h3 className="footer-heading">Get in Touch</h3>
                <div className="contact-info">
                  
                  {/* Clickable Google Maps Link */}
                  <a
                    href="https://maps.app.goo.gl/5cGaE8FA8SvvXgUt9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <img src={locationIcon} alt="Location" className="contact-icons" />
                    <span>
                      Ground floor 3-184, Beside Hotel Serenity La Serene, Kavuri hills, 
                      Madhapur, Hyderabad, Telangana, India
                    </span>
                  </a>

                  <a href="tel:+919234569999" className="contact-link">
                    <img src={callIcon} alt="Call" className="contact-icons" />
                    +91 9234569999
                  </a>

                  <a 
                    href="https://wa.me/917075447437" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="contact-icons" />
                    +91 7075447437
                  </a>

                  <a href="mailto:lumiereluxe0030@gmail.com" className="contact-link">
                    <img src={emailIcon} alt="Email" className="contact-icons" />
                    lumiereluxe0030@gmail.com
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
          
          {/* Footer Bottom */}
          <p className="copyright">
            © {new Date().getFullYear()} Sasha Clinics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
