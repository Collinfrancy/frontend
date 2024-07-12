import React, { useContext } from 'react';
import './CSS/shopcategory.css';
import arrow from '../assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
const ShopCategory = props => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="bannerimg" src={props.banner} alt="" />
      <p>
        <span>showing 12 </span>out of 36
      </p>
      <div className="sortt">
        <p>Sort</p>
        <img src={arrow} alt="" />
      </div>
      <div className="shopcategory-sort">
        {all_product.map((item, i) => {
          if (props.category == item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
