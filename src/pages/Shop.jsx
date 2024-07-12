import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/Newcollections/Newcollections';
import Newsletter from '../Components/Newsletter/Newsletter';

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <Newcollections></Newcollections>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Shop;
