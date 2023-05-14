import React from 'react';
import Account from './Account';
import BuyNow from './BuyNow';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import HowToUse from './HowToUse';
import AboutUs from './AboutUs';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Account />
      <BuyNow />
      <FAQ />
      <ContactUs />
      <HowToUse />
      <AboutUs />
    </div>
  );
}

export default Sidebar;
MainContent.js

