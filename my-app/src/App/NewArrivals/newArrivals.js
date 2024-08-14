import React from 'react';
import './newArrivals.css';
import T_shirt from '../assets/products/t-shirt-black.png'
import Star from '../assets/products/star.png'

const NewArrivals = () => {

  return (
    <>
    <div className='newArrivals'>
        <div className='container-arrivals'>
        <h1>NEW ARRIVALS</h1>
        <div className='products'>
                <div className='product-card'>
                    <img src={T_shirt}></img>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className='stars'>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <p>4/5</p>
                    <h2>$120</h2>
                    </div>
                </div>
                <div className='product-card'>
                    <img src={T_shirt}></img>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className='stars'>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <p>4/5</p>
                    <h2>$120</h2>
                    </div>
                </div>
                <div className='product-card'>
                    <img src={T_shirt}></img>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className='stars'>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <p>4/5</p>
                    <h2>$120</h2>
                    </div>
                </div>
                <div className='product-card'>
                    <img src={T_shirt}></img>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className='stars'>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <p>4/5</p>
                    <h2>$120</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default NewArrivals;