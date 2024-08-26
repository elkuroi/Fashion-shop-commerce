import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductReviews from '../../App/ProductsReview/ProductsReview';
import CurrentOffers from '../../App/CurrentOffers/CurrentOffers';
import '../CurrentProduct/currentProduct.css';
import AppHeader from '../../App/Header/Header';
import Footer from '../../App/Footer/Footer';
import T_shirt from '../../App/assets/products/t-shirt-black.png';
import Skinny from '../../App/assets/products/skinny-jeans.png';
import Shirt from '../../App/assets/products/shirt.png';
import Orange_t from '../../App/assets/products/orange-t.png';
import Shirt_green from '../../App/assets/products/shirt-green.png';
import Orange_t2 from '../../App/assets/products/orange-t2.png';
import Jeans_shorts from '../../App/assets/products/jeans-shorts.png';
import Skinny_black from '../../App/assets/products/skinny-black.png';
import RedPolo from '../../App/assets/offers/red_polo.png';
import Gradient from '../../App/assets/offers/gradient.png';
import BluePolo from '../../App/assets/offers/blue_polo.png';
import BlackStrips from '../../App/assets/offers/black_strips.png';
import Star from '../../App/assets/products/star.png';
import Minus from '../../App/assets/cart/minus.png';
import Plus from '../../App/assets/cart/plus.png';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../../App/Redux/cartSlice';

export const products = [
  {
    id: "t-shirt",
    name: "T-Shirt With Tape Details",
    image: T_shirt,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 120,
    color: "Black",
    category: "new-arrivals"
  },
  {
    id: "skinny-jeans",
    name: "Skinny Fit Jeans",
    image: Skinny,
    rating: 3,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 240,
    category: "new-arrivals"
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    image: Shirt,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 180,
    color: "Red,White,Blue",
    category: "new-arrivals"
  },
  {
    id: "sleeve-striped-t-shirt",
    name: "Sleeve Striped T-shirt",
    image: Orange_t,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 130,
    color: "Orange",
    category: "new-arrivals"
  },
  {
    id: "vertical-striped-shirt",
    name: "Vertical Striped Shirt",
    image: Shirt_green,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 212,
    color: "Green",
    category: "new-arrivals"
  },
  {
    id: "courage-graphic-t-shirt",
    name: "Courage Graphic T-shirt",
    image: Orange_t2,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 145,
    color: "Orange",
    category: "new-arrivals"
  },
  {
    id: "bermuda-shorts",
    name: "Loose Fit Bermuda Shorts",
    image: Jeans_shorts,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 80,
    color: "Jeans",
    category: "new-arrivals"
  },
  {
    id: "faded-skinny-jeans",
    name: "Faded Skinny Jeans",
    image: Skinny_black,
    rating: 4,
    description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 210,
    color: "Black",
    category: "new-arrivals"
  },
  {
    id: "blue-polo",
    name: "Polo with Contrast Trims",
    image: BluePolo,
    rating: 4,
    color: "Blue",
    price: 120,
  },
  {
    id: "gradient",
    name: "Gradient Graphic T-shirt",
    image: Gradient,
    rating: 3,
    color: "White,Gradient",
    price: 240,
  },
  {
    id: "red-polo",
    name: "Polo with Tipping Details",
    image: RedPolo,
    rating: 4,
    color: "Red",
    price: 180,
  },
  {
    id: "black-striped-t",
    name: "Black Striped T-shirt",
    image: BlackStrips,
    rating: 4,
    color: "White, Black",
    price: 130,
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setErrorMessage(""); // Clear the error message when a color is selected
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setErrorMessage(""); // Clear the error message when a size is selected
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage("Please select both color and size before adding to cart.");
      return;
    }
  
    const productToAdd = {
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };
    dispatch(addToCart(productToAdd));
    setErrorMessage(""); // Очистка сообщения об ошибке после добавления
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const renderStars = (rating) => {
    return (
      <div className="stars-current">
        {Array(rating).fill().map((_, i) => (
          <img key={i} src={Star} alt={`${rating} stars`} className="star" />
        ))}
        <p className="rating-text">{`${rating}/5`}</p>
      </div>
    );
  };

  return (
    <>
      <AppHeader />
      <div className="horizontal-line-products"></div>
      <div className="product-page">
        <div className='product-container'>
          <div className='img-product'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='description-product'>
            <h1>{product.name}</h1>
            <div className="product-rating">
              {renderStars(product.rating)}
            </div>
            <p className='price-p'>${product.price}</p>
            <p className='description-p'>{product.description}</p>
  
            <div className="color-selection">
              <div className="horizontal-line-products"></div>
              <h3>Select Colors</h3>
              <div className="color-options">
                <div
                  className={`color-circle orange ${selectedColor === 'orange' ? 'selected' : ''}`}
                  onClick={() => handleColorClick('orange')}
                ></div>
                <div
                  className={`color-circle black ${selectedColor === 'black' ? 'selected' : ''}`}
                  onClick={() => handleColorClick('black')}
                ></div>
                <div
                  className={`color-circle blue ${selectedColor === 'blue' ? 'selected' : ''}`}
                  onClick={() => handleColorClick('blue')}
                ></div>
              </div>
            </div>
  
            <div className="size-selection">
              <div className="horizontal-line-products"></div>
              <h3>Choose Size</h3>
              <div className="size-options">
                <button
                  className={selectedSize === 'S' ? 'selected' : ''}
                  onClick={() => handleSizeClick('S')}
                >Small</button>
                <button
                  className={selectedSize === 'M' ? 'selected' : ''}
                  onClick={() => handleSizeClick('M')}
                >Medium</button>
                <button
                  className={selectedSize === 'L' ? 'selected' : ''}
                  onClick={() => handleSizeClick('L')}
                >Large</button>
                <button
                  className={selectedSize === 'XL' ? 'selected' : ''}
                  onClick={() => handleSizeClick('XL')}
                >X-Large</button>
              </div>
            </div>
            <div className="horizontal-line-products"></div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
            <div className="quantity-selection">
              <div className="current-options">
                <div className="current-button">
                  <button onClick={decreaseQuantity}>
                    <img src={Minus} alt="Decrease" />
                  </button>
                  <p className='current-product-count'>{quantity}</p>
                  <button onClick={increaseQuantity}>
                    <img src={Plus} alt="Increase" />
                  </button>
                </div>
              </div>
              <button 
                className="add-to-cart" 
                onClick={handleAddToCart}
                disabled={!selectedColor || !selectedSize}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductReviews/>
      <CurrentOffers/>
      <Footer />
    </>
  );
};

export default ProductPage;