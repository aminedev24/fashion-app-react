import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Banner from './banner';
import FeaturedProducts from './featured';
import { CartProvider } from './cartContext';
import About from './about';
import ServicesContainer from './services'
function Main() {


  return (
    <CartProvider>
      <div>
        <Navbar />
        <Banner />
        <ServicesContainer />
        <FeaturedProducts category="button" />
        <About />
      </div>
    </CartProvider>
  );
}



ReactDOM.render(<Main />, document.getElementById('root'));
