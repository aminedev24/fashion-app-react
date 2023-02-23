import React, { useState } from "react";

const SearchIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="search-container">
      <button className="search-icon" onClick={handleSearchClick}>
        <i className="fa fa-search"></i>
      </button>
      <div className={`search-input-container ${isExpanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}


export default SearchIcon;