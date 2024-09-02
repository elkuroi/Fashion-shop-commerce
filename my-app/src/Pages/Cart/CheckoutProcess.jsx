import React, { useState } from 'react';
import './checkoutProcess.css';
import ArrowBack from '../../App/assets/reviews/arrow-left.png';
import CountryDropdown from '../../App/CountryDropdown/CountryDropdown';
import Stripe from '../../App/assets/cart/stripe.png';

const CheckoutProcess = ({ step, setStep, setAddress, address, totalPrice }) => {
  const [localAddress, setLocalAddress] = useState(address);
  const [YourCity, setYourCity] = useState('');
  const [isStripeSelected, setIsStripeSelected] = useState(false);

  const handleNext = () => {
    setAddress(localAddress);
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleReturnToCart = () => {
    setStep(0);
  };

  const handleStripeClick = () => {
    setIsStripeSelected(!isStripeSelected);
  };

  const handleConfirmPayment = () => {
    if (isStripeSelected) {
      // Перенаправляем на статическую ссылку Stripe Payment Link
      window.location.href = 'https://buy.stripe.com/test_14k8Aa9MT5CgdZSeUU';
    }
  };

  return (
    <div className='addressSummary'>
      {step === 1 && (
        <>
          <img className='backBtn' onClick={handleReturnToCart} src={ArrowBack} alt="Back to Cart" />
          <h2>Shipping Address</h2>
          <div className='addressSummary-con'>
            <div className='summaryForms'>
              <CountryDropdown />
              <input
                type='text'
                placeholder='Enter your city'
                value={YourCity}
                onChange={(e) => setYourCity(e.target.value)}
                className='input-city'
              />
              <input
                type='text'
                placeholder='Enter your address'
                value={localAddress}
                onChange={(e) => setLocalAddress(e.target.value)}
                className='input-address'
              />
            </div>
            <div className="checkout-buttons-next">
              <button className='next-button' onClick={handleNext}>
                <p className='p-checkout-next'>Next</p>
              </button>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className='backBtn' onClick={handlePrevious}>
            <img src={ArrowBack} alt="Back" />
          </div>
          <h2>Payment Method</h2>
          <p>Select your payment method:</p>
          <img
            className={`stripe ${isStripeSelected ? 'selected' : ''}`}
            src={Stripe}
            alt="Stripe"
            onClick={handleStripeClick}
          />
          <div className='addressSummary-con'>
            <div className="checkout-buttons-next">
              <button className='confirm' onClick={handleConfirmPayment}>
                <p className='p-checkout-next'>Confirm Payment</p>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutProcess;