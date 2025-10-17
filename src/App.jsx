import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import HomeAbout from './components/HomeAbout.jsx';
import HomeServices from './components/HomeServices.jsx';
import HomeJourney from './components/HomeJourney';
import Footer from './components/Footer.jsx';
import './App.css';
import HomeProduct from './components/HomeProduct.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HomeAbout />
      <HomeServices />
      <HomeJourney />
      <HomeProduct />
      <Footer />
    </div>
  );
}

export default App;
