import React, { useState } from 'react';
import './products_Review.css';
import Star from '../assets/products/star.png';
import Right from '../assets/reviews/arrow-right.png';
import Left from '../assets/reviews/arrow-left.png';
import Complete from '../assets/reviews/complete.png';

const reviewsData = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5
  },
  {
    name: "John D.",
    text: "Great service and amazing products! I will definitely shop here again.",
    rating: 5
  },
  {
    name: "Emily R.",
    text: "The quality of the clothes is outstanding. Highly recommend this store.",
    rating: 4
  },
  {
    name: "Michael B.",
    text: "Fast shipping and the products are exactly as described. Very satisfied!",
    rating: 5
  },
  {
    name: "Michael B.",
    text: "Fast shipping and the products are exactly as described. Very satisfied!",
    rating: 5
  },
  {
    name: "Michael B.",
    text: "Fast shipping and the products are exactly as described. Very satisfied!",
    rating: 5
  },
  {
    name: "Emily R.",
    text: "The quality of the clothes is outstanding. Highly recommend this store.",
    rating: 4
  },
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5
  },
  {
    name: "Emily R.",
    text: "The quality of the clothes is outstanding. Highly recommend this store.",
    rating: 4
  },
];

const ProductReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1.63 < 0
          ? reviewsData.length - 1.63 
          : prevIndex - 1.63
      );
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1.63 >= reviewsData.length
          ? 0
          : prevIndex + 1.63
      );
    };

  return (
    <div className='reviews'>
      <div className='container_reviews'>
        <div className='top_part'>
          <h1>OUR HAPPY CUSTOMERS</h1>
          <div className='arrows'>
            <a onClick={handlePrevClick}><img src={Left} alt="Left Arrow" /></a>
            <a onClick={handleNextClick}><img src={Right} alt="Right Arrow" /></a>
          </div>
        </div>
        <div className='reviews_cards'>
          {reviewsData.map((review, index) => (
            <div
              className={`reviews_card ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className='container_reviews_card'>
                <div className='stars-review'>
                  {[...Array(review.rating)].map((_, i) => (
                    <img src={Star} alt="Star" key={i} />
                  ))}
                </div>
                <div className='name_review'>
                  <h2>{review.name}</h2>
                  <img src={Complete} alt="Verified" />
                </div>
                <p>"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;