import React from 'react';
import Threading from '../components/skinandbody/Threading.jsx';
import Bleach from '../components/skinandbody/Bleach .jsx';
import Footer from '../components/Footer.jsx';
import Facials from '../components/skinandbody/Facials.jsx';
import SkinAndBodyHome from '../components/skinandbody/skinandbodyhome.jsx';

const SkinBodyServicePage = () => {
  return (
    <>
      <SkinAndBodyHome />
      <Threading />
      <Bleach />
      <Facials />
      <Footer />
    </>
  );
};

export default SkinBodyServicePage;
