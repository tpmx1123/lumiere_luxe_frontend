import React from 'react';
import Home from '../components/Home.jsx';
import HomeAbout from '../components/HomeAbout.jsx';
import HomeServices from '../components/HomeServices.jsx';
import HomeJourney from '../components/HomeJourney';
import HomeProduct from '../components/HomeProduct.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Home />
      <HomeAbout />
      <HomeServices />
      <HomeJourney />
      <HomeProduct />
      <Footer />
    </>
  );
};

export default HomePage;
