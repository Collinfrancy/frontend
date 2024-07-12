import React, { useContext } from 'react';
import './productdisplay.css';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const PRoductdisplayy = props => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const notify = () => toast.success('Added To Cart!');
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight ,usaslly knitted ,pullover shirt,closefitting,worn as an
          undershirt or outerwear
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
            // notify();
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span>Women,Tsshirt,croptop
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern,Latest
        </p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </div>
  );
};

export default PRoductdisplayy;
