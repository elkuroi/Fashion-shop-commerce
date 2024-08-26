import React from 'react';
import { Link } from 'react-router-dom';
import './newArrivals.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNewArrivals, toggleTopSelling } from '../Redux/showMoreSlice'; 

import T_shirt from '../assets/products/t-shirt-black.png';
import Skinny from '../assets/products/skinny-jeans.png';
import Star from '../assets/products/star.png';
import Shirt from '../assets/products/shirt.png';
import Orange_t from '../assets/products/orange-t.png';
import Shirt_green from '../assets/products/shirt-green.png';
import Orange_t2 from '../assets/products/orange-t2.png';
import Jeans_shorts from '../assets/products/jeans-shorts.png';
import Skinny_black from '../assets/products/skinny-black.png';

const NewArrivals = () => {
  const { newArrivals, topSelling } = useSelector((state) => state.showMore);
  const dispatch = useDispatch();

  return (
    <>
      <div className='newArrivals'>
        <div className='container-arrivals'>
          <h1>NEW ARRIVALS</h1>
          <div className='products'>
            <Link to="/product/t-shirt" className='product-card'>
              <img src={T_shirt} alt="T-shirt" />
              <p>T-Shirt With Tape Details</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$120</h2>
              </div>
            </Link>

            <Link to="/product/skinny-jeans" className='product-card'>
              <img src={Skinny} alt="Skinny Jeans" />
              <p>Skinny Fit Jeans</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>3/<span className='full_stars'>5</span></p>
                </div>
                <h2>$240</h2>
              </div>
            </Link>

            <Link to="/product/checkered-shirt" className='product-card'>
              <img src={Shirt} alt="Checkered Shirt" />
              <p>Checkered Shirt</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$180</h2>
              </div>
            </Link>

            <Link to="/product/sleeve-striped-t-shirt" className='product-card'>
              <img src={Orange_t} alt="Sleeve Striped T-shirt" />
              <p>Sleeve Striped T-shirt</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$130</h2>
              </div>
            </Link>
            
            <div className={`hidden-content ${newArrivals ? 'expanded' : ''}`}>
              <Link to="/product/vertical-striped-shirt" className='product-card'>
                <img src={Shirt_green} alt="Vertical Striped Shirt" />
                <p>Vertical Striped Shirt</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$212</h2>
                </div>
              </Link>

              <Link to="/product/courage-graphic-t-shirt" className='product-card'>
                <img src={Orange_t2} alt="Courage Graphic T-shirt" />
                <p>Courage Graphic T-shirt</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$145</h2>
                </div>
              </Link>

              <Link to="/product/bermuda-shorts" className='product-card'>
                <img src={Jeans_shorts} alt="Loose Fit Bermuda Shorts" />
                <p>Loose Fit Bermuda Shorts</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$80</h2>
                </div>
              </Link>

              <Link to="/product/faded-skinny-jeans" className='product-card'>
                <img src={Skinny_black} alt="Faded Skinny Jeans" />
                <p>Faded Skinny Jeans</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$210</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className='view-all-button-container'>
            <button className='view-all-button' onClick={() => dispatch(toggleNewArrivals())}>
              {newArrivals ? 'Show Less' : 'View All'}
            </button>
          </div>
        </div>

        {/* TOP SELLING */}
        <div className='container-arrivals'>
          <div className="horizontal-line"></div>
          <h1>TOP SELLING</h1>
          <div className='products'>
            <Link to="/product/vertical-striped-shirt" className='product-card'>
              <img src={Shirt_green} alt="Vertical Striped Shirt" />
              <p>Vertical Striped Shirt</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$212</h2>
              </div>
            </Link>

            <Link to="/product/courage-graphic-t-shirt" className='product-card'>
              <img src={Orange_t2} alt="Courage Graphic T-shirt" />
              <p>Courage Graphic T-shirt</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$145</h2>
              </div>
            </Link>

            <Link to="/product/bermuda-shorts" className='product-card'>
              <img src={Jeans_shorts} alt="Loose Fit Bermuda Shorts" />
              <p>Loose Fit Bermuda Shorts</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$80</h2>
              </div>
            </Link>

            <Link to="/product/faded-skinny-jeans" className='product-card'>
              <img src={Skinny_black} alt="Faded Skinny Jeans" />
              <p>Faded Skinny Jeans</p>
              <div className='stars'>
                <div className='value_stars'>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <p>4/<span className='full_stars'>5</span></p>
                </div>
                <h2>$210</h2>
              </div>
            </Link>

            <div className={`hidden-content ${topSelling ? 'expanded' : ''}`}>
              <Link to="/product/t-shirt" className='product-card'>
                <img src={T_shirt} alt="T-shirt" />
                <p>T-Shirt With Tape Details</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$120</h2>
                </div>
              </Link>

              <Link to="/product/skinny-jeans" className='product-card'>
                <img src={Skinny} alt="Skinny Jeans" />
                <p>Skinny Fit Jeans</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>3/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$240</h2>
                </div>
              </Link>

              <Link to="/product/checkered-shirt" className='product-card'>
                <img src={Shirt} alt="Checkered Shirt" />
                <p>Checkered Shirt</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$180</h2>
                </div>
              </Link>

              <Link to="/product/sleeve-striped-t-shirt" className='product-card'>
                <img src={Orange_t} alt="Sleeve Striped T-shirt" />
                <p>Sleeve Striped T-shirt</p>
                <div className='stars'>
                  <div className='value_stars'>
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <img src={Star} alt="Star" />
                    <p>4/<span className='full_stars'>5</span></p>
                  </div>
                  <h2>$130</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className='view-all-button-container'>
            <button className='view-all-button' onClick={() => dispatch(toggleTopSelling())}>
              {topSelling ? 'Show Less' : 'View All'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
