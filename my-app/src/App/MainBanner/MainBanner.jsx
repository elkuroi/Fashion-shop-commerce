import React from 'react';
import { Link } from 'react-router-dom';
import './mainBanner.css';
import Banner from '../assets/banner.png';
import Versace from '../assets/versace.png'
import Zara from '../assets/zara.png'
import Gucci from '../assets/gucci.png'
import Prada from '../assets/prada.png'
import Calvin from '../assets/calvin.png'
const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='container-main'>
        <div className='text-content'>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <Link to="/destination" className='shop-button'>
            Shop now
          </Link>
          <div className='stats-banner'>

            <div className='stats'>
            <div className='stats-line'>
                <h2>200+</h2>
                <p>International Brands</p>
                </div>
            </div>
            <div className='stats'>
            <div className='stats-line'>
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
                </div>
            </div>
            <div className='stats'>
            <div className='stats-line'>
                <h2>30,000+</h2>
                <p>Happy Customers</p>
                </div>
            </div>

          </div>
        </div>
        <div className='img'>
          <img src={Banner} alt="Banner" />
        </div>
      </div>
      <div className='brands'>
            <img src={Versace}></img>
            <img src={Zara}></img>
            <img src={Gucci}></img>
            <img src={Prada}></img>
            <img src={Calvin}></img>
        </div>
    </div>
  );
};

export default MainBanner;