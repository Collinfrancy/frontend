import React from 'react';
import './offers.css';
import model1 from '../../assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={model1} alt="" />
      </div>
    </div>
  );
};

export default Offers;
