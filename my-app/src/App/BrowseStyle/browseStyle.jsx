import React from 'react';
import { Link } from 'react-router-dom';
import './browseStyle.css';
import Casual from '../assets/browse/casual.png';
import Formal from '../assets/browse/formal.png';
import Gym from '../assets/browse/gym.png';
import Party from '../assets/browse/party.png';

const BrowseStyle = () => {

  return (
    <>
      <div className='browseStyle'>
        <div className='container_browse'>
          <h1>BROWSE BY DRESS STYLE</h1>
          <div className='browse-cards'>
            <Link to="/casual" className='browse-card'>
              <p>Casual</p>
              <img src={Casual} alt="Casual"></img>
            </Link>
            <Link to="/formal" className='browse-card'>
              <p>Formal</p>
              <img src={Formal} alt="Formal"></img>
            </Link>
            <Link to="/party" className='browse-card'>
              <p>Party</p>
              <img src={Party} alt="Party"></img>
            </Link>
            <Link to="/gym" className='browse-card gym'>
              <p>Gym</p>
              <img src={Gym} alt="Gym"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseStyle;