import React from 'react';
import './relatedproduct.css';
import Item from '../Item/Item.jsx';
import data_product from '../../assets/data.js';
const Ralatedproducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default Ralatedproducts;
