import React, { useState, useContext } from "react";
import { CartContext } from "./cartContext";
import SearchIcon from "./search";

import Cart from "./cart";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems, cartItemCount } = useContext(CartContext);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
    <nav className="navbar">
      <div className="navbar__brand">
        <a href="#">Sakura-Shop</a>
      </div>
      <div className="navbar__menu-toggle">
        <i className="fas fa-bars" onClick={handleMenuToggle} />
      </div>
      <ul className={`navbar__menu ${showMenu ? "active" : ""}`}>
        <li className="navbar__item">
          <a href="#">Shop</a>
        </li>
        <li className="navbar__item">
          <a href="#about">About</a>
        </li>
        <li className="navbar__item">
          <a href="#">Contact</a>
        </li>

      </ul>
      
      <SearchIcon />
      <Cart cartItems={cartItems} cartItemCount={cartItemCount} />
     
    </nav>
    </div>
  );
};

export default Navbar;
