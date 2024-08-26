import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './footer.css';
import Email from '../assets/footer/mail.png';
import Logo from '../assets/main/logo.png';
import Twitter from '../assets/footer/twitter.png';
import Facebook from '../assets/footer/facebook.png';
import Git from '../assets/footer/git.png';
import Instagram from '../assets/footer/instagram.png';
import Visa from '../assets/footer/visa.png';
import Master from '../assets/footer/master.png';
import Paypal from '../assets/footer/paypal.png';
import Apple from '../assets/footer/apple.png';
import Google from '../assets/footer/google.png';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer_split'>
          <div className='footer_w'>
            <div className='footer_email'>
              <div className='footer_h2'>
                <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
              </div>
              <div className='footer_email_forms'>
                <input placeholder='Enter your email address' className='input_email' />
                <img src={Email} alt="Email Icon" />
                <button className='email_button'>Subscribe to Newsletter</button>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_main'>
          <div className='footer-left'>
          <Link to="/"> <img src={Logo} alt="Logo" /></Link>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className='socials_footer'>
              <Link to="/twitter"><img src={Twitter} alt="Twitter" /></Link>
              <Link to="/facebook"><img src={Facebook} alt="Facebook" /></Link>
              <Link to="/github"><img src={Git} alt="GitHub" /></Link>
              <Link to="/instagram"><img src={Instagram} alt="Instagram" /></Link>
            </div>
          </div>

          <div className='column_footer'>
            <ul>
              <li className='li_footer'><h2>COMPANY</h2></li>
              <li className='li_footer'><p><Link to="/about">About</Link></p></li>
              <li className='li_footer'><p><Link to="/features">Features</Link></p></li>
              <li className='li_footer'><p><Link to="/works">Works</Link></p></li>
              <li className='li_footer'><p><Link to="/career">Career</Link></p></li>
            </ul>
          </div>
          <div className='column_footer'>
            <ul>
              <li className='li_footer'><h2>HELP</h2></li>
              <li className='li_footer'><p><Link to="/support">Customer Support</Link></p></li>
              <li className='li_footer'><p><Link to="/delivery">Delivery Details</Link></p></li>
              <li className='li_footer'><p><Link to="/terms">Terms & Conditions</Link></p></li>
              <li className='li_footer'><p><Link to="/privacy">Privacy Policy</Link></p></li>
            </ul>
          </div>
          <div className='column_footer'>
            <ul>
              <li className='li_footer'><h2>FAQ</h2></li>
              <li className='li_footer'><p><Link to="/account">Account</Link></p></li>
              <li className='li_footer'><p><Link to="/manage-deliveries">Manage Deliveries</Link></p></li>
              <li className='li_footer'><p><Link to="/orders">Orders</Link></p></li>
              <li className='li_footer'><p><Link to="/payments">Payments</Link></p></li>
            </ul>
          </div>
          <div className='column_footer'>
            <ul>
              <li className='li_footer'><h2>RESOURCES</h2></li>
              <li className='li_footer'><p><Link to="/ebooks">Free eBooks</Link></p></li>
              <li className='li_footer'><p><Link to="/tutorial">Development Tutorial</Link></p></li>
              <li className='li_footer'><p><Link to="/blog">How to - Blog</Link></p></li>
              <li className='li_footer'><p><Link to="/youtube-playlist">Youtube Playlist</Link></p></li>
            </ul>
          </div>
        </div>
        <div className='line-fix'>
          <div className='horizontal-line-footer'></div>
        </div>
        <div className='copy_payments-con'>
          <div className='copy_payments'>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className='payments'>
              <Link to="/visa"><img src={Visa} alt="Visa" /></Link>
              <Link to="/mastercard"><img src={Master} alt="MasterCard" /></Link>
              <Link to="/paypal"><img src={Paypal} alt="PayPal" /></Link>
              <Link to="/apple-pay"><img src={Apple} alt="Apple Pay" /></Link>
              <Link to="/google-pay"><img src={Google} alt="Google Pay" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
