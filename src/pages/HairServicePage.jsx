import React from 'react';
import HairService from '../components/hairservicepage/hairservice';
import HairColor from '../components/hairservicepage/haircolour';
import HairStyling from '../components/hairservicepage/hairstyling';
import HairTreatment from '../components/hairservicepage/hairtreatment';
import HairCareRituals from '../components/hairservicepage/haircarerituals';
import HairExtensions from '../components/hairservicepage/hairextensions';
import Footer from '../components/Footer.jsx';
import HomeProduct from '../components/HomeProduct.jsx';
import HairServiceSub from '../components/hairservicepage/hairservicesub.jsx';

const HairServicePage = () => {
  return (
    <>
      <HairService />
      <HairServiceSub />
      <HairColor />
      <HairStyling />
      <HairTreatment />
      <HairCareRituals />
      <HairExtensions />
      <HomeProduct />
      <Footer />
    </>
  );
};

export default HairServicePage;
