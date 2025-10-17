import React from 'react';
import './HomeServices.css';
import homeServiceImage from '../assets/homeservice.png';

const HomeServices = () => {
  const services = [
    {
      title: "Haircut & Hair Colour",
      description: "Precision cuts and customised colours that enhance your essence.",
      features: ["Personalised consultation", "Luxury wash and finish", "Tailored colour artistry using advanced, non-invasive techniques"]
    },
    {
      title: "Manicure & Pedicure",
      description: "From natural glow to couture glamour, elevate your beauty routine.",
      features: ["Restorative hand & foot rituals", "Nail hydration therapies", "Polish perfection"]
    },
    {
      title: "Bridal",
      description: "For the most important day of your life — curated artistry that reflects your personality and radiance.",
      features: ["Pre-bridal skin & hair rituals", "Bespoke bridal makeup and hairstyling", "On-location bridal assistance"]
    },
    {
      title: "Hair Spa",
      description: "Holistic massages that restore balance, hydration, and serenity.",
      features: ["Deep nourishment therapies", "Relaxation rituals", "Aromatherapy journeys"]
    },
    {
      title: "Make up",
      description: "Transformative elegance powered by premium, eco-conscious products.",
      features: ["Event & editorial makeup", "Age-defying finishes", "Custom looks tailored to your features"]
    },
    {
      title: "Nail Artistry",
      description: "Mini-canvases, maximal creativity. Express your mood through precision and polish.",
      features: ["Luxury extensions", "Nail design artistry", "Wellness treatments for nail health"]
    }
  ];

  return (
    <div className="home-services-container">
      <div className="services-content">
        <h2 className="services-title">Our Signature Services</h2>
        <p className="services-description">
          Every service at Lumiere is a journey toward your most radiant self—crafted with precision, passion, and the world's finest products.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="salon-image-container">
          <img src={homeServiceImage} alt="Luxury Salon Interior" className="salon-image" />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
