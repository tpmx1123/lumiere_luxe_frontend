import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import HairServicePage from './pages/HairServicePage.jsx';
import NailServicePage from './pages/NailServicePage.jsx';
import SkinBodyServicePage from './pages/SkinBodyServicePage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hair-service" element={<HairServicePage />} />
          <Route path="/nail-service" element={<NailServicePage />} />
          <Route path="/skin-body-service" element={<SkinBodyServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
