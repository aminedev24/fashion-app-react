import React, { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "./cartContext";
import SearchIcon from "./search";
import Cart from "./cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems, cartItemCount } = useContext(CartContext);

  const menuRef = useRef(null);
  const cartRef = useRef(null);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (e) => {
    const searchIcon = document.querySelector('.search-icon');
    const cartIcon = document.querySelector('.cart-icon');
    const searchContainer = document.querySelector('.search-input-container')
    const navMenu = document.querySelector('.navbar__menu')
    const cartDropDown = document.querySelector('.cart-dropdown')
    const navToggle = document.querySelector('.navbar__menu-toggle')
    if (cartIcon.contains(e.target) && !showCart) {
      console.log('cart is open');
      searchContainer.classList.contains('expanded') && searchContainer.classList.remove('expanded')
      navMenu.classList.contains('active') && navMenu.classList.remove('active');
      setIsExpanded(false);
      setShowMenu(false);
    }else if (searchIcon.contains(e.target) && !isExpanded){
      console.log('search is open');
      setShowCart(false);
      setShowMenu(false);
      navMenu.classList.contains('active') && navMenu.classList.remove('active');
      cartDropDown.classList.contains('block') && cartDropDown.classList.remove('block')
    }else if(navToggle.contains(e.target) && !showMenu) {
      console.log('menu is open');
      cartDropDown.classList.contains('block') && cartDropDown.classList.remove('block')
      searchContainer.classList.contains('expanded') && searchContainer.classList.remove('expanded')
      setShowCart(false);
      setIsExpanded(false);
    }else {
      cartDropDown.classList.contains('block') && cartDropDown.classList.remove('block')
      searchContainer.classList.contains('expanded') && searchContainer.classList.remove('expanded')
      navMenu.classList.contains('active') && navMenu.classList.remove('active');
      setShowCart(false);
      setIsExpanded(false);
      setShowMenu(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  

  return (
    <div>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <nav className="navbar">
        <div className="navbar__brand">
          <a href="#">Sakura-Shop</a>
        </div>
        <div className="navbar__menu-toggle">
          <i className="fas fa-bars" onClick={handleMenuToggle} />
        </div>
        <ul className={`navbar__menu ${showMenu ? "active" : ""}`} ref={menuRef}>
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

        <div className="components">
          <SearchIcon setIsExpanded={setIsExpanded} />
          <Cart
            cartItems={cartItems}
            cartItemCount={cartItemCount}
            showCart={showCart}
            setShowCart={setShowCart}
            cartRef={cartRef}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
