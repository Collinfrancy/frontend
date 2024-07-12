import React from 'react';
import './breadcum.css';
import breadcrum_arrow from '../../assets/breadcrum_arrow.png';
const Breadcrum = props => {
  const { product } = props;
  return (
    <div className="breadcum">
      HOME <img src={breadcrum_arrow} alt="" />
      SHOP
      <img src={breadcrum_arrow} alt="" />
      {product.category}
      <img src={breadcrum_arrow} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
