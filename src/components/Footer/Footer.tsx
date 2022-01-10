import React from 'react';
import appleButton from '../../assets/button-apple.svg';
import googleButton from '../../assets/button-google.svg';

const Footer = () => (
  <div className="footer">
    <img className="icon" src={googleButton} alt="Download for Andoid" />
    <img className="icon" src={appleButton} alt="Download for Apple" />
  </div>
);

export default Footer;
