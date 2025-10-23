import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import luxeLogo from '../assets/luxe-logo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Logo */}
        <div className="navbar-left">
          <img 
            src={luxeLogo} 
            alt="Luxe Logo" 
            className="navbar-logo"
          />
        </div>

        {/* Desktop Navigation Menu */}
        <div className="navbar-right desktop-menu">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            
            <li className="navbar-item dropdown">
              <a 
                href="#services" 
                className="navbar-link"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <span className="dropdown-arrow">▼</span>
              </a>
              {isServicesOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to="/hair-service" className="dropdown-item">Hair Service</Link>
                  <Link to="/nail-service" className="dropdown-item">Nail Service</Link>
                  <Link to="/skin-body-service" className="dropdown-item">Skin & Body Service</Link>
                </div>
              )}
            </li>
            
            <li className="navbar-item">
              <a href="#about" className="navbar-link">About us</a>
            </li>
            
            <li className="navbar-item">
              <a href="#blog" className="navbar-link">Blog</a>
            </li>
            
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <img 
                src={luxeLogo} 
                alt="Luxe Logo" 
                className="mobile-logo"
              />
              <button className="close-button" onClick={closeMobileMenu}>
                ✕
              </button>
            </div>
            
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>Home</Link>
              </li>
              
              <li className="mobile-menu-item">
                <span className="mobile-menu-link">Services</span>
                <ul className="mobile-submenu">
                  <li><Link to="/hair-service" className="mobile-submenu-link" onClick={closeMobileMenu}>Hair Service</Link></li>
                  <li><Link to="/nail-service" className="mobile-submenu-link" onClick={closeMobileMenu}>Nail Service</Link></li>
                  <li><Link to="/skin-body-service" className="mobile-submenu-link" onClick={closeMobileMenu}>Skin & Body Service</Link></li>
                </ul>
              </li>
              
              <li className="mobile-menu-item">
                <a href="#about" className="mobile-menu-link" onClick={closeMobileMenu}>About us</a>
              </li>
              
              <li className="mobile-menu-item">
                <a href="#blog" className="mobile-menu-link" onClick={closeMobileMenu}>Blog</a>
              </li>
              
              <li className="mobile-menu-item">
                <a href="#contact" className="mobile-menu-link" onClick={closeMobileMenu}>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
