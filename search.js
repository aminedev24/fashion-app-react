import React, { useState } from "react";
import products from "./productsObj";
//import "./style.css";
import { useContext } from 'react';
import { CartContext } from "./cartContext";

const SearchIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
  
    // Check if searchValue is empty before filtering
    const results = searchValue.trim() === '' ? [] :
      Object.keys(products)
        .map(category =>
          products[category].filter(product =>
            product.name.toLowerCase().includes(searchValue)
          )
        )
        .reduce((acc, val) => acc.concat(val), []);
  
    setSearchResults(results);
  };
  
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="search-container">
      <button className="search-icon" onClick={handleSearchClick}>
        <i className="fa fa-search"></i>
      </button>
      <div className={`search-input-container ${isExpanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <button className="close-button">&times;</button>
        <div className="search-results-container">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id}>
              <img src={result.image} alt={result.name} />
              <p>{result.name}</p>
              <p>{result.price}</p>
              <button className="product-action-button"onClick={() => addItemToCart(result)}>Add to cart</button>
            </div>
          ))
        ) : (
          <div>Product not found</div>
        )}
      </div>

      </div>
    </div>
  );
};

export default SearchIcon;
