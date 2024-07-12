import './navbar.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState('shop');
  const { navcartCount } = useContext(ShopContext);
  return (
    <div className="navbar">
      <ToastContainer />
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop');
            navigate('/');
          }}
        >
          Shop {menu === 'shop' ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('men');
            navigate('/mens');
          }}
        >
          Men {menu === 'men' ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('women');
            navigate('/women');
          }}
        >
          Women {menu === 'women' ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids');
            navigate('/kids');
          }}
        >
          Kids {menu === 'kids' ? <hr></hr> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('token') ? (
          <button
            onClick={() => {
              toast.success('Sucessfully LoggedOut');
              localStorage.removeItem('token');
              window.location.replace('/');
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </button>
        )}
        <img
          src={cart}
          alt=""
          onClick={() => {
            navigate('/cart');
          }}
        />
        <div className="nav-cart-count">{navcartCount()}</div>
      </div>
    </div>
  );
};

export default Navbar;
