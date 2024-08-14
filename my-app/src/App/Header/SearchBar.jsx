
import React, { useState } from 'react';
import './searchBar.css';
import SearchIcon from '../assets/search.png'; 

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = async (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery) {
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(newQuery)}`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (id) => {
    window.location.href = `/items/${id}`;
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <img className="search-icon" src={SearchIcon} alt="Search Icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}
        />
      </div>
      {isDropdownOpen && results.length > 0 && (
        <div className="dropdown-menu">
          {results.map(result => (
            <div
              key={result.id}
              className="dropdown-item"
              onClick={() => handleResultClick(result.id)}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

