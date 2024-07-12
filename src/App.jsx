import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route
            path="/mens"
            element={
              <ShopCategory banner={men_banner} category="men"></ShopCategory>
            }
          ></Route>

          <Route
            path="/women"
            element={
              <ShopCategory
                banner={women_banner}
                category="women"
              ></ShopCategory>
            }
          ></Route>

          <Route
            path="/kids"
            element={
              <ShopCategory banner={kid_banner} category="kid"></ShopCategory>
            }
          ></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path=":productId" element={<Product></Product>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
