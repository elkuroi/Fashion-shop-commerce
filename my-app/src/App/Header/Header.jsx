import React, { useState } from 'react';
import './header.css';
import SearchBar from './SearchBar';
import Logo from '../assets/logo.png';
import Arrow from '../assets/arrow.png';
import Cart from '../assets/cart.png';
import User from '../assets/user.png';
import Close from '../assets/close.png';

const AppHeader = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className="discount-banner">
          <p>Sign up and get 20% off on your first order. 
          <a href="#" className="sign-up-link">Sign Up Now</a> 
          <img src={Close} className="close-btn" onClick={handleBannerClose} alt="Close"/>
          </p>
        </div>
      )}
      <div className={`header ${isBannerVisible ? 'header-shifted' : ''}`}>
        <img className="logo" src={Logo} alt="Logo" />
        <div className="menu">
          <div className="dropdown">
            <a href="#" className="dropdown-toggle">
              Shop <img className="arrow" src={Arrow} alt="Arrow" />
            </a>
            <div className="dropdown-menu">
              <a href="#">Men's</a>
              <a href="#">Women's</a>
              <a href="#">New items</a>
            </div>
          </div>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
          <SearchBar />
          <a href="#"><img className="cart-img" src={Cart} alt="Cart" /></a>
          <a href="#"><img src={User} alt="User" /></a>
        </div>
      </div>
    </>
  );
};

export default AppHeader;