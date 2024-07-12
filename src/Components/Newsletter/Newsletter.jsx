import React from 'react';
import './newsletter.css';
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Mail</h1>
      <p>Subscribe To Our Newsletterand stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
