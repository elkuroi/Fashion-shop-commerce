import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchBar.css';
import SearchIcon from '../assets/main/search.png';
import { products } from '../../Pages/CurrentProduct/CurrentProduct';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = useCallback((e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(newQuery.toLowerCase())
      );
      setResults(filteredProducts);
    } else {
      setResults([]);
    }
  }, []);

  const handleResultClick = (id) => {
    navigate(`/product/${id}`);
    setDropdownOpen(false);
  };

  const handleFocus = () => setDropdownOpen(true);
  const handleBlur = () => setTimeout(() => setDropdownOpen(false), 100);


  const showNoResults = query && results.length === 0;

  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <img className="search-bar-icon" src={SearchIcon} alt="Search Icon" />
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search for products..."
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {isDropdownOpen && (
        <div className="search-bar-dropdown-menu">
          {showNoResults ? (
            <div className="search-bar-no-results">Nothing found</div>
          ) : (
            results.map(result => (
              <div
                key={result.id}
                className="search-bar-dropdown-item"
                onClick={() => handleResultClick(result.id)}
              >
                <img className="search-bar-item-image" src={result.image} alt={result.name} />
                <span className="search-bar-item-name">{result.name}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
