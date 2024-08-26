import React from 'react';
import './currentOffers.css';
import { Link } from 'react-router-dom'; 
import RedPolo from '../assets/offers/red_polo.png';
import Gradient from '../assets/offers/gradient.png';
import BluePolo from '../assets/offers/blue_polo.png';
import BlackStrips from '../assets/offers/black_strips.png';
import Star from '../assets/products/star.png';

const CurrentOffers = () => {
  const offers = [
    {
      id: "blue-polo",
      name: "Polo with Contrast Trims",
      image: BluePolo,
      rating: 4,
      price: 120,
    },
    {
      id: "gradient",
      name: "Gradient Graphic T-shirt",
      image: Gradient,
      rating: 3,
      price: 240,
    },
    {
      id: "red-polo",
      name: "Polo with Tipping Details",
      image: RedPolo,
      rating: 4,
      price: 180,
    },
    {
      id: "black-striped-t",
      name: "Black Striped T-shirt",
      image: BlackStrips,
      rating: 4,
      price: 130,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className='value_stars'>
        {Array(rating).fill().map((_, i) => (
          <img key={i} src={Star} alt={`${rating} stars`} />
        ))}
        <p>{rating}/<span className='full_stars'>5</span></p>
      </div>
    );
  };

  return (
    <div className='CurrentOffers'>
      <div className='container-arrivals'>
        <h1 className='h1_offers'>You might also like</h1>
        <div className='products'>
          {offers.map((offer) => (
            <Link to={`/product/${offer.id}`} className='product-card' key={offer.id}>
              <img src={offer.image} alt={offer.name} />
              <p>{offer.name}</p>
              <div className='stars'>
                {renderStars(offer.rating)}
                <h2>${offer.price}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentOffers;