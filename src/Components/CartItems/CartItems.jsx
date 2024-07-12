import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icn from '../../assets/cart_cross_icon.png';
const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-title">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map(e => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="classitems-format cartitems-title">
                <img src={e.image} alt="" className="classitemimg" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="quantity">{cartItems[e.id]}</div>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icn}
                  alt=""
                  className="carticon-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        } else return null;
      })}
      <div className="carttotal">
        <h1>Cart Totals</h1>
        <div className="carttotals">
          <div className="sub">
            <p>subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="sub">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="total">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
        </div>
        <button>Click To Proceed</button>
      </div>
    </div>
  );
};

export default CartItems;
