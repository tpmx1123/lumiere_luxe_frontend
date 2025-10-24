import React from 'react'
import MakeupHome from '../components/makeuppage/makeuphome';
import LightPartyMakeup from '../components/makeuppage/LightPartyMakeup.jsx';
import BridalGroomMakeup from '../components/makeuppage/BridalGroomMakeup.jsx';
import HairUpdosSareeDraping from '../components/makeuppage/HairUpdosSareeDraping.jsx';
import ServiceCollection from '../components/makeuppage/ServiceCollection.jsx';
import Footer from '../components/Footer.jsx';

const MakeupPage = () => {
    return (
      <>
        <MakeupHome />
        <LightPartyMakeup />
        <BridalGroomMakeup />
        <HairUpdosSareeDraping />
        <ServiceCollection />
        <Footer />
      </>
    );
  };


export default MakeupPage;