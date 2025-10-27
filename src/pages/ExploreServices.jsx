import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreServices.css';
import Footer from '../components/Footer.jsx';
import BookingModal from '../components/BookingModal.jsx';

const ExploreServices = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };
  // Sample services data with navigation paths
  const services = [
    {
      id: 1,
      title: 'Hair Styling',
      description: 'Transform your look with our expert hair styling services, from modern cuts to classic styles.',
      image: 'https://media.istockphoto.com/id/1147811403/photo/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-to-the-mirror.jpg?s=612x612&w=0&k=20&c=WmL2VgSEdUPI7W0ogFHuRtBsL0BFT6KYdLJ7cuadmHk=',
      category: 'Hair',
      path: '/hair-service-in-madhapur'
    },
    {
      id: 2,
      title: 'Skin Care',
      description: 'Reveal your natural glow with our professional skin care treatments and facials.',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
      category: 'Skin',
      path: '/skin-body-service-in-madhapur'
    },
    {
      id: 3,
      title: 'Nail Care',
      description: 'Pamper yourself with our luxurious manicure and pedicure services.',
      image: 'https://media.istockphoto.com/id/914169004/photo/stylish-manicure-and-make-up-in-a-pale-pink-color.jpg?s=612x612&w=0&k=20&c=3XlOi5gfM7HlXLEuyn0XIHBwYiGalWlv742F9idfOas=',
      category: 'Nails',
      path: '/nail-service-in-madhapur'
    },
    {
      id: 4,
      title: 'Makeup',
      description: 'Enhance your natural beauty with our professional makeup services for any occasion.',
      image: 'https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA=',
      category: 'Makeup',
      path: '/makeup-page-in-madhapur'
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of beauty and wellness services designed to pamper and transform</p>
        </div>
      </div>

      <div className="services-containers">
        <div className="containers">
          <div className="services-grids">
            {services.map((service) => (
              <Link to={service.path} key={service.id} className="service-card-link">
                <div className="service-cards">
                  <div className="service-images">
                    <img src={service.image} alt={service.title} />
                    <span className="service-categorys">{service.category}</span>
                  </div>
                  <div className="service-contents">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-sections">
        <div className="containers">
          <h2>Ready to Experience the Difference?</h2>
          <p>Book your appointment today and let our experts help you look and feel your best.</p>
          <button onClick={openBookingModal} className="cta-buttons">Book Now</button>
        </div>
      </div>
      
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
      />
    </div>
  );
};

export default ExploreServices;

