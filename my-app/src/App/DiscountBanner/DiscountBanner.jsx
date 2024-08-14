import React, { useState } from 'react';
import './discountBanner.css'; 

const DiscountBanner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose(); 
  };
  return (
    <div className={`discount-banner ${isVisible ? 'visible' : 'hidden'}`}>
      <p className='p_discount'>Sign up and get 20% off to your first order. <a className='a_discount' href='#'>Sign Up Now</a>  <span className="close-btn" onClick={handleClose}>×</span></p>
    </div>
  );
};

export default DiscountBanner;