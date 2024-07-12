import { createContext, useEffect, useState } from 'react';
import customAxios from '../../../admin/src/utils/customAxios';
import { toast } from 'react-toastify';
// import all_product from '../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = props => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAllproduct] = useState([]);

  const settingproduct = async () => {
    const response = await customAxios.get('/product/allproducts');
    setAllproduct(response.data);
    console.log(response);
  };

  useEffect(() => {
    settingproduct();
  }, []);

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(product => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const navcartCount = () => {
    let navcount = 0;

    for (let i = 0; i < 300; i++) {
      if (cartItems[i] > 0) {
        navcount += cartItems[i];
      }
    }
    return navcount;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    navcartCount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
