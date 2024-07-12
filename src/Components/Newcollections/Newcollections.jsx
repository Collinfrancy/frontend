import React, { useEffect, useState } from 'react';
import './newcollections.css';
// import new_collections from '../../assets/data.js';
import Item from '../Item/Item';
import customAxios from '../../../../admin/src/utils/customAxios';
const Newcollections = () => {
  const [new_collections, setNewCollections] = useState([]);

  const settingnewcollection = async () => {
    const response = await customAxios.get('/product/newcollections');
    setNewCollections(response.data);
  };
  useEffect(() => {
    settingnewcollection();
  }, []);

  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default Newcollections;
