import React from 'react';
import threadingwaxing1 from '../../assets/threadingwaxing1.png';
import threadingwaxing2 from '../../assets/threadingwaxing2.png';
import button from '../../assets/Button.png';
import './Threading.css';

const Threading = () => {
  return (
    <div className="threading-page">
      {/* Content Section */}
      <section className="threading-content">
        <div className="container">
          <div className="ritual-section">
            <p>Every Ritual Begins With A Personalized Consultation, Followed By Techniques And Products Tailored To Your Skin

Type and Lifestyle. Whether It’s A Simple Clean-up, An Indulgent Facial, Or A Full-body Treatment

 Each Service Is Performed .</p>
          </div>
          <div className="threading-grid">
            <div className="threading-text">
              <h2>Threading & Waxing</h2>
              <p className="threading-glow-text">
                Where precision meets comfort. Gentle, refined techniques
                 that define and smooth with utmost care - leaving your skin
                fresh and flawless.
              </p>
              <p className="threading-includes">
                <strong>Includes:</strong> Eyebrow & facial threading / Full-body waxing /
                Sensitive-skin options
              </p>
              <div className="threading-scissors-container">
                <img 
                  src={button} 
                  alt="Book Now" 
                  className="threading-scissors-image" 
                />
              </div>
            </div>

            <div className="threading-images">
              <div className="threading-image-container">
                <img src={threadingwaxing1} alt="Threading Treatment" className="threading-img" />
              </div>
              <div className="threading-image-container">
                <img src={threadingwaxing2} alt="Waxing Treatment" className="threading-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Threading;