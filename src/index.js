import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// SEO Optimization: Set document title dynamically
document.title = "Lumiere Luxe - Luxury Salon & Spa | Hyderabad | Sasha Clinics";

// SEO Optimization: Add meta description dynamically
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.setAttribute('content', 'Lumiere Luxe - Luxury Salon & Spa. Experience transformative self-care with our expert team for hair, makeup, facials, wellness therapies, and nail artistry in Hyderabad.');
}

// SEO Optimization: Add structured data for better search engine understanding
const addStructuredData = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lumiere Luxe",
    "alternateName": "Sasha Clinics",
    "url": "https://lumiereluxe.com",
    "description": "Luxury Salon & Spa offering transformative beauty services in Hyderabad",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lumiereluxe.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });
  document.head.appendChild(script);
};

// Initialize SEO optimizations
addStructuredData();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
