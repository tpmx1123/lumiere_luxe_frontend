import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import HairServicePage from './pages/HairServicePage.jsx';
import NailServicePage from './pages/NailServicePage.jsx';
import SkinBodyServicePage from './pages/SkinBodyServicePage.jsx';
import MakeupPage from './pages/makeuppage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hair-service-in-madhapur" element={<HairServicePage />} />
          <Route path="/nail-service-in-madhapur" element={<NailServicePage />} />
          <Route path="/skin-body-service-in-madhapur" element={<SkinBodyServicePage />} />
          <Route path="/makeup-page-in-madhapur" element={<MakeupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
