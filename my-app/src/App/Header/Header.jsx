import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';
import SearchBar from './SearchBar';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import Logo from '../assets/main/logo.png';
import Arrow from '../assets/main/arrow.png';
import Cart from '../assets/main/cart.png';
import User from '../assets/main/user.png';
import Close from '../assets/main/close.png';
import { selectTotalQuantity } from '../../App/Redux/cartSlice';

const AppHeader = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };

  return (
    <>

      <div className={`header ${isBannerVisible ? 'header-shifted' : ''}`}>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <div className="menu">
          <div className="dropdown">
            <Link to="/shop" className="dropdown-toggle">
              Shop <img className="arrow" src={Arrow} alt="Arrow" />
            </Link>
            <div className="dropdown-menu">
              <Link to="/shop/men">Men's</Link>
              <Link to="/shop/women">Women's</Link>
              <Link to="/shop/new">New items</Link>
            </div>
          </div>
          <Link to="/sale">On Sale</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/brands">Brands</Link>
          <SearchBar />
          <Link to="/cart" className="cart-link">
            <img className="cart-img" src={Cart} alt="Cart" />
            {totalQuantity > 0 && (
              <div className="cart-badge">
                {totalQuantity}
              </div>
            )}
          </Link>
          <Link to="/profile">
            <img src={User} alt="User" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppHeader;