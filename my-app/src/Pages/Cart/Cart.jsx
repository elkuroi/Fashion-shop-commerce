import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cart.css';
import AppHeader from '../../App/Header/Header';
import Footer from '../../App/Footer/Footer';
import Minus from '../../App/assets/cart/minus.png';
import Plus from '../../App/assets/cart/plus.png';
import Delete from '../../App/assets/cart/delete.png';
import Arrow from '../../App/assets/reviews/arrow-left.png';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../App/Redux/cartSlice';
import CheckoutProcess from './CheckoutProcess';

const Cart = () => {
  const [step, setStep] = useState(0); // 0 - корзина, 1 - адрес, 2 - оплата
  const [address, setAddress] = useState('');
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleCheckoutClick = () => {
    setStep(1);
  };

  return (
    <>
      <div className='cart'>
        <AppHeader />
        <div className="horizontal-line-cart"></div>
        <h1>Your cart</h1>
        <div className='cart-container'>
          {step === 0 && cartItems.length === 0 ? (
            <div className='empty-cart-message'>
              <h2>Your cart is empty</h2>
              <p>It looks like you haven't added anything to your cart yet.</p>
            </div>
          ) : step === 0 ? (
            <>
              <div className='cart-products'>
                {cartItems.map((item) => (
                  <div className='cart-products-con' key={item.id}>
                    <div className='cart-product'>
                      <div className='product-info'>
                        <div className='info-img'>
                          <img className='info-cart-img' src={item.image} alt={item.name} />
                        </div>
                        <div className='info'>
                          <h2>{item.name}</h2>
                          <p>
                            Size: <span className='span-cart'>{item.size}</span><br />
                            Color: <span className='span-cart'>{item.color}</span>
                          </p>
                          <h3>${item.price}</h3>
                        </div>
                      </div>
                    </div>
                    <div className='cart-options'>
                      <button className='delete' onClick={() => dispatch(removeFromCart(item.id))}>
                        <img src={Delete} alt="Delete" />
                      </button>
                      <div className='count-button'>
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                          <img src={Minus} alt="Decrease" />
                        </button>
                        <p className='cart-product-count'>{item.quantity}</p>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>
                          <img src={Plus} alt="Increase" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='cart-summary'>
                <h2>Order Summary</h2>
                <div className='cart-summary-con'>
                  <div className='summary'>
                    <p>Total</p>
                    <h2 className='price-cart'>${totalPrice}</h2>
                  </div>
                  <button onClick={handleCheckoutClick}>
                    <p className='p-checkout'>Go to Checkout</p>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <CheckoutProcess step={step} setStep={setStep} setAddress={setAddress} address={address} />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;