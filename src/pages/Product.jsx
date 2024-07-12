import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum.jsx';
import PRoductdisplayy from '../Components/Productdisplay/PRoductdisplayy.jsx';
import Ralatedproducts from '../Components/Relatedproducts/Ralatedproducts.jsx';
const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);
  const product = all_product.find(e => e.id === Number(productId));
  console.log(product);

  return (
    <div className="product">
      <Breadcrum product={product}></Breadcrum>
      <PRoductdisplayy product={product}></PRoductdisplayy>
      <Ralatedproducts></Ralatedproducts>
    </div>
  );
};

export default Product;
