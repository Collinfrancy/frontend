import React, { useEffect, useState } from 'react';
import './popular.css';
// import data_product from '../../assets/data.js';
import Item from '../Item/Item.jsx';
import customAxios from '../../../../admin/src/utils/customAxios.js';
const Popular = () => {
  const [data_product, setdataproduct] = useState([]);

  const settingdataproduct = async () => {
    const response = await customAxios.get('/product/popularinwomen');
    setdataproduct(response.data);
  };
  useEffect(() => {
    settingdataproduct();
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
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

export default Popular;
