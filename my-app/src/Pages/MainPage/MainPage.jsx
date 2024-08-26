import React from 'react';
import AppHeader from '../../App/Header/Header';
import MainBanner from '../../App/MainBanner/MainBanner';
import NewArrivals from '../../App/NewArrivals/newArrivals';
import BrowseStyle from '../../App/BrowseStyle/browseStyle'
import Reviews from '../../App/Reviews/Reviews'
import Footer from '../../App/Footer/Footer'

const MainPage = () => {

  return (
    <>
    <div className='main_page'>
          <AppHeader />
          <MainBanner />
          <NewArrivals />
          <BrowseStyle/>
          <Reviews/>
          <Footer/>
    </div>
    </>
  );
};

export default MainPage;