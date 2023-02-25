import React, { useState } from "react";
import products from "./productsObj";
//import "./style.css";

const SearchIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const results = Object.keys(products)
      .map(category =>
        products[category].filter(product =>
          product.name.toLowerCase().includes(searchValue)
        )
      )
      .reduce((acc, val) => acc.concat(val), []);

    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <button className="search-icon" onClick={handleSearchClick}>
        <i className="fa fa-search"></i>
      </button>
      <div className={`search-input-container ${isExpanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        {searchResults.length > 0 && (
          <div className="search-results-container">
            {searchResults.map((result) => (
              <div key={result.id}>
                <img src={result.image} alt={result.name} />
                <p>{result.name}</p>
                <p>{result.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchIcon;
