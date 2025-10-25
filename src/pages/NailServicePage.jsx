import React from 'react';
import NailServiceHome from '../components/nailservicepage/nailservicehome.jsx';
import NailArt from '../components/nailservicepage/NailArt.jsx';
import MP from '../components/nailservicepage/MP.jsx';
import LuxuryExtensions from '../components/nailservicepage/LuxuryExtensions.jsx';
import Footer from '../components/Footer.jsx';


const NailServicePage = () => {
  return (
    <>
      <NailServiceHome />
      <NailArt />
      <MP />
      <LuxuryExtensions />
      <Footer />
    </>
  );
};

export default NailServicePage;
