import React, { useState } from "react";


const categories = ['all', 'button', 'short', 'underwear'];

const Sidebar = ({ handleCategoryClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sidebar">
      <button className="menu-toggle" onClick={toggleMenu}>
        Categories
      </button>
      <ul className={`menu ${showMenu ? "show" : ""}`}>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategoryClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
