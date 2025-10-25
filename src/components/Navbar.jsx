import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import luxeLogo from '../assets/luxe-logo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
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
                  <Link to="/hair-service-in-madhapur" className="dropdown-item">Hair Service</Link>
                  <Link to="/nail-service-in-madhapur" className="dropdown-item">Nail Service</Link>
                  <Link to="/skin-body-service-in-madhapur" className="dropdown-item">Skin & Body Service</Link>
                  <Link to="/makeup-page-in-madhapur" className="dropdown-item">Makeup Page</Link>
                </div>
              )}
            </li>
            
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link">Blog</Link>
            </li>
            
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
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
                <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
                  <span>Home</span>
                </Link>
              </li>
              
              <li className={`mobile-menu-item mobile-dropdown ${isMobileDropdownOpen ? 'active' : ''}`}>
                <div className="mobile-menu-link mobile-dropdown-trigger" onClick={toggleMobileDropdown}>
                  <span>Services</span>
                  <span className="mobile-dropdown-arrow">▼</span>
                </div>
                <ul className="mobile-submenu">
                  <li><Link to="/hair-service-in-madhapur" className="mobile-submenu-link" onClick={closeMobileMenu}>Hair Service</Link></li>
                  <li><Link to="/nail-service-in-madhapur" className="mobile-submenu-link" onClick={closeMobileMenu}>Nail Service</Link></li>
                  <li><Link to="/skin-body-service-in-madhapur" className="mobile-submenu-link" onClick={closeMobileMenu}>Skin & Body Service</Link></li>
                  <li><Link to="/makeup-page-in-madhapur" className="mobile-submenu-link" onClick={closeMobileMenu}>Makeup Page</Link></li>
                </ul>
              </li>
              
              <li className="mobile-menu-item">
                <Link to="/blog" className="mobile-menu-link" onClick={closeMobileMenu}>
                  <span>Blog</span>
                </Link>
              </li>
              
              <li className="mobile-menu-item">
                <Link to="/contact" className="mobile-menu-link" onClick={closeMobileMenu}>
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
