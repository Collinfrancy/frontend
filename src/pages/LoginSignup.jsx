import React from 'react';
import './CSS/loginsignup.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import customAxios from '../../../admin/src/utils/customAxios.js';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    cart: {},
  });

  const [state, setState] = useState('Login');
  const navigate = useNavigate();
  const onChange = (e, field) => {
    setSignup({ ...signup, [field]: e.target.value });
  };
  console.log(signup);

  const gotoHomePage = () => {
    navigate('/');
  };

  const login = async () => {
    setState('Login');
    try {
      const response = await customAxios.post('/signlogin/login', signup);
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      toast.success('Login successfull, Welcome back ', {
        onClose: () => {
          gotoHomePage();
        },
        autoClose: 1000,
      });
    } catch (e) {
      toast.error('Email or password incorrect');
    }
  };

  const sign = async () => {
    console.log('hello');
    try {
      await customAxios.post('/signlogin/signup', signup);
      toast.success('Signup successfull, please login', {
        onClose: () => {
          login();
        },
        autoClose: 1000,
      });
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="loginsignup">
      <ToastContainer />

      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' ? (
            <input
              type="text"
              placeholder="Your NAme"
              onChange={e => onChange(e, 'name')}
            />
          ) : (
            ''
          )}
          <input
            type="email"
            placeholder="EmailAddress"
            onChange={e => onChange(e, 'email')}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => onChange(e, 'password')}
          />
        </div>
        <button
          onClick={() => {
            state === 'Login' ? login() : sign();
          }}
        >
          Continue
        </button>
        <div className="loginsignup-login">
          {state === 'Sign Up' ? (
            <p>
              Already have an Account{' '}
              <span
                onClick={() => {
                  setState('Login');
                }}
              >
                Login Here
              </span>
            </p>
          ) : (
            <p>
              Create an Account{' '}
              <span
                onClick={() => {
                  setState('Sign Up');
                }}
              >
                Click Here
              </span>
            </p>
          )}
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continunug,I agree to the termsof use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
