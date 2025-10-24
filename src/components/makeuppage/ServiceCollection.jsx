import React from 'react';
import './ServiceCollection.css';

const ServiceCollection = () => {
  const services = [
    'Light & Party Makeup',
    'Bridal & Groom Makeup', 
    'Hair Updos',
    'Saree Draping',
    'Mehendi'
  ];

  return (
    <section className="service-collection-section">
      <div className="service-collection-container">
        <h2 className="service-collection-title">Our Complete Service Collection</h2>
        <div className="service-buttons-container">
          {services.map((service, index) => (
            <button key={index} className="service-button">
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCollection;
