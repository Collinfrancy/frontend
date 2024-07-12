import React from 'react';
import './footer.css';
import logo from '../../assets/logo_big.png';
import whatsapp from '../../assets/whatsapp_icon.png';
import insta from '../../assets/instagram_icon.png';
import pinin from '../../assets/pintester_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={logo} alt="" />
        <h1>SHOPPER</h1>
      </div>

      <ul className="footer_listing">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer_icons">
        <div className="Footer_insta">
          <img src={insta} alt="" />
        </div>
        <div className="Footer_pin">
          <img src={pinin} alt="" />
        </div>
        <div className="Footer_whatsapp">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <p>Copyright @ 2024- All Rights Rserved</p>
    </div>
  );
};

export default Footer;
